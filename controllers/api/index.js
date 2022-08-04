const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");
const eventRoutes = require("./eventRoutes.js");

router.use("/users", userRoutes);
router.use("/myevents", dashboardRoutes);
router.use("/event", eventRoutes);

module.exports = router;
