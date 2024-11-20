const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/router.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Questa e' la root!");
  res.send("Hello World!");
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`il server sta ascoltando sulla porta: ${port}`);
});