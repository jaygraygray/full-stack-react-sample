const 
    dotenv = require('dotenv').config();
    app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 9999,
    NYTctrl = require('./server/NYTController')
    config = require('./server/config.js')
    passport = require('./auth')
    session = require('express-session')
    massive = require('massive')
    articles = require('./server/articlesController')

// ----------------------------------
// Apply middleware
// -----------------------------------
app.use( bodyParser.json() )
app.use( cors({ 
    origin: '*'
    }) 
)

// -----------------------------------
// Setup DB conn
// -----------------------------------
massive(config.DB_URI).then(dbInstance => app.set('db', dbInstance)).catch(console.error)

// -----------------------------------
// Set up sessions 
// -----------------------------------
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: config.sessionSecret
}))

app.use(passport.initialize());
app.use(passport.session());


// -----------------------------------
// auth end points
// -----------------------------------
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', 
{ successRedirect: process.env.REACT_APP_CLIENT_SERVER || 'http://localhost:9998'}));


app.get('/auth/me', function(req, res) {
    if (req.session.passport) {
        res.status(200).send(req.session.passport.user)
    } else {
        res.status(200).send(null)
    }
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect(process.env.REACT_APP_CLIENT_SERVER || 'http://localhost:9998');
})

// -----------------------------------
//  Endpoints
// -----------------------------------
app.get('/view/:section', NYTctrl.getSection)

app.get('/search/:item/:page', NYTctrl.search)


app.get('/getarticles/:uid', articles.getInfo)
app.post('/addArticle', articles.addNew)
app.get('/deletearticle/:uid/:id', articles.delete)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/build`))
    app.get('*', (req, res) => {
        res.sendFile(`$__dirname}/build/index.html`)
    })
}

app.listen(port, console.log("Connected on port ", port))