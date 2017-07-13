
var makeHTTPRequest = require('request')

module.exports = {

 getSection: (request, response) => {
  makeHTTPRequest({
    url: `https://api.nytimes.com/svc/topstories/v2/${request.params.section}.json`,
    qs: { 'api-key': CONFIG.apiKey },
    }, (req, res) => { 
      let data = JSON.parse(res.body)
      console.log(data)
      let results = data.results.map( (data) => {
        return {
          abstract: data.abstract,
          byline: data.byline,
          date: data.created_date,
          imgData: [data.multimedia[1], data.multimedia[3]],
          title: data.title,
          url: data.url
        }
      })
      response.send( results ) 
    }) // serve results to our view
 
  }
}