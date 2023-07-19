require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

const models = {};

const ProjectManager = require("./ProjectManager");
const TechnoManager = require("./TechnoManager");
const ProjectTechnoManager = require("./ProjectTechnoManager");
const UserManager = require("./UserManager");

models.project = new ProjectManager();
models.project.setDatabase(pool);

models.techno = new TechnoManager();
models.techno.setDatabase(pool);

models.project_techno = new ProjectTechnoManager();
models.project_techno.setDatabase(pool);

models.user = new UserManager();
models.user.setDatabase(pool);

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
