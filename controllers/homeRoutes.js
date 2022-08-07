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
    console.log(req.body)
    const createdEvents = await Event.findAll({
      where: {
        admin_id: req.session.userid,
      },
    });

    const rsvpEvents = await userEvent.findAll({
      include: {
        model: Event,
      },
      include: {
        model: User,
      },
      where: {
        user_id: req.session.userid,
      },
    });

    console.log(rsvpEvents)

    const events = createdEvents.map((event) => event.get({ plain: true }));
    const rsvp = rsvpEvents.map((event) => event.get({ plain: true }));
    console.log(events);
    console.log(rsvp);
    res.render("dashboard", {
      events,
      rsvp,
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
