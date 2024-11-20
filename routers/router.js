const express = require("express");
const app = express();
const port = 3000;

// index
app.get("/posts", (req, res) => {
  console.log("lista dei post");
  res.send("lista dei post");
});

// show
app.get("/posts/:id", (req, res) => {
  console.log(`dettagli del post ${req.params.id}`);
  res.send(`dettagli del post ${req.params.id}`);
});

// create
app.post("/posts", (req, res) => {
  console.log("creazione di un nuovo post");
  res.send("creazione di un nuovo post");
});

// update
app.put("/posts/:id", (req, res) => {
  console.log(`aggiornamento del post ${req.params.id}`);
  res.send(`aggiornamento del post ${req.params.id}`);
});

// modify
app.patch("/posts/:id", (req, res) => {
  console.log(`modifica del post ${req.params.id}`);
  res.send(`modifica del post ${req.params.id}`);
});

// delete
app.delete("/posts/:id", (req, res) => {
  console.log(`cancellazione del post ${req.params.id}`);
  res.send(`cancellazione del post ${req.params.id}`);
});
