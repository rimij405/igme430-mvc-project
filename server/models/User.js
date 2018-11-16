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
