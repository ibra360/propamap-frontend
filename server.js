require("dotenv").config();
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const nextRequestHandler = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return nextRequestHandler(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Server ready on port ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
