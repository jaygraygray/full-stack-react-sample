import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'

import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import SearchResultArticle from '../components/article/SearchResultArticle'

class SearchResults extends Component {
 constructor(props) {
  super(props)
  this.state = {
    searchResults: [],
    currentPage: this.props.match.params.page
  }
  this.NextPage = this.NextPage.bind(this)
  this.PrevPage = this.PrevPage.bind(this)

 }

 componentDidMount() {
  this.updateResults(this.props.match.params.page)
 }


 updateResults(page) {
  let { query } = this.props.match.params
  //let page = parseInt(this.state.currentPage)
  console.log('TO API: ', page)
  axios.get(`http://localhost:9998/search/${query}/${page}`)
        .then( r => {
        this.setState({
         searchResults: r.data,
        })
      })
 }

 NextPage() {
   let page = parseInt(this.props.match.params.page)
   page++
   this.props.history.push(`/search/${this.props.match.params.query}/${page}`) 
    this.updateResults(page)
 }

 PrevPage() {
    let page = parseInt(this.props.match.params.page)
   page--
   this.props.history.push(`/search/${this.props.match.params.query}/${this.props.match.params.page}`)
   this.updateResults(page)
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


   const { container, breadCrumb, nextPage, prevPage, ul, li } = style
  return (
   <div style={container}>

   <div style={breadCrumb}>
    <Link to="/">Home</Link> > Search 
   </div>
   <ul style={ul}>
    <li style={li}><div onClick={this.PrevPage}> &lt; Previous Page </div></li>
    <li style={li}><div onClick={this.NextPage}>Next Page &gt; </div></li>
   </ul>
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
 },
 page: {
   fontFamily: 'Arial',
   fontWeight: 'bold',
 },
 ul: {
   width: '100%',
   padding: '0',
   margin: 'auto',
   marginBottom: '24px',
   display: 'flex',
   listStyle: 'none',
 },
  li: {
    width: '50%',
    textAlign: 'center',
  }
}
export default withRouter(SearchResults);