const reactSampleSnippets = require('react.json');
const nodeSampleSnippets = require('node.json');
const gatsbySampleSnippets = require('gatsby.json');

console.log(d);

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Snippets',
      [
        {
          name: 'gatsby',
          language: 'javascript',
          snippets: JSON.stringify(gatsbySampleSnippets),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'react',
          language: 'javascriptreact',
          snippets: reactSampleSnippets,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'node',
          language: 'javascript',
          snippets: nodeSampleSnippets,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('Snippets', null, {})
};
