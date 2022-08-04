const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");

router.use("/users", homeRoutes);
router.use("/myevents", dashboardRoutes);

module.exports = router;
