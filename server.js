const express = require("express");
const exphbs = require("express-handlebars");
const userController = require("./controller/User.js");
const multer = require("multer");
const movieDB = require("./model/movieDB.js");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
require("dotenv").config({ path: "./config/keys.env" });

/* global algoliasearch instantsearch */

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
  })
);
app.use(
  session({
    //secret key is like a salt
    //It hashes the session id
    secret: `${process.env.SECRET_KEY}` /*scret key is most important for session. Think of it as a hash
    Never disclose this to anyone. When you push to github, don't include.
    Never use cat either, because it is the default key.*/,
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }, -> Only works for HTTPS. We are using HTTP protocol
  })
);
app.use((req, res, next) => {
  //Create a global variable that can be accessed
  //by any handlebars file
  res.locals.user = req.session.userInfo;
  //Every single handlebars file can access this variable
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use("/User/", userController);
//->Can add additional data to movies database
app.get("/", (req, res) => {
  res.render("home", {
    fT: movieDB.movie.featuredT(),
    fM: movieDB.movie.featuredM(),
    fAction: movieDB.movie.featuredG("Action"),
    fComedy: movieDB.movie.featuredG("Comedy"),
    fAdventure: movieDB.movie.featuredG("Adventure"),
    fCrime: movieDB.movie.featuredG("Crime & Thrillers"),
    fDrama: movieDB.movie.featuredG("Drama"),
  });
});

app.get("/movies", (req, res) => {
  res.render("movies", {
    data: movieDB.movie.movieTv,
  });
});
app.get("/movies/:sortOrder", (req, res) => {
  if (req.params.sortOrder === "srtWtch") {
    res.render("movies", {
      data: movieDB.movie.sortWatched(),
      buttonOne: "active",
    });
  } else if (req.params.sortOrder === "srtRls") {
    res.render("movies", {
      data: movieDB.movie.sortRelease(),
      buttonTwo: "active",
    });
  } else if (req.params.sortOrder === "srtAdd") {
    res.render("movies", {
      data: movieDB.movie.sortAdd(),
      buttonThree: "active",
    });
  }
});
app.get("/tvshows", (req, res) => {
  res.render("tvshows", {
    data: movieDB.movie.movieTv,
  });
});
app.get("/tvshows/:sortOrder", (req, res) => {
  if (req.params.sortOrder === "srtWtch") {
    res.render("tvshows", {
      data: movieDB.movie.sortWatched(),
      buttonOne: "active",
    });
  } else if (req.params.sortOrder === "srtRls") {
    res.render("tvshows", {
      data: movieDB.movie.sortRelease(),
      buttonTwo: "active",
    });
  } else if (req.params.sortOrder === "srtAdd") {
    res.render("tvshows", {
      data: movieDB.movie.sortAdd(),
      buttonThree: "active",
    });
  }
});
app.get("/movieDetails/:ui", (req, res) => {
  res.render("movieDetails", {
    data: movieDB.movie.getAMovie(req.params.ui),
    getRls: movieDB.movie.getReleaseDate(req.params.ui),
    sim: movieDB.movie.similar(req.params.ui),
  });
});
app.get("/tvDetails/:ui", (req, res) => {
  res.render("movieDetails", {
    data: movieDB.movie.getAMovie(req.params.ui),
    getRls: movieDB.movie.getReleaseDate(req.params.ui),
    sim: movieDB.movie.similar(req.params.ui),
  });
});
//route for login page

//route for submission of registration form
//route for submission of login form

//route for registration page

//for client errords

const HTTP_PORT = process.env.PORT;
app.listen(HTTP_PORT, () => {
  console.log(`Web Server is up and running on PORT ${process.env.PORT}`);

  mongoose
    .connect(process.env.MONGO_DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Connected to MongoDB`);
    })
    .catch((err) => console.log(`Error :${err}`));
});
