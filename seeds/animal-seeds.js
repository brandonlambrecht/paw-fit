const { Animal } = require('../models/');

const animalData = [
    {
        pet_name: 'Missie',
        animal_type: 'Cat',
        pet_gender: "Female",
        pet_age: '1',
        pet_color: 'White and Black',
        pet_weight: '7',
        pet_breed: 'Munchkin',
    },
    {
        pet_name: 'Eddie',
        animal_type: 'Cat',
        pet_gender: "Male",
        pet_age: '10',
        pet_color: 'White',
        pet_weight: '10',
        pet_breed: 'Ragdoll',
    },
    {
        pet_name: 'PuppyCat',
        animal_type: 'Dog',
        pet_gender: "Male",
        pet_age: '1',
        pet_color: 'Brown',
        pet_weight: '20',
        pet_breed: 'Mutt',
    },
    {
        pet_name: 'ChocolateHead',
        animal_type: 'Dog',
        pet_gender: "Male",
        pet_age: '13',
        pet_color: 'Dark Brown',
        pet_weight: '5',
        pet_breed: 'Chihuahua',
    },
];

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;