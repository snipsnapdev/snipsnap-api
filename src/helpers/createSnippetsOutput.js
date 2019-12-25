// takes the db query result in JSON and formats it as a proper
// snipsnap.code-snippets file
// createSnippetsOutput(queryResult: Array) -> JSON
const createSnippetsOuput = (queryResult = []) =>
  JSON.stringify(
    queryResult
      .map(JSON.stringify)
      .map(JSON.parse)
      .map(({ snippets }) => snippets)
      // logic for name spacing the snippets like gatsby-image__imageQuerySnippet
      // could be added here
      .reduce((storage, snippet) => ({ ...storage, ...snippet }), {})
  );

module.exports = createSnippetsOuput;
