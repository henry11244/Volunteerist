const router = require("express").Router();
const { User } = require("../../models");

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
