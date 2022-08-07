const path = require('path');
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const helpers = require("./utils/helpers.js");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const sequelize = require('./config/connection');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Create a session
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
