const router = require("express").Router();
const { Event } = require("../../models");


router.post("/event", async (req, res) => {
    try {
        const eventData = await Event.create({
            ...req.body,
        });
        res.status(200).json(eventData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!eventData) {
            res.status(404).json({ message: 'No event found with this id!' });
            return;
        }

        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {

    try {
        const eventData = await Event.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        res.status(200).json(eventData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;
