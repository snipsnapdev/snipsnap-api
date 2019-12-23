const prettyValidatorError = (errors) => ({
  code: 'ParamsValidationError',
  errors: errors.array().map((err) => ({
    status: 422,
    title: 'Invalid parameters',
    detail: err.msg,
    source: {
      parameter: err.param,
    },
  })),
});

module.exports = {
  prettyValidatorError,
};
