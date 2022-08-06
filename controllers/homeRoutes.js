const router = require("express").Router();
const { Event, User } = require("../models");
const withAuth = require("../utils/auth.js");

// GET route for all events
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll();
    const events = eventData.map((event) => event.get({ plain: true }));

    res.render("homepage", {
      events,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route for events by location
router.get("/location/:location", withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        eventLocation: req.params.location,
      },
    });

    if (!eventData) {
      res
        .status(400)
        .json({ message: "No events were found in this location!" });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    console.log(err);
  }
});

// GET route for events by category
router.get("/category/:category", withAuth, async (req, res) => {
  try {
    eventData = await Event.findAll({
      where: {
        eventCategory: req.params.category,
      },
    });

    if (!eventData) {
      res
        .status(400)
        .json({ message: "No events were found in this category!" });
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
        admin_id: req.session.userId,
      },
    });

    const rsvpEvents = await Event.findAll({
      include: {
        model: User,
      },
    });

    const events = createdEvents.map((event) => event.get({ plain: true }));
    const rsvp = rsvpEvents.map((event) => event.get({ plain: true }));
    res.render("dashboard", {
      events,
      rsvp,
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
  // if (req.session.loggedIn) {
  //   res.redirect("/dashboard");
  //   return;
  // }
  res.render("signup");
});

module.exports = router;
