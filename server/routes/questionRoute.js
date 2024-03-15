const express = require("express");
const router = express.Router();

// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

// userController
const { postQuestion ,allQuestion } = require("../controller/questionController");

// question route
router.post("/postquestions", postQuestion);
router.get("/getquestions", allQuestion);

// router.post("/questions", authMiddleware, postQuestion);

module.exports = router;

// authentication middleware
// const authMiddleware = require("../middleware/authMiddleware");

// router.get("/all-questions", authMiddleware, (req, res) => {
//   res.send("All questions");
// });

// module.exports = router;
