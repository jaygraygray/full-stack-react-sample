import React, { Component } from 'react';
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import moment from 'moment'
// import ArticleTracker from './components/ArticleTracker'
//import Delete from './components/Delete'


class Bookmarks extends Component {

  // sort by
  //// ABC by title
  //// Date added
  // 
  // remove bookmark
  // visit url
  constructor() {
    super()
    this.state = {
      articles: null
    }
  }
  componentDidMount() {
    axios.get(`/getarticles/${this.props.match.params.uid}`)
          .then( resp => {
            console.log(resp.data)
            this.setState({
              articles: resp.data
            })
          })
  }

  render() {
    var articles = null;

     (!this.state.articles) ?
      articles = 'Loading...' :
      articles = this.state.articles.map( (article) => {
        return (
           <div>
            <a href={ article.url }> { article.title} </a> <br />
            {article.date_added}
          </div> 

          
        )
      })

    console.log("Bookmarks hit!", articles)
    return (
      <div>
        { articles }
      </div>
    );
  }
}

export default Bookmarks;