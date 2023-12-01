const sequelize = require('../config/connection');
const seedAnimals = require('./animal-seeds');
const seedHealth = require('./health-seeds');
const seedDiet = require('./diet-seeds');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedAnimals();
  await seedHealth();
  await seedDiet();

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
