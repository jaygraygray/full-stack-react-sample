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
  let { query, page } = this.props.match.params
  axios.get(`http://localhost:9998/search/${query}/${page}`)
        .then( r => {
        this.setState({
         searchResults: r.data
        })
      })
  
 }
 
 render() {
  const results = this.state.searchResults.map( (data, i) => {
   let date = moment(data.date).format('h:mm a')
   let image = null
   data.imgData ?
    image = `https://static01.nyt.com/${data.imgData.url}` :
    image = 'https://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204'
   return (
    
    <SearchResultArticle
     key={i}
     image={image}
     title={data.headline.main}
     body={data.snippet}
     date={moment(data.date).format('h:mm a')}
     url={data.url}
     />
   )})


  console.log(this.props)
  return (
   <div style={style.container}>
    {this.state.searchResults && results }
   </div>
  );
 }
}
const style = {
 container : {
  marginTop: '68px',
 }
}
export default SearchResults;