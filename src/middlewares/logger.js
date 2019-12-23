const logger = require('pino')({
  enabled: process.env.NODE_ENV !== 'test',
  prettyPrint: {
    translateTime: true,
  },
});

const expressLogger = require('express-pino-logger')(
  { logger },
);

module.exports = {
  logger,
  expressLogger,
};
