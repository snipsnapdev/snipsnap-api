const Sequelize = require('sequelize');
const createSnippetsOutput = require('../../helpers/createSnippetsOutput');

const { Op } = Sequelize;
const { Snippet } = require('../../models');
const { validateParamsWithSchema } = require('../../middlewares/params');

const paramsSchema = {
  language: {
    isIn: {
      options: [['javascript', 'ruby', 'python', 'go']],
      errorMessage: 'Provided language is not supported',
    },
  },
  packages: {
    custom: {
      options(value, { req }) {
        const { packages } = req.body;
        if (!Array.isArray(packages)) {
          this.message = 'Packages should be an array';
          return false;
        }
        if (packages.length === 0) {
          this.message = 'Packages should not be an empty array';
          return false;
        }
        return true;
      },
    },
  },
  ide: {
    isIn: {
      options: [['vscode']],
      errorMessage: 'Provided IDE is not supported',
    },
  },
};

module.exports = [...validateParamsWithSchema(paramsSchema), async (req, res, next) => {
  try {
    const { packages, language } = req.body;
    const snippets = await Snippet.findAll({
      where: {
        name: {
          [Op.in]: packages,
        },
        language,
      },
    });
    res.send(createSnippetsOutput(snippets));
  } catch (err) {
    next(err);
  }
}];
