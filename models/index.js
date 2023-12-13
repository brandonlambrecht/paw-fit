const User = require('./User');
const Activity = require('./activity');
const Animal = require('./animal')
const Diet = require('./diet')
const Health = require('./health')


Animal.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Animal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Health.belongsTo(Animal, { 
    foreignKey: 'animal_id',
    // onDelete: 'CASCADE',
});

Animal.hasMany(Health, {
    foreignKey: 'animal_id'
})

Diet.belongsTo(Animal, {
    foreignKey: 'animal_id',
    onDelete: 'CASCADE',
});

Animal.hasMany(Diet, {
    foreignKey: 'animal_id'
})

Activity.belongsTo(Animal, {
    foreignKey: 'animal_id',
    onDelete: 'CASCADE',
});

Animal.hasMany(Activity, {
    foreignKey: 'animal_id'
});

// Write Table relationships here

module.exports = { 
    User,
    Animal,
    Diet,
    Health, 
    Activity
};
