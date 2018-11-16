// Middleware functions that can be passed
// into the router controller function chain.

// Check if the request is sent from a logged-in account.
const requiresLogin = (req, res, next) => {
    if(!req.session.account) {
        // If not logged in, redirect back to the homepage.
        return res.redirect('/');
    }

    // Call the next method in the chain
    // and return back up the stack.
    return next();
};

// Check if the user has to log out in order to get to the feature. (eg. sign-up).
const requiresLogout = (req, res, next) => {
    if(req.session.account) {
        // Redirect to user dashboard.
        return res.redirect('/dashboard');
    }

    // Call the next method in the chain
    // and return back up the stack.
    return next();
};

// Check if the functionality requires https security. (All should).
const requiresSecure = (req, res, next) => {
    if(req.headers['x-forwarded-proto'] !== 'https'){
        // Redirect to same page but with HTTPS security enabled.
        return res.redirect(`https://${req.hostname}${req.url}`);
    }

    // Call the next method in the chain
    // and return back up the stack.
    return next();
};

// Export middleware functions.
module.exports = {
    requiresLogin,
    requiresLogout,
    requiresSecure
};

