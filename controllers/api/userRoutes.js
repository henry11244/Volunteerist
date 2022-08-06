const router = require("express").Router();
const { User } = require("../../models");

// Send user to homepage when logged in
// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/dashboard");
//     return;
//   }
//   res.render("login");
// });


// POST route to create a new user
// Was previously just '/', changed to be more descriptive
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({
      ...req.body,
    });
    res.status(200).json(userData);
    // User.create({
    //   name: req.body.name,
    //   username: req.body.username,
    //   password: req.body.password,
    // })
    //   .then((userData) => {
    //     req.sessionStore.save(() => {
    //       req.session.userId = userData.id;
    //       req.session.username = userData.username;
    //       req.session.loggedIn = true;

    //       res.json(userData);
    //     });
    //   })
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route to find a user by login info and check password
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res.status(400).json({ message: "No account could be found!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Password isn't valid!" });
      return;
    }
    req.session.save(() => {
      req.session.userid = userData.id;
      req.session.username = userData.username;
      req.session.loggedin = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

);

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
