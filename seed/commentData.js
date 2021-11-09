const { Comment } = require('../models');

const commentData = [{
        content: "Lorem ipsum dolor sit amet",
        userPost_id: 1,
        blogPost_id: 1
    },
    {
        content: "consectetur adipiscing elit",
        userPost_id: 2,
        blogPost_id: 2
    },
    {
        content: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        userPost_id: 3,
        blogPost_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
  