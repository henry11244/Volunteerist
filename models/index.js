const User = require('./user');
const Event = require('./event');
const userEvent = require('./userEvent');

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Event, {
    through: 'userEvent'
});

Event.hasMany(User, {
    through: 'userEvent'
});

module.exports = {
    User,
    Event,
    userEvent
};