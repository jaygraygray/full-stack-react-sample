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

    this.removeArticle = this.removeArticle.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(`/getarticles/${this.props.match.params.uid}`)
          .then( resp => {
            this.setState({
              articles: resp.data
            })
          })
  }

  removeArticle(id) {
   axios.get(`/deletearticle/${this.props.uid}/${id}`)
        .then( resp => console.log(resp))
    this.setState({
      articles: this.state.articles.filter( articles => {
        return articles.id !== id
      })
    })


  }

  render() {

    const { ul, li, container, h1 } = style

    var articles = null;

     (!this.state.articles) ?
      articles = 'Loading...' :
      articles = this.state.articles.map( (article) => {
        return (
          <ul className={ css(ul) }>
           <li className={ css(li) } style={ {width: '60%'} }> <a href={ article.url }> { article.title}  </a></li>
            <li className={ css(li) } style={ {width: '20%', textAlign: 'center'} }>{ moment(article.date_added).format('MMM Do YYYY') }</li> 
            <li className={ css(li) } style={ {width: '20%', textAlign: 'center'} } onClick={ () => { this.removeArticle(article.id) }}>remove</li>
          </ul>
        )
      })

    return (
      <div className={ css(container) }>

      <h1 className={ css(h1) }>Bookmarks</h1>

          { articles }

      </div>
    );
  }
}
const style = StyleSheet.create({
  h1 : {
    textAlign: 'center',
    marginBottom: '48px',
    marginTop: '24px',
  },
  container: {
    paddingTop: '74px',
    width: '60%',
    margin: 'auto'
  },
  ul: {
    marginTop: '-14px',
    padding: '0',
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    transition: 'all .2s',
      ":hover": {
        background: '#e5e5e5',
        transition: 'all .2s',
      }
    },
  li: {
    borderStyle: 'solid',
    borderColor: '#cccccc',
    borderWidth: '0 0 1px 0',
    padding: '33px 12px 33px 12px',
  }
})
export default connect( state => {
  return { uid: state.user }
})(Bookmarks);