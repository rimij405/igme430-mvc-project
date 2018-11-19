// Using statements.
const middleware = require('./middleware');

// Set up additional routes.
const router = (app) => {
  app.get('/', middleware.requiresSecure, middleware.requiresLogout);
};

// Export the router function.
module.exports = router;
