const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const eventRoutes = require("./eventRoutes.js");
const RSVPRoute = require("./rsvp.js");


// Deleted dashboard variable and router.use as the file is no longer there


router.use("/user", userRoutes);
router.use("/event", eventRoutes);
router.use("/rsvp", RSVPRoute);

module.exports = router;
