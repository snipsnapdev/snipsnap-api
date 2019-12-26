
module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(
    'CREATE UNIQUE INDEX language_name_snippets ON "Snippets" (language, name);',
  ),

  down: (queryInterface) => queryInterface.sequelize.query(
    'DROP INDEX language_name_snippets;',
  ),
};
