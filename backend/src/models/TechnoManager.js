const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  constructor() {
    super({ table: "techno" });
  }

  create(body) {
    const { name, img } = body;

    return this.database.query(
      `INSERT INTO ${this.table} (name, img) VALUES (?, ?)`,
      [name, img]
    );
  }

  update(body, id) {
    const { name, img } = body;

    return this.database.query(
      `UPDATE ${this.table} SET name = ?, img = ? WHERE id = ?`,
      [name, img, id]
    );
  }
}

module.exports = TechnoManager;
