const app = require('express')(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = 9999,
      ctrl = require('./backendController')
      CONFIG = require('./config')

// Apply middleware
app.use( bodyParser.json() )
app.use( cors({ origin: 'http://localhost:3000' }) )


// Sent Endpoints
app.get('/view/:section', ctrl.getSection)


// app.get('/article/:title')

app.listen(port, console.log("Connected on port ", port))