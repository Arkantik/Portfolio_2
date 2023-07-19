const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAllProjectInfo() {
    return this.database.query(
      `SELECT p.id AS projectid, p.name AS name, p.description AS description, p.img AS img, p.github AS github, p.website AS website, p.tool AS tool, GROUP_CONCAT(t.img) AS techno_images
      FROM ${this.table} AS p
      INNER JOIN project_techno AS pt ON p.id = pt.project_id
      INNER JOIN techno AS t ON pt.techno_id = t.id
      GROUP BY p.id, p.name, p.description, p.img, p.github, p.website, p.tool`
    );
  }

  create(body) {
    const { name, description, img, github, website, tool } = body;

    return this.database.query(
      `INSERT INTO ${this.table} (name, description, img, github, website, tool) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, description, img, github, website, tool]
    );
  }

  update(body, id) {
    const { name, description, img, github, website, tool } = body;

    return this.database.query(
      `UPDATE ${this.table} SET name = ?, upload_date = ?, description = ?, img = ?, github = ?, website = ?, tool, WHERE id = ?`,
      [name, description, img, github, website, tool, id]
    );
  }
}

module.exports = ProjectManager;
