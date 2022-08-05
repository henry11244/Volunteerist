const router = require("express").Router();
const userRoutes = require("./userRoutes.js");

// Deleted dashboard variable and router.use as the file is no longer there

router.use("/user", userRoutes);

module.exports = router;
