import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

class Article extends Component {
 render() {
  let { container, img, content, bodyText, authorText, dateText, p } = style
  let { image, title, body, author, date, url } = this.props
  let formatURL = url.replace(/\//g, '|')
  return (
   <div style={container}>
    <div style={img}> <img src={image && image.url} /> </div>
    <div style={content}>
    <Link to={`article/${formatURL}`}><h2>{title}</h2></Link>
     <p style={p}> <span style={bodyText}> {body} </span></p>
     <p style={p}> <span style={authorText}> {author} </span>  | <span style={dateText}> {date}</span></p>
    </div>
   </div>
  );
 }
}

const style = {
 container : {
  width: '70%',
  minHeight: '142px',
  margin: 'auto',
  marginTop: '36px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#cccccc',
  display: 'flex',
  flexDirection: 'left',
  justifyContent: 'space-around'
 },
 img : {

  //float: 'left',
  margin: 'auto',
  padding: '0',
  height: '140px',
  width: '210px',
 },
 content: {
  padding: '0 20px 0 20px',
  marginTop: '12px'
 },
 p : {
  fontSize: '.8rem',
  margin: '18px 0 18px 0',
 },
 bodyText: { color: '#1a1a1a' },
 authorText: { color: '#A9A9A9' },
 dateText: { color: '#0000A0'},
}

export default Article;