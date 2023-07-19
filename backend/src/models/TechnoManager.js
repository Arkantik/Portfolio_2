const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  constructor() {
    super({ table: "techno" });
  }

  create(body) {
    const {
      name,
      description,
      img,
      github,
      website,
      tool,
      techno_id: technoID,
    } = body;

    return this.database.query(
      `INSERT INTO ${this.table} (name, description, img, github, website, tool, techno_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, description, img, github, website, tool, technoID]
    );
  }

  update(body, id) {
    const {
      name,
      description,
      img,
      github,
      website,
      tool,
      techno_id: technoID,
    } = body;

    return this.database.query(
      `UPDATE ${this.table} SET name = ?, upload_date = ?, description = ?, img = ?, github = ?, website = ?, tool, techno_id: technoID = ?, WHERE id = ?`,
      [name, description, img, github, website, tool, technoID, id]
    );
  }
}

module.exports = TechnoManager;
