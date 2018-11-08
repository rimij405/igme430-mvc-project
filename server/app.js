// Using statements.
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

// Set port.
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Set up the express application.
const app = express();

// Set up server routes.
app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));
app.disable('x-powered-by');

// Set up the application routes.
app.get('/', (req, res) => { res.render('login'); }
);

// Set up the view engine.
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

// Start the application.
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}:`);
});
