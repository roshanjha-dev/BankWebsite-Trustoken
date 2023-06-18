const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const app = express();

const routes = require("./routes/main");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use('', routes);
app.use(express.json());



app.set('view engine', 'hbs');
app.set("views", "views");


app.listen(process.env.PORT | 5556, () => {
    console.log("Server started!");
})