
var makeHTTPRequest = require('request')

module.exports = {

 getSection: (request, response) => {
  makeHTTPRequest({
    url: `https://api.nytimes.com/svc/topstories/v2/${request.params.section}.json`,
    qs: { 'api-key': CONFIG.apiKey },
    }, (req, res) => { 
      let data = JSON.parse(res.body)
      response.send( data.results ) 
    }) // serve results to our view
 
  }
}