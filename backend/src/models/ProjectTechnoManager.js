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

  deleteFromVideoId(videoId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE project_id = ?`,
      [videoId]
    );
  }
}

module.exports = ProjectTechnoManager;
