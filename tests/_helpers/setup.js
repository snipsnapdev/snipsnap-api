const db = require('../../src/models');

module.exports = () => {
  afterAll(() => {
    db.sequelize.close();
  });
};
