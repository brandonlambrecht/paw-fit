const { Diet } = require('../models/');

const dietData = [
    {
        food_amount: 0.25,
        food_favorite: 'Friskies',
        food_allergies: "none",
    },
    {
        food_amount: 0.25,
        food_favorite: 'Tuft Paw',
        food_allergies: "Strawberry",
    },
    {
        food_amount: 0.40,
        food_favorite: 'Pro Plan',
        food_allergies: "Chocolate",
    },
    {
        food_amount: 0.25,
        food_favorite: 'Blue Buffalo',
        food_allergies: "none",
    },
];

const seedDiet = () => Diet.bulkCreate(dietData);

module.exports = seedDiet;