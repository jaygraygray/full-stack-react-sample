const 
    dotenv = require('dotenv').config();
    app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 9999,
    ctrl = require('./backendController')
    config = require('./config.js')
    passport = require('passport')
    Auth0Strategy = require('passport-auth0')
    session = require('express-session')
    massive = require('massive')

      
// Apply middleware
app.use( bodyParser.json() )
app.use( cors({ 
    origin: '*'
    }) 
)

massive(config.DB_URI).then(dbInstance => app.set('db', dbInstance)).catch(console.error)


app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: config.sessionSecret
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    clientSecret: config.auth0.clientSecret,
    callbackURL: config.auth0.callbackUrl
    },
   function(accessToken, refreshToken, extraParams, profile, done) {
       
        //const dbInstance = app.get('db');
        // var user = dbInstance.users.findOne({id: profile._json.clientID}, {columns: ['username']})
        //     .then(userInfo => {
        //         if (user) {
        //             console.log('user found', user);
        //         } else {
        //             console.log('here');
        //             dbInstance.users.insert({id: profile._json.clientID, username: `${profile._json.given_name} ${profile._json.family_name}`, profileimage: profile._json.picture}).then(res => res).catch(console.error, 'Error');
        //         }
                
        //     })
    done(null, profile);
}))
passport.serializeUser(function(user, done) {
  console.log('serializing', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserialize', user)
  done(null, user);
});


// Sent Endpoints
app.get('/view/:section', ctrl.getSection)

app.get('/search/:item/:page', ctrl.search)

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', 
{ successRedirect: 'http://localhost:10000'}));


app.get('/auth/me', function(req, res) {
  if (!req.session) return res.status(200).send('No one logged in!');
  res.status(200).send(req.session.passport.user);

    // if (!req.user) return res.status(200).send('No one logged in!');
    // res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

// app.get('/auth', passport.authenticate('auth0')); // authenticate the user

// app.get('/auth/me', (req, res) => { // check if someone is logged in 
//     console.log(req.user)
//     if (!req.user) return res.status(200).send('no user');
//     res.status(200).send(req.user);
// })
// app.get('/auth/logout', (req, res) => { // log the user out and destroy the session
//     console.log('in server');
//     req.logout();
//     res.redirect(process.env.REAT_APP_CLIENT_SERVER || '/');
// });





if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/../build`))
    app.get('*', (req, res) => {
        res.sendFile(`$__dirname}/../build/index.html`)
    })
}

app.listen(port, console.log("Connected on port ", port))