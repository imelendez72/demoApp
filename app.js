const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
/*
const jsdom = require("jsdom");
const dom = jsdom.JSDOM();
const jquery = require("jquery")(dom.window);
*/
app.set("view engine", "pug");
app.set("views", "./views");

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

app.get("/", (req, res) => {
  //res.send("Hello there!");
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
