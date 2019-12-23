const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const { logger, expressLogger } = require('./middlewares/logger');
const snippetsRouter = require('./routes/snippets');
const errorsHandler = require('./middlewares/errors');

// Middlewares
app.use(bodyParser.json());
app.use(expressLogger);
app.use(cors({ origin: process.env.CORS_ORIGIN }));
// App routes
app.use('/snippets', snippetsRouter);
app.use(errorsHandler);

// 404 error handling
app.use((req, res) => {
  const { url, method } = req;
  const message = { errors: [{ status: 404, title: 'Route not found', detail: `${method} ${url} not found` }] };
  logger.error(message);
  res.status(404).send(message);
});

module.exports = app;
