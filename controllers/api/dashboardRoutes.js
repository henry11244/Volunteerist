const router = require("express").Router();
const { Event } = require("../../models");
const withAuth = require("../../utils/auth.js");

// GET route for all events created by and RSVP'd to by the user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const myEvents = await Event.findAll({
      where: {
        userId: req.session.userId,
      },

      if(eventData) {
        const events = eventData.map((event) => event.get({ plain: true }));
        res.render("dashboard", {
          layout: "dashboard",
          events,
        });
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

module.exports = router;
