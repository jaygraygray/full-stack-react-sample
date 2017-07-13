import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import SearchResultArticle from '../components/article/SearchResultArticle'

class SearchResults extends Component {
 constructor() {
  super()
  this.state = {
   searchResults : [],
   currentPage: null,
   currentQuery: null
  },
  this.NextPage = this.NextPage.bind(this)
  this.PrevPage = this.PrevPage.bind(this)
 }

 componentDidMount() {
  const { query, page } = this.props.match.params
  axios.get(`http://localhost:9998/search/${query}/${page}`)
        .then( r => {
        this.setState({
         searchResults: r.data,
         currentPage: page,
         currentQuery: query
        })
      })
 }

componentWillReceiveProps(nextProps) {
 if (this.props.location.pathname !== nextProps.location.pathname) {
   const { query, page } = this.props.match.params
  axios.get(`http://localhost:9998/search/${query}/${page}`)
        .then( r => {
        this.setState({
         searchResults: r.data,
         currentPage: page,
         currentQuery: query
        })
      }) 
 }
}
 
 NextPage() {
  return this.props.history.push(`/search/${this.state.currentQuery}/${this.state.currentPage++}`)
 }

 PrevPage() {
  return this.props.history.push(`/search/${this.state.currentQuery}/${this.state.currentPage--}`)
 }

 render() {
  console.log(this.props)
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

   <div style={style.breadCrumb}>
    <Link to="/">Home</Link> > Search 
   </div>
   <div>
    <div onClick={this.NextPage}>Next Page</div>
    <div onClick={this.PrevPage}>Previous Page</div>
   </div>
    {this.state.searchResults && results }

   </div>
  );
 }
}
const style = {
 container : {
  marginTop: '68px',
 },
 breadCrumb: {
  fontFamily: 'Arial',
  margin: '109px 0 30px 176px',
  fontSize: '1rem',
 }
}
export default withRouter(SearchResults);