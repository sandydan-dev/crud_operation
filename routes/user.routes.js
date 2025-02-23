const router = require("express").Router();

const {
  createNewUser,
  getAllUsers,
  editUser,
  updateUserById,
  deleteUserById,
  backToHome,
} = require("../controllers/user.controller.js");

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.get("/edit/:id", editUser);
router.post("/update/:id", updateUserById);
router.post("/delete/:id", deleteUserById);
router.get("/", backToHome);

module.exports = router;
