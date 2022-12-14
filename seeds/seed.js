const sequelize = require('../config/connection');
const { User, Event, userEvent } = require('../models');

const userData = require('./userData.json');
const eventData = require('./eventData.json');
const userEventData = require('./userEventData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Event.bulkCreate(eventData, {
        returning: true
    });

    await userEvent.bulkCreate(userEventData, {
        returning: true
    });

    process.exit(0);
}


seedDatabase();