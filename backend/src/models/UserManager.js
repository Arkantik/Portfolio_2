const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.database.query(
      `SELECT id, email, password, is_admin FROM ${this.table} WHERE email = (?)`,
      [email]
    );
  }
}

module.exports = UserManager;
