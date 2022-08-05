const router = require("express").Router();
const { Event } = require("../models");
const withAuth = require("../utils/auth.js");

// GET route for all events
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll();
    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('homepage', {
      events,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route for events by location
router.get("/:location", withAuth, async (req, res) => {
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
router.get("/:category", withAuth, async (req, res) => {
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

module.exports = router;
