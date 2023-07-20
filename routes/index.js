const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// catch all middleware that will run in none of the previous routes run
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
