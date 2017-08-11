const passport = require('passport')
      Auth0Strategy = require('passport-auth0')
      massive = require('massive')
      config = require('./config')

// -----------------------------------
// Setup DB conn
// -----------------------------------

const strategy = new Auth0Strategy({
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    clientSecret: config.auth0.clientSecret,
    callbackURL: config.auth0.callbackUrl
    },
   function(accessToken, refreshToken, extraParams, profile, done) {
       
    const dbInstance = app.get('db');
    console.log(profile)
    var user = dbInstance.users.findOne({ id: profile.id } )
        .then(userInfo => {
            console.log(userInfo)
            if (userInfo !== null) {
                dbInstance.users.insert({id: profile._json.clientID, username: `${profile.displayName}`, profile_img: `${profile.picture}`})
                .then(res => res).catch(console.error, 'Error');
            }
        })

    done(null, profile);
})

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});


module.exports = passport.use(strategy)