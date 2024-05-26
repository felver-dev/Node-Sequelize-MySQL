const { User } = require("../models");

const getUsers = (req, res) => {
  User.findAll()
    .then((user) => {
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });

      if (user) return res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((user) => {
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });

      if (user) return res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
};

const createUser = (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  User.create(user)
    .then((user) => res.status(201).json({ success: true, data: user }))
    .catch((err) => res.status(500).json({ success: false, error: err }));
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.destroy({ where: { id: id } })
    .then((user) => {
      return res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;

  User.update(req.body, { where: { id: id } })
    .then((user) => {
      return res.status(200).json({ success: true, data: user });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
