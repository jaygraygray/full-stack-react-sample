import React, { Component } from 'react';
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import moment from 'moment'
import  _ from 'underscore'

class Bookmarks extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      date_published: '▲',
      date_added: '▲',
      titleFilter: 'abc'
    }

    this.removeArticle = this.removeArticle.bind(this)
    this.filterByDate = this.filterByDate.bind(this)
    this.filterByTitle = this.filterByTitle.bind(this)
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

  filterByDate(dateType) {
    if (this.state[dateType] === '▼') {
      this.setState({
        articles: this.state.articles.slice().sort((a,b) => { return a.id - b.id }),
        [dateType]: '▲'
      })
    } else if (this.state[dateType] === '▲') {
      this.setState({
        articles: this.state.articles.slice().sort((a,b) => { return b.id - a.id }),
        [dateType]: '▼'
      })
    }
  }

  filterByTitle() {
    if (this.state.titleFilter === 'abc') {
      this.setState({
        articles: this.state.articles.slice().sort((a,b) => { return b.title.localeCompare(a.title) }),
        titleFilter: 'zxy'
      })
    } else if (this.state.titleFilter === 'zxy') {
      this.setState({
        articles: this.state.articles.slice().sort((a,b) => { return a.title.localeCompare(b.title) }),
        titleFilter: 'abc'
      })  
    }

  }


  //BookmarksList
  //BookmarksFilter

  //RatingsList
  //RatingsFilter

  render() {
    
    const { ul, li, container, h1, remove, title } = style

    var articles = null;

     (!this.state.articles) ?
      articles = 'Loading...' :
      articles = this.state.articles.map( (article) => {
        return (
          <ul className={ css(ul) }>
            <li className={ css(li, title) } style={ {width: '56%'} }> <a href={ article.url }> { article.title}  </a></li>
            <li className={ css(li) } style={ {width: '18%', textAlign: 'center'} }>{ moment(article.date_published).format('MMM Do h:mm a') }</li> 
            <li className={ css(li) } style={ {width: '16%', textAlign: 'center'} }>{ moment(article.date_added).format('MMM Do h:mm a') }</li> 
            <li className={ css(li, remove) } style={ {width: '10%', textAlign: 'center'} } onClick={ () => { this.removeArticle(article.id) }}>x</li>
          </ul>
        )
      })

    return (
      <div className={ css(container) }>

      { this.props.match.params.pageType === 'bookmarks'}

      <h1 className={ css(h1) }>Bookmarks</h1>
          <ul className={ css(ul) }>
            <li className={ css(li) } style={ {width: '56%'} } onClick={ this.filterByTitle }><b>Title</b>&nbsp;&nbsp; [ Sort: { this.state.titleFilter } ]</li>
            <li className={ css(li) } style={ {width: '18%', textAlign: 'center'} } onClick={ () => { this.filterByDate('date_published') }}><b>Date Published</b>&nbsp;&nbsp; { this.state.date_published }</li> 
            <li className={ css(li) } style={ {width: '16%', textAlign: 'center'} } onClick={ () => { this.filterByDate('date_added') }}><b>Date Added</b> &nbsp;&nbsp; { this.state.date_added }</li> 
            <li className={ css(li) } style={ {width: '10%', textAlign: 'center'} } ><b>Remove</b></li>
          </ul>
          { articles }

      </div>
    );
  }
}
const style = StyleSheet.create({
  remove: {
    fontSize: '2rem',
    fontWeight: 'bold',
    paddingBottom: '12px',
    transition: 'all .2s',
      ":hover": {
        transition: 'all .2s',
        cursor: 'pointer',
        background: 'pink'
      }
  },
  title: {
    transition: 'all .2s',
      ":hover": {
        paddingLeft: '32px'
      }
  },
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
    wordWrap: 'none',
  }
})
export default connect( state => {
  return { uid: state.user }
})(Bookmarks);