import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
 render() {
  const { container, img, content, bodyText, authorText, dateText, p } = style
  const { image, title, body, author, date, url } = this.props

  return (
   <div style={container}>
    <div style={img}> <img src={image && image.url} /> </div>
    <div style={content}>
     <h2>{title}</h2>
     <p style={p}> <span style={bodyText}> {body} </span></p>
     <p style={p}> <span style={authorText}> {author} </span>  | <span style={dateText}> {date}</span></p>
    </div>
   </div>
  );
 }
}

Article.propTypes = {

};

const style = {
 container : {
  width: '712px',
  minHeight: '142px',
  margin: '24px',
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