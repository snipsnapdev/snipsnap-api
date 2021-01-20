const app = require('./app');
const { logger } = require('./middlewares/logger');

const server = app.listen((process.env.PORT || 8000), () => {
  const { port } = server.address();
  logger.info(`Listening on port ${port}`);
});
