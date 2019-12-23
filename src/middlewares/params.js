const { checkSchema, validationResult } = require('express-validator');
const { prettyValidatorError } = require('../helpers/errors');

const checkMiddleware = (req, _, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = prettyValidatorError(errors);
    return next(error);
  }

  return next();
};

const validateParamsWithSchema = (schema) => [checkSchema(schema), checkMiddleware];

module.exports = {
  validateParamsWithSchema,
};
