const User = require('./User');
const Animal = require('./animal')
const Diet = require('./diet')
const Health = require('./health')


Animal.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Animal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Health.belongsToMany(Animal, {
//     foreignKey: 'Health_id',
// });

// Diet.belongsToMany(Animal, {
//     foreignKey: 'Diet_id',
// });



// Write Table relationships here

module.exports = { 
    User,
    Animal,
    Diet,
    Health, 
};
