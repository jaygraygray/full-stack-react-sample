import React, { Component } from 'react';
import moment from 'moment'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'

class Headline extends Component {

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

    const { container, info, h1, p, content, ul, li } = style
    const { title, byline, date, abstract, imgData, url } = this.state
  
    // formatting URL so it can be passed as as a param
    let formatURL = null
    url ?
    formatURL = url.replace(/\//g, '|') :
    formatURL = null
    
    return (

      <div className={ css(container) }>

        <div className={ css(info) }>

          <ul className={ css(ul) }>
            
            <li>
              <Link to={ `article/${formatURL}` }><h1 className={ css(h1) }> {title} </h1></Link>
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
      transition: 'all .2s'
    },
  },
  info : {
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
  }
})
export default Headline;