const express = require("express");
const bcrypt = require("bcryptjs");
const { route } = require("express/lib/application");
const routes = express.Router();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);


const UserModel = require("../models/User");
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

const isAuth = (req, res, next) => {
    if(req.session.isAuth){
        next();
    }
    else {
        res.redirect("/");
    }
};

routes.get("/", async (req, res) => {
  
  //console.log(req.session);
  //console.log(req.session.id);
  
  const username = "roshanjha";
  const email = "rohandsouza292@gmail.com";
  const password = "123456";
  const hashedPsw = await bcrypt.hash(password, 12);

  let user = await UserModel.findOne({email});

  if(user) {
    return res.render("index");
  }
  
  user = new UserModel({
    username,
    email,
    password: hashedPsw
  });

  await user.save();
  
  res.render("index");
});

routes.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password, RAF } = req.body;
  const user = await UserModel.findOne({email});

  if(!user){
    return res.redirect("/");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  console.log("RAFStatus -- " + RAF);
  if (RAF == true) {
    if (isMatch) {
      req.session.isAuth = true;
      console.log("Done Login");

      res.render("homepage");
    } else {
      res.send("/");
    }
  }
});

routes.get("/homepage", isAuth, (req, res) => {
  res.render("homepage");
});

routes.get("/customers", isAuth, (req, res) => {
  res.render("customers");
});

routes.get("/aboutus", isAuth, (req, res) => {
  res.render("aboutus");
});

routes.get("/logout", isAuth, (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/");
    })
});

module.exports = routes;
