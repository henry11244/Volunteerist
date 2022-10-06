const router = require("express").Router();
const { Event, User, userEvent } = require("../../models");

router.post("/:id", async (req, res) => {
  try {
    const event_id = req.params.id;
    const usereventData = await userEvent.create({
      ...req.body,
      event_id: event_id,

    }).then(() => {
      req.session.logged_in = true;
      res.status(200).json(usereventData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const RSVPData = await userEvent.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }
    res.status(200).json(RSVPData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
