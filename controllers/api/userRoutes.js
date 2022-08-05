const router = require("express").Router();
const { User } = require("../../models");

// Send user to homepage when logged in
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Send user to homepage after signing up
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;

// POST route to create a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((userData) => {
      req.sessionStore.save(() => {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;

        res.json(userData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST route to find a user by login info and check password
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!userData) {
    res.status(400).json({ message: "No account could be found!" });
    return;
  }
  const validPassword = userData.checkPassword(req.body.password);

  if (!validPassword) {
    res.status(400).json({ message: "Password isn't valid!" });
    return;
  }
  req.sessionStore.save(() => {
    req.session.userId = userData.id;
    req.session.username = userData.username;
    req.session.loggedIn = true;
  });
});

// POST route for user logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
});

// POST route to delete user
router.delete("/user/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res.status(404).json({ message: "No user could be found!" });
        return;
      }
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
