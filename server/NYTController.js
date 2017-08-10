
var http = require('request')

const config = require('./config')

module.exports = {

 getSection: (request, response) => {
  http({
    url: `https://api.nytimes.com/svc/topstories/v2/${request.params.section}.json`,
    qs: { 'api-key': config.apiKey },
    }, (NYTreq, NYTres) => { 
    
      let data = JSON.parse(NYTres.body)
      
      let results = data.results.map( (data) => {
        // return only necessary data
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
    }) 
  },

  search: (request, response) => {
    console.log(request.params)
    http({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': config.apiKey,
        'q': `"${request.params.item}"`,
        'page': request.params.page
      }
    }, (NYTreq, NYTres) => {
      
      let data = JSON.parse(NYTres.body)
      
      let results = data.response.docs.map( (data) => {
        return {
          url: data.web_url,
          snippet: data.snippet,
          imgData: data.multimedia[1],
          headline: data.headline,
          date: data.pub_date
        }
      })
      response.send(results)
      
    })
  }
}