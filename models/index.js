const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'user_id'
});
Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade",
    as:'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: "cascade",
    as:'blog_id'
})
module.exports = { User, Blog, Comment };
// The A.hasOne(B) association means that a One - To - One relationship exists between A and B, with the foreign key being defined in the target model(B).

// The A.belongsTo(B) association means that a One - To - One relationship exists between A and B, with the foreign key being defined in the source model(A).

// The A.hasMany(B) association means that a One - To - Many relationship exists between A and B, with the foreign key being defined in the target model(B).

// These three calls will cause Sequelize to automatically add foreign keys to the appropriate models(unless they are already present).

// The A.belongsToMany(B, {
//     through: 'C'
// }) association means that a Many - To - Many relationship exists between A and B, using table C as junction table, which will have the foreign keys(aId and bId,
//     for example).Sequelize will automatically create this model C(unless it already exists) and define the appropriate foreign keys on it.