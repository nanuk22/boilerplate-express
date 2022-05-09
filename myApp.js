let express = require('express');
console.log("Hello World");

let app = express();
// app.get("/", function(req, res) {
//         res.send('Hello Express');
// });

const absolutePathToHtml = __dirname + "/views/index.html";
const absolutePathToAssets = __dirname + "/public";

app.get("/", function(req, res) {
  res.sendFile(absolutePathToHtml);
});

app.use("/public", express.static(absolutePathToAssets));

app.get("/json", function(req, res) {
  res.json({"message": "Hello json"});
});





































 module.exports = app;
