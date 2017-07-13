import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'

import SearchResultArticle from '../components/article/SearchResultArticle'

class SearchResults extends Component {
 constructor() {
  super()
  this.state = {
   searchResults : []
  }
 }

 componentDidMount() {
  axios.get(`http://localhost:9998/search/${this.props.match.params.query}`)
        .then( r => {
        this.setState({
         searchResults: r.data
        })
      })
  
 }
 
 render() {
  console.log(this.state.searchResults)
  const results = this.state.searchResults.map( (data, i) => {
   let date = moment(data.date).format('h:mm a')
   return (
    
    <SearchResultArticle
     key={i}
     image={data.imgData}
     title={data.headline.main}
     body={data.snippet}
     date={moment(data.date).format('h:mm a')}
     url={data.url}
     />
   )})


  console.log(this.props)
  return (
   <div>
    {this.state.searchResults && results }
   </div>
  );
 }
}

export default SearchResults;