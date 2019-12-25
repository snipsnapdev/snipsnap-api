const { NODE_ENV } = process.env;

const prettierOptions = NODE_ENV === 'development' ? {
  translateTime: true,
} : false;

const logger = require('pino')({
  enabled: NODE_ENV !== 'test',
  prettyPrint: prettierOptions,
});

const expressLogger = require('express-pino-logger')(
  { logger },
);

module.exports = {
  logger,
  expressLogger,
};
