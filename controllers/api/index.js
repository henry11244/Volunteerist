const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");

router.use("/user", userRoutes);
router.use("/events", dashboardRoutes);

module.exports = router;
