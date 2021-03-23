const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes, QuotesRoutes } = require("./routes");
const { NotFoundMiddleware } = require("./middlewares");

// ruta que queremos hacer publica
server.use(express.static("./public"));

//transformar las peticones post para manejarlas en json
server.use(express.json());

server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
