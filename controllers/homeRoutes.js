const router = require("express").Router();
const { Event } = require("../models");

// GET route for all events
router.get("/", async (req, res) => {
  try {
    eventData = await Event.findAll();
    res.json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route for events by location
router.get("/:location", async (req, res) => {
  try {
    eventData = await Event.findAll({
      where: {
        eventId: req.params.location,
      },
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "No events were found in this location! " });
  }
});

module.exports = router;
