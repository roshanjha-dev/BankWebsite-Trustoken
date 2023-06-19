const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const app = express();

const routes = require("./routes/main");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBSession = require("connect-mongodb-session")(session);

const mongoURI = "mongodb://localhost:27023/sessions";

mongoose
  .connect(mongoURI)
  .then((res) => {
    console.log("MongoDB Connected!");
  });

const store = new MongoDBSession({
    uri: mongoURI,
    collection: "mySessions"
});

app.use(
    session({
        secret: "Key that will sign the cookie",
        resave: false,
        saveUninitialized: false,
        store: store
    })
);
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