// Require statements.
const crypto = require('crypto');
const mongoose = require('mongoose');

// Update promises.
mongoose.Promise = global.Promise;

// Constants.
const iterations = 10000;
const saltLength = 64;
const keyLength = 64;

// Models.
let UserModel = {};

// Schema.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^[A-Za-z0-9_\-.]{1,16}$/,
  },
  salt: {
    type: Buffer,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  deletedDate: {
    type: Date,
    default: null,
  },
});

// Functions

/**
 * Attempts to validate password, passing true or false into the callback function.
 * @param {Object} doc Document returned by MongoDB.
 * @param {String} password Password string to validate.
 * @param {function} next Callback function to call next.
 */
const validatePassword = (doc, password, next) => {
  const pwd = doc.password;
  const handler = (err, hash) => {
    if (hash.toString('hex') !== pwd) {
      return next(false);
    }
    return next(true);
  };

  return crypto.pbkdf2(password, doc.salt, iterations, keyLength, 'RSA-SHA512', handler);
};


// Static Methods.

/**
 * Parse an instance of User model document data into a JS object.
 * @param {Object} doc Document returned by MongoDB.
 */
UserSchema.statics.toAPI = (doc) => ({
  _id: doc._id,
  username: doc.username,
});

/**
 * Query the database for a User with the matching username.
 * @param {String} name User's username to query for.
 * @param {function} next Next function to call.
 */
UserSchema.statics.findByUsername = (name, next) => {
  const query = {
    username: name,
  };
  return UserModel.findOne(query, next);
};

/**
 * Authenticate a user.
 * @param {String} username Username to authenticate with.
 * @param {String} password Password to authenticate with.
 * @param {function} next Next callback to execute.
 */
UserSchema.statics.authenticateUser = (username, password, next) => {
  // TODO
  next();
};

// Exports.
