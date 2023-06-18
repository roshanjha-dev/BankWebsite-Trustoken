const express = require("express");
const { route } = require("express/lib/application");

const routes = express.Router(); 

routes.get("/", (req, res) => {
    res.render("index");
});




routes.post("/login", (req, res) => {
    console.log(req.body);
    const { email, password, RAF } = req.body;
    // const RAFStatus = req.body.myVariable;
    console.log("RAFStatus -- " + RAF);
    if(RAF == true){
        if(email === 'admin@gmail.com' && password === '123456'){
            console.log("Done Login");
      //     res.setHeader('Content-Type', 'text/html');
          
            res.render('homepage');
        }
        else {
            // res.send("Invalid!");
        }
    }
});


routes.get("/homepage", (req, res) => {
    res.render("homepage");
  });



routes.get("/customers", (req, res) => {
    res.render("customers");
});

routes.get("/aboutus", (req, res) => {
    res.render("aboutus");
});

module.exports = routes;