const express = require("express");
const exphbs = require("express-handlebars");
const multer = require("multer");
const movieDB = require("./model/movieDB.js");
const app = express();
const nodemailer = require("nodemailer");

/* global algoliasearch instantsearch */

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
  })
);
app.use(express.urlencoded({ extended: false }));
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
app.get("/login", (req, res) => {
  res.render("login");
});
//route for submission of registration form
app.post("/log", (req, res) => {
  let login = new Promise((resolve, reject) => {
    let returnObj = {
      email: null,
      password: null,
      emailErr: null,
      passErr: null,
    };
    if (req.body.emailLog.length > 0 && req.body.passLog.length > 0) {
      returnObj.password = req.body.password;
      returnObj.email = req.body.email;
      resolve(returnObj);
      return;
    } else if (req.body.emailLog.length > 0) {
      returnObj.email = req.body.emailLog;
      returnObj.passErr = "Please Enter your password";
      reject(returnObj);
      return;
    } else if (req.body.passLog.length > 0) {
      returnObj.password = req.body.passLog;
      returnObj.emailErr = "Please Enter your email";
      reject(returnObj);
      return;
    } else {
      returnObj.passErr = "Please Enter your password";
      returnObj.emailErr = "Please Enter your email";
      reject(returnObj);
      return;
    }
  });
  login
    .then(() => {
      res.redirect("/movies");
    })
    .catch((inData) => {
      res.render("login", {
        em: inData.email,
        pswd: inData.password,
        emErr: inData.emailErr,
        pErr: inData.passErr,
      });
    });
});
//route for submission of login form

//route for registration page
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/reg", (req, res) => {
  let registration = new Promise((resolve, reject) => {
    let returnObj = {
      fN: "",
      fNmErr: null,
      lN: null,
      lNmErr: null,
      eM: null,
      eMErr: null,
      pass: null,
      passErr: null,
      cBox: null,
      cBoxErr: null,
      phoneNum: null,
      phoneNumErr: null,
    };
    if (req.body.fName.length > 0) {
      if (req.body.fName.length >= 2 && req.body.fName.length < 30) {
        returnObj.fN = req.body.fName;
      } else {
        returnObj.fNmErr = "Enter first name between 2 and 30 characters";
      }
    } else {
      returnObj.fNmErr = "Please fill out first name";
    }
    if (req.body.lName.length > 0) {
      if (req.body.lName.length >= 2 && req.body.lName.length < 30) {
        returnObj.lN = req.body.lName;
      } else {
        returnObj.lNmErr = "Enter last name between 2 and 30 characters";
      }
    } else {
      returnObj.lNmErr = "Please fill out last name";
    }
    if (req.body.emailLogReg.length > 0) {
      if (/^\w+(\.?\w)*@\w+\.[A-Za-z]{2,3}$/.test(req.body.emailLogReg)) {
        returnObj.eM = req.body.emailLogReg;
      } else {
        returnObj.eMErr = "Please enter an appropriate email format";
      }
    } else {
      returnObj.eMErr = "Please fill out email";
    }
    if (req.body.phone.length > 0) {
      if (/^[0-9]{3}[-]?\s*[0-9]{3}[-]?\s*[0-9]{4}$/.test(req.body.phone)) {
        returnObj.phoneNum = req.body.phone;
      } else {
        returnObj.phoneNumErr =
          "Please enter the following format ###-###-####";
      }
    } else {
      returnObj.phoneNumErr = "Please fill out the phone number";
    }
    if (req.body.passLogReg.length > 0) {
      if (
        /^(?=.*[!@#$%^&*-+{}])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*-+{}]{8,32}$/.test(
          req.body.passLogReg
        )
      ) {
        returnObj.pass = req.body.passLogReg;
      } else {
        returnObj.passErr =
          "Please create password with one Upper Case Letter, One Number and one special character (!@#$%^&*-+{})";
      }
    } else {
      returnObj.passErr = "Please fill out the password";
    }
    if (req.body.ckBox) {
      returnObj.cBox = true;
    } else {
      returnObj.cBox = false;
      returnObj.cBoxErr = "You must agree to Terms of Service";
    }

    if (
      returnObj.fN &&
      returnObj.lN &&
      returnObj.eM &&
      returnObj.pass &&
      returnObj.cBox &&
      returnObj.phoneNum
    ) {
      resolve(returnObj);
      return;
    } else {
      reject(returnObj);
      return;
    }
  });
  registration
    .then((inData) => {
      res.render("dashboard", {
        fN: inData.fN,
        lN: inData.lN,
        em: inData.eM,
        pass: inData.pass,
        cBox: inData.cBox,
        phone: inData.phoneNum,
      });
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      const msg = {
        to: inData.eM,
        from: "fkarim20@myseneca.ca", // Use the email address or domain you verified above
        subject: "Username and Password",
        text: `Username: ${inData.eM}
               Password: ${inData.pass}`,
        html: `
        <h2>Welcome to Popcorn Flix ${inData.fN} ${inData.lN}! Here are your login credentials</h2> 
        <h3>Username: ${inData.eM}</h3>
        <h3>Password: ${inData.pass}</h3>`,
      };
      //ES6
      sgMail.send(msg).then(
        () => {},
        (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        }
      );
      //ES8
      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        }
      })();
    })
    .catch((inData) => {
      res.render("register", {
        fN: inData.fN,
        fNmErr: inData.fNmErr,
        lN: inData.lN,
        lNmErr: inData.lNmErr,
        em: inData.eM,
        pass: inData.pass,
        eMErr: inData.eMErr,
        passErr: inData.passErr,
        cBox: inData.cBox,
        cBoxErr: inData.cBoxErr,
        phone: inData.phoneNum,
        phoneErr: inData.phoneNumErr,
      });
    });
});
app.use(express.static("./public"));
//for client errords
app.use((req, res, next) => {
  res.status(404).send("Sorry, Page Not Found! Try another route.");
});
const HTTP_PORT = 5000;
app.listen(HTTP_PORT, () => {});
