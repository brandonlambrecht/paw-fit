const { Health } = require('../models');

const healthData = [
    {
        health_vaccination: 'vaccinated',
        health_neuter: 'spayed',
        health_diseases: 'no kind of illness',
    },
    {
        health_vaccination: 'vaccinated',
        health_neuter: 'spayed',
        health_diseases: 'no kind of illness',
    },
    {
        health_vaccination: 'need some vaccinations',
        health_neuter: 'not neutered',
        health_diseases: 'no kind of illness',
    },
    {
        health_vaccination: 'vaccinated',
        health_neuter: 'neutered',
        health_diseases: 'no kind of illness',
    },
];

const seedHealth = () => Health.bulkCreate(healthData);

module.exports = seedHealth;

