const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const keys = require('./config/keys');

const app = express();

// Config mongoose
mongoose.set('useFindAndModify', false);

// Add access header
app.use(cors());

// Middle way auth
app.use((req, res, next) => {
    if (req.headers && req.headers.token && req.headers.token.split(" ")[0] === 'auth' && req.headers.token.split(" ")[1] !== 'null') {
        jwt.verify(req.headers.token.split(" ")[1], keys.keyToken, function(err, decode) {
            if (err) return res.json(err);
            return next();
        });
    // Ignore the login API
    } else if (req.url === '/api/login') {
        next();
    } else {
        return res.status(401).json({mes: 'Invalid token'});
    }
});

// Format json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connect DB
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser: true}).then(() => console.log('Connect success!')).catch(() => console.error('Error connect!'));

// Api
require('./routes/user')(app);
require('./routes/skill')(app);
require('./routes/login')(app);
require('./routes/project')(app);
require('./routes/logout')(app);

// Open port
const port = process.env.PORT || 6300;

// Start server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
