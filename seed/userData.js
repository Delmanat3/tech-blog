const { User } = require('../models');

const userData = [{
        id:1,
        username: 'John',
        password: 'jkohn',
        email:'me@me.com',
        blogPost:'a quite fucky '

    },
    {
        id:2,
        username: 'Jake',
        password: 'jake',
        email:'me1@me.com',
        blogPost:'a mf fucking whore'
    },
    {   id:3,
        username: 'Joe',
        password: 'joe',
        email:'me3@me.com',
        blogPost:'cunt'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;