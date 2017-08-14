import React, { Component } from 'react';
import moment from 'moment'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ArticleTracker from '../ArticleTracker/ArticleTracker'
import _ from 'underscore'

class Headline extends Component {

  constructor() {
    super()
    this.state = {
      userID: null
    }
  }

  componentDidMount() {
    axios.get('/auth/me').then( (r) => {
      console.log(r)
      this.setState({
        userID: r.data._json
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.story !== nextProps.story) {
      this.setState(nextProps.story)
    }
  }

  render() {

    const { container, info, h1, p, content, ul, li, article } = style
    const { title, byline, date, abstract, imgData, url } = this.state
    var articleInfo = _.pick(this.state, 'title', 'date', 'url')

    return (
      

      <div className={ css(container) }>
      
        <div className={ css(info) }>
          
          <div className={ css (article) }>
            <ArticleTracker info={articleInfo}/>
          </div>
          
          <ul className={ css(ul) }>
            
            <li>
              <a href={url}><h1 className={ css(h1) }> {title} </h1></a>
              <p className={ css(p) }> {byline} </p>
              <p className={ css(p) }> {moment(date).format('h:mm a')} </p>
            </li>
            
            <li>
                <img src={ imgData && imgData[0].url } alt="Headline"/>  
            </li>
          
          </ul>
        
        </div>

        <div className={ css(content) }>
          {abstract}
        </div>

      

      </div>
    );
  };
}
const style = StyleSheet.create({
  container : {
    height: '350px',
    margin: 'auto',
    border: '1px solid #c1c7d4',
    boxShadow: '2px 2px 16px #adadad',
    transition: 'all .2s',
      ":hover": {
        boxShadow: '2px 2px 6px #adadad',
        transition: 'all .2s',
      }
  },
  info : {
    position: 'relative',
    height: '200px',
    background: '#c1c7d4',
    padding: '18px',
    transition: 'all .2s',
    ":hover": {
      background: '#d3dcef',
      transition: 'all .2s'
    }
  },
  h1 : {
    color: '#242f36',
    fontSize: '1.5rem',
    margin: '0',
  },
  p: {
    marginTop: '24px',
    color: "#fff",
    fontSize: ".8rem",
    textShadow: '-1px 1px 1px #616161'
  },
  content: {
    padding: '24px',
    fontSize: '1.1rem',
    lineHeight: '22px',
    height: '150px',
  },
  ul : {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0'
  },

  article: {
    position: 'absolute',
    top: '-24px',
    left: '-19px',
    opacity: '1',
  }
})
export default Headline;