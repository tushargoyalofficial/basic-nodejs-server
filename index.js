require("dotenv").config();
const app = require("./src/app");
const logger = require("./src/config/logger");
const port = process.env.PORT || 8181;

app.get("/health", (_req, res, _next) => {
  logger.info("/health");
  res.status(200).json({ message: "System working fine!" });
});

app.listen(port, () => {
  logger.info(`Listening on PORT ${port}`);
});
