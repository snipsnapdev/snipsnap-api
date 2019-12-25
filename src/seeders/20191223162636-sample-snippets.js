const reactSampleSnippets = require('./react.json');
const nodeSampleSnippets = require('./node.json');
const gatsbySampleSnippets = require('./gatsby.json');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Snippets',
    [
      {
        name: 'gatsby',
        language: 'javascript',
        snippets: JSON.stringify(gatsbySampleSnippets),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'react',
        language: 'javascript',
        snippets: JSON.stringify(reactSampleSnippets),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'node',
        language: 'javascript',
        snippets: JSON.stringify(nodeSampleSnippets),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Snippets', null, {}),
};
