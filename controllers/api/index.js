const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const eventRoutes = require("./eventRoutes.js");


// Deleted dashboard variable and router.use as the file is no longer there


router.use("/user", userRoutes);
router.use("/event", eventRoutes);

module.exports = router;
