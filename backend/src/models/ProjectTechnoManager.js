const AbstractManager = require("./AbstractManager");

class ProjectTechnoManager extends AbstractManager {
  constructor() {
    super({ table: "project_techno" });
  }

  create(body) {
    const { project_id: projectID, techno_id: technoID } = body;

    return this.database.query(
      `INSERT INTO ${this.table} (project_id, techno_id) VALUES (?, ?)`,
      [projectID, technoID]
    );
  }

  deleteFromProjectId(projectID) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE project_id = ?`,
      [projectID]
    );
  }
}

module.exports = ProjectTechnoManager;
