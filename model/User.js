const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "User",
  },
});

userSchema.pre("save", function (next) {
  //you must use an ES5 function and not an arrow function with pre method
  //salt -> set of randomly generated characters or strings
  /*the higher the value, the more expensive it is on your CPU for
  gensalt and the more complex is the algorithm*/
  //-> Returns a promise
  //bcrypt uses double hashing
  //generates a salt (which is random text)
  //random text is concatenated with password, which will be hash
  bcrypt
    .genSalt(10)
    .then((salt) => {
      bcrypt
        .hash(this.password, salt)
        .then((encryptPassword) => {
          //this refers to password property in User Object
          this.password = encryptPassword;
          //the hashed and encrypted password becomes the password in the user object
          //will hang up on line if your don't place a next()

          //-> New Password: $2a$10$s7VAGMxGJ1SqiRx12NRKFeo8X980TvvuJKH/xrN2XX8/Oo5mznuUS
          next();
        })
        .catch((err) => console.log(`Error occurred when hashing ${err}`));
    })
    .catch((err) => console.log(`Error occurred when salting ${err}`));
});

const UserModel = mongoose.model("User", userSchema);
//It takes the name 'User' from the model and creates it as a collection
//in mongoDB
module.exports = UserModel;
