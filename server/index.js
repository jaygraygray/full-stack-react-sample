const app = require('express')(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = process.env.PORT,
      ctrl = require('./backendController')
      CONFIG = require('./config')

// Apply middleware
app.use(expres.static(__dirname + "/public"))
app.use( bodyParser.json() )
app.use( cors() )


// Sent Endpoints
app.get('/view/:section', ctrl.getSection)

app.get('/search/:item/:page', ctrl.search)

app.listen(port, console.log("Connected on port ", port))