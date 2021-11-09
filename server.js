const path = require('path');
const fs=require('fs')
const express = require('express');

const exphbs = require('express-handlebars');

const routes = require('./controller');

const sequelize = require('./config/connection');

const session = require('express-session');

//const withAuth = require('./utils/withAuth');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express()
const axios = require('axios');
const hbs = exphbs.create({});


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(session(sess));

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const PORT = process.env.PORT || 3001; 

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});