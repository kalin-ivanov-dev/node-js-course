const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

app.use("/add-product", (req, resp, next) => {
  console.log("test");
  resp.send("<html></html>");
});

//filter only get request
// app.get
// app.post
// app.use -- all requests
app.post("/product", (req, resp, next) => {
  console.log(req.body);
  resp.redirect("/");
});

app.use((req, resp, next) => {
  console.log("test123");
  resp.send("<html><p>Hello from express</p></html>");
});

app.listen(3000);
