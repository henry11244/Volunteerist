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

module.exports = router;
