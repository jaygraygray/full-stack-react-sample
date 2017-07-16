const app = require('express')(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = 9998,
      ctrl = require('./backendController')
      CONFIG = require('./config')

// Apply middleware
app.use( bodyParser.json() )
app.use( cors({ origin: 'http://localhost:3001' }) )


// Sent Endpoints
app.get('/view/:section', ctrl.getSection)

app.get('/search/:item/:page', ctrl.search)

app.listen(port, console.log("Connected on port ", port))