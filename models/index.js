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

Event.hasMany(userEvent, {
  foreignKey: "event_id",
  onDelete: "CASCADE",
});

userEvent.belongsTo(Event, {
  foreignKey: "event_id",
});

// User.hasMany(userEvent, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// userEvent.belongsTo(User, {
//   foreignKey: "user_id",
// });

Event.belongsToMany(User, {
  through: "userEvent",
  as: "eventsforuser",
  foreignKey: "event_id",
});

User.belongsToMany(Event, {
  through: "userEvent",
  as: "userforevent",
  foreignKey: "user_id",
});

module.exports = {
  User,
  Event,
  userEvent,
};
