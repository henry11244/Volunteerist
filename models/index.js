const User = require("./user");
const Event = require("./event");
const userEvent = require("./userEvent");

User.hasMany(Event, {
  foreignKey: "admin_id",
  onDelete: "CASCADE",
});

Event.belongsTo(User, {
  foreignKey: "admin_id",
});

User.belongsToMany(Event, {
  through: "userEvent",
});

Event.belongsToMany(User, {
  through: "userEvent",
});

module.exports = {
  User,
  Event,
  userEvent,
};
