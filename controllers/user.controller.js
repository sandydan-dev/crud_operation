const User = require("../models/User.models");

// create new user 🟢
const createNewUser = async (req, res) => {
  try {
    const { username, email, mobile } = req.body;

    const user = await User({ username, email, mobile });

    const saveUser = await user.save();

    res.redirect("/users");
  } catch (error) {
    console.log("Error while creating form", error.message);
  }
};

// Get all users 🟢
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.render("index", { data: user });
  } catch (error) {
    console.log("Er:", error);
  }
};

// edit user by id 🟢
const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    // console.log("User:", user);
    res.render("edit", { data: user });
  } catch (error) {
    console.log("Er:", error);
  }
};

// update user by id 🟢
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email, mobile } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { username, email, mobile },
      { new: true }
    );
    // console.log(user);
    res.redirect("/users");
  } catch (error) {
    console.log("Error while updating user", error.message);
  }
};

// delete user by id 🟢
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.redirect("/users");
  } catch (error) {
    console.log("Error while deleting user", error.message);
  }
};

// back to home 🟢
const backToHome = (req, res) => {
  res.render("index");
};

module.exports = {
  createNewUser,
  getAllUsers,
  editUser,
  updateUserById,
  deleteUserById,
  backToHome,
};
