exports.userFormValidation = (req, res, next) => {
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
      next();
    })
    .catch((inData) => {
      res.render("User/register", {
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
};

exports.loginValidation = (req, res, next) => {
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
      next();
    })
    .catch((inData) => {
      res.render("User/login", {
        em: inData.email,
        pswd: inData.password,
        emErr: inData.emailErr,
        pErr: inData.passErr,
      });
    });
};
