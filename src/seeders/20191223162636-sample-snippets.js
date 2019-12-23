
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Snippets', [{
    name: 'gatsby',
    language: 'javascript',
    snippets: '{"test": 1}',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'gatsby-image',
    language: 'javascript',
    snippets: '{"test": 1}',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'express',
    language: 'javascript',
    snippets: '{"test": 1}',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Snippets', null, {}),
};
