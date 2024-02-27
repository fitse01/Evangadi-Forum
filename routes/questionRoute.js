const express = require("express");
const router = express.Router();


router.get("/all-questions",  (req, res) => {
  res.send("All questions");
});


// authentication middleware
// const authMiddleware = require("../middleware/authMiddleware");


// router.get("/all-questions", authMiddleware, (req, res) => {
//   res.send("All questions");
// });


module.exports = router;
