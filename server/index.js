const 
    dotenv = require('dotenv').config();
    app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 9998,
    ctrl = require('./backendController')
    config = require('./config.js')
    passport = require('passport')
    Auth0Strategy = require('passport-auth0')
    session = require('express-session')
    massive = require('massive')

      
// Apply middleware
app.use( bodyParser.json() )
app.use( cors({ 
    origin: 'http://localhost:3000',
    credentials: true
    }) 
)

massive(config.DB_URI).then(dbInstance => app.set('db', dbInstance)).catch(console.error)

app.use(session({
      resave: true,
      saveUninitialized: true,
      secret: 'chicken'
}))
app.use(passport.initialize());
app.use(passport.session())

passport.use(new Auth0Strategy({
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    clientSecret: config.auth0.clientSecret,
    callbackURL: config.auth0.callbackUrl
    },
   function(accessToken, refreshToken, extraParams, profile, done) {
       console.log(profile)
        const dbInstance = app.get('db');
        var user = dbInstance.users.findOne({id: profile._json.clientID}, {columns: ['username', 'profileimage']})
            .then(userInfo => userInfo)
        console.log('here', user);
        if (user) {
            console.log('user found', user);
        } else {
            console.log('here');
            dbInstance.users.insert({id: profile._json.clientID, username: `${profile._json.given_name} ${profile._json.family_name}`, profileimage: profile._json.picture}).then(res => res).catch(console.error, 'Error');
        }
        done(null, user);
}))

// Sent Endpoints
app.get('/view/:section', ctrl.getSection)

app.get('/search/:item/:page', ctrl.search)


app.get('/auth', passport.authenticate('auth0')); // authenticate the user
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_CLIENT_SERVER || 'http://localhost:3000/home',
    failureRedirect: process.env.REACT_APP_CLIENT_SERVER || 'http://localhost:3000/home'})
); 
app.get('/auth/me', (req, res) => { // check if someone is logged in 
    if (!req.user) return res.status(200).send('no user');
    res.status(200).send(req.user);
})
app.get('/auth/logout', (req, res) => { // log the user out and destroy the session
    console.log('in server');
    req.logout();
    res.redirect(process.env.REAT_APP_CLIENT_SERVER || '/');
});

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/../build`))
    app.get('*', (req, res) => {
        res.sendFile(`$__dirname}/../build/index.html`)
    })
}

app.listen(port, console.log("Connected on port ", port))