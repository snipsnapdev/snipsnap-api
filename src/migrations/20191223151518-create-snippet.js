
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Snippets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    snippets: {
      type: Sequelize.JSON,
    },
    language: {
      type: Sequelize.ENUM('javascript', 'ruby', 'go', 'python'),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Snippets'),
};
