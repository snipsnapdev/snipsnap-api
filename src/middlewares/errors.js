const { logger } = require('./logger');

// eslint-disable-next-line no-unused-vars
module.exports = (error, req, res, next) => {
  logger.error(error);
  switch (error.code) {
    case 'ParamsValidationError':
      res.status(422).send({ errors: error.errors });
      break;
    default:
      res.status(500).send({ errors: [{ name: error.name, message: error.message }] });
      break;
  }
};
