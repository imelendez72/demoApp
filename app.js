const express = require("express");
const app = express();
const port = 3000;
/*
const jsdom = require("jsdom");
const dom = jsdom.JSDOM();
const jquery = require("jquery")(dom.window);
*/
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  //res.send("Hello there!");
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
