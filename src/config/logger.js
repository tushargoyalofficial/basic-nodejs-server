const pino = require("pino");

const transport = pino.transport({
  targets: [
    {
      target: "pino/file",
      options: { destination: `${__dirname}/app.log` },
    },
    {
      target: "@logtail/pino",
      options: { sourceToken: process.env.BETTERSTACK_SOURCE_TOKEN }, // https://logs.betterstack.com
    },
    {
      target: "pino-pretty",
      options: {
        colorize: true,
        singleLine: true,
      },
    },
  ],
});

module.exports = pino(
  {
    level: process.env.PINO_LOG_LEVEL || "info",
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport,
);
