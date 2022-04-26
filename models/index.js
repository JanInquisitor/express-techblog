const User = require('./User');
const Post = require('./Post');

// General note
// One-to-one: hasOne <---> belongsTo
// One-to-many: hasMany <---> belongsTo
// Many-to-many: belongsToMany <---> belongsToMany


User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Post};