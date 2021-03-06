const express = require("express");
const cors = require('cors');

const Users = require("./userDb.js");
const Posts = require("./postDb.js");

const router = express.Router();
router.use(cors());

// Custom Middleware
function allCaps(req, res, next) {
  req.body.name = req.body.name.toUpperCase();
  next();
}

// GET COMPLETE
router.get("/", async (req, res) => {
  try {
    const users = await Users.get(req.query);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving users"
    });
  }
});

// POST COMPLETE
router.post("/", allCaps, async (req, res) => {
  try {
    const newUser = await Users.insert(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Error adding the user."
    });
  }
});

// GET BY ID COMPLETE
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "The user could not be retrieved" });
  }
});

// DELETE COMPLETE
router.delete("/:id", async (req, res) => {
  try {
    const posts = await Posts.removeByUser(req.params.id);
    const user = await Users.remove(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "The id could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error removing the user"
    });
  }
});

// UPDATE COMPLETE
router.put("/:id", allCaps, async (req, res) => {
  try {
    const updatedUser = await Users.update(req.params.id, req.body);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "The User could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating the user"
    });
  }
});

router.get("/:id/posts", async (req, res) => {
  try {
    const posts = await Users.getUserPosts(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Error getting the posts for the user"
    });
  }
});



module.exports = router;
