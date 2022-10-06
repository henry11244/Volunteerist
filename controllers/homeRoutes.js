const router = require("express").Router();
const { Event, User, userEvent } = require("../models");
const withAuth = require("../utils/auth.js");


// GET route for all events
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ]
    });
    const events = eventData.map((event) => event.get({ plain: true }));
    res.render("homepage", {
      events,
      loggedin: req.session.loggedin,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route for events by location
router.get("/location/:id", async (req, res) => {
  try {
    const createdEvents = await Event.findAll({
      where: {
        location: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },]
    });
    const events = createdEvents.map((event) => event.get({ plain: true }));
    res.render("homepage", {
      events,
    });
    if (!createdEvents) {
      res.status(404).json({ message: "No results" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});

// GET route for events by location
router.get("/category/:id", async (req, res) => {
  try {
    const createdEvents = await Event.findAll({
      where: {
        category: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },]
    });
    const events = createdEvents.map((event) => event.get({ plain: true }));
    res.render("homepage", {
      events,
    });
    if (!createdEvents) {
      res.status(404).json({ message: "No results!" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});


// GET route for all events RSVP'd to by the user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const createdEvents = await Event.findAll({
      where: {
        admin_id: req.session.userid,
      },
    });

    const rsvpEvents = await userEvent.findAll({
      include: [{
        model: Event,
        on: Event.id = userEvent.event_id,

        include: [{
          model: User,
          on: User.id = userEvent.user_id,
          attributes: ['username'],

        }],

      }],

      where: {
        user_id: req.session.userid,
      },
    },
    );

    const events = createdEvents.map((event) => event.get({ plain: true }));
    const rsvp = rsvpEvents.map((event) => event.get({ plain: true }));
    console.log(rsvp)

    res.render("dashboard", {
      rsvp,
      events,

      loggedin: true,
    });

    if (!createdEvents) {
      res.status(404).json({ message: "You haven't created any events!" });
      return;
    }
    if (!rsvpEvents) {
      res.status(404).json({ message: "You haven't RSVP'd any events!" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});

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

// Get route for user logout
router.post("/logout", (req, res) => {
  if (req.session.loggedin) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;
