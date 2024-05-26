const { sequelize } = require("../models");

const Connection = async () => {
  await sequelize.sync({ force: false });
};

module.exports = { Connection };
