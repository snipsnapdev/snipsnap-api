
module.exports = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    name: DataTypes.STRING,
    snippets: DataTypes.JSON,
  }, {});
  return Snippet;
};
