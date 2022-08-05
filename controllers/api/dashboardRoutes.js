const router = require("express").Router();
const { Event } = require("../../models");
const withAuth = require("../../utils/auth.js");

// GET route for all events created by the user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const myEvents = await Event.findAll({
      where: {
        id: req.params.id,
        adminId: req.params.admin_id,
        // Do I need to add event_id here?
      },
    });

    if (!myEvents) {
      res.status(404).json({ message: "You haven't created any events!" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});

// GET route for all events RSVP'd to by the user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const rsvpEvents = await Event.findAll({
      where: {
        id: req.params.id,
        userId: req.params.user_id,
        eventId: req.params.event_id,
      },
    });
    if (!rsvpEvents) {
      res.status(404).json({ message: "You haven't RSVP'd to any events!" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
