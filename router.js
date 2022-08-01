var express = require("express");
var router = express.Router();

//route for dashboard
router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.redirect("/login");
  }
});

const credential = {
  email: "nav@gmail.com",
  password: "nav123",
};

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/");
  } else {
    res.render("base", { title: "loginSystem" });
  }
});

router.post("/login", (req, res) => {
  if (
    req.body.email == credential.email &&
    req.body.password == credential.password
  ) {
    req.session.user = req.body.email;
    res.redirect("/login");
  } else {
    err_msg="invalid username or password";
    res.render("base",{err_msg:err_msg});
  }
});

//route for
router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
