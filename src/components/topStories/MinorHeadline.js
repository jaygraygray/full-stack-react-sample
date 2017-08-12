import React, { Component } from 'react';
import moment from 'moment'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import ArticleTracker from '../ArticleTracker/ArticleTracker'
import _ from 'underscore'
class MinorHeadline extends Component {
  constructor() {
  super()
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.story !== nextProps.story) {
      this.setState(nextProps.story)
    }
  }

  render() {
  
    const { container, h1, author, date, ul, li, article } = style
    const { title, byline, datePublished, url} = this.state
    var articleInfo = _.pick(this.state, 'title', 'date', 'url')
      return (
        
        <div className={ css(container) }>

          <div className={ css(article) }>
            <ArticleTracker info={articleInfo}/>
          </div>

          <a href={url}>
            <h1 className={ css(h1) }> {title} </h1>
          </a>

          <ul className={ css(ul) }>
            <li className={ css(li) }><p className={ css(author) }> {byline} </p></li>
            <li className={ css(li) }><p className={ css(date) }>&nbsp; @ &nbsp; {moment(datePublished).format('h:mm a')} </p></li>
          </ul>

        </div>
    );
  }
}
const style = StyleSheet.create({
  container : {
    position: 'relative',
    height: '165px',
    padding: '20px',
    marginTop: '18px',
    marginLeft: '24px',
    border: '1px solid #eaf1ff',
    transition: 'all .2s',
    ":hover": {
      background: '#d3dcef',
      transition: 'all .2s',
      border: '1px solid #7d8696'
    }
  },
  h1 : {
    color: '#242f36',
    fontSize: '1.3rem',
    margin: '0'
  },
  author: {
    fontSize: '.9rem',
    color: '#A9A9A9',
  },
  date: {
    fontSize: '.9rem',
    color: '#0000A0',
  },
  ul: {
    listStyle: 'none',
    marginTop: '26px',
    display: 'flex',
  },
  li : {
    marginTop: '6px',
    textAlign: 'right'
  },
  article: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '6px',
    width: '100%',
    height: '100%',
    opacity: '0',
      ":hover": {
        opacity: '1'
      }
  }
})
export default MinorHeadline;