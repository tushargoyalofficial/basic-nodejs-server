const express = require("express");
const cors = require("cors");
const pino = require("pino-http");
const logger = require("./config/logger");

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  pino({
    logger,
    serializers: {
      req: (req) => ({
        id: req.id,
        method: req.method,
        url: req.url,
      }),
    },
  }),
);

module.exports = app;
