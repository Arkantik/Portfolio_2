const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
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
