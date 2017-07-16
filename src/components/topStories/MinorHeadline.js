import React, { Component } from 'react';
import moment from 'moment'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'


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
  
    const { container, h1, author, date, ul, li } = style
    const { title, byline, datePublished, url} = this.state
  
    let formatURL = null
    url ?
    formatURL = url.replace(/\//g, '|') :
    formatURL = null

      return (
        
        <div className={ css(container) }>

        <Link to={ `article/${formatURL}` }><h1 className={ css(h1) }> {title} </h1></Link>

          <ul className={ css(ul) }>
            <li className={ css(li) }><p className={ css(author) }> {byline} </p></li>
            <li className={ css(li) }><p className={ css(date) }> {moment(datePublished).format('h:mm a')} </p></li>
          </ul>

        </div>
    );
  }
}
const style = StyleSheet.create({
  container : {
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
  },
  li : {
    marginTop: '6px',
    textAlign: 'right'
  }
})
export default MinorHeadline;