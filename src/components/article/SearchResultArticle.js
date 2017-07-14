import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class SearchResultArticle extends Component {
 render() {
  const { container, articleTitle, articleBody, img } = style
  const { image, title, body, date, url } = this.props
  let formatURL = url.replace(/\//g, '|')
  console.log(url)
  return (
   
   <div style={container}>
      
      <img src={image} style={img} />

    <Link to={`/article/${formatURL}`}><h1 style={articleTitle}>{title}</h1></Link>
    <p style={articleBody}> {body} </p>
   </div>
  );
 }
}

const style = {
 container: {
  margin: 'auto',
  width: '70%',
  height: '160px',
  borderStyle: 'solid',
  borderWidth: '1px 0 0 0',
  borderColor: '#cccccc',
  padding: '23px',

 },
 articleTitle: {
  color: '#009bde',
  fontSize: '1.3rem',
  marginTop: '6px',
 },
 articleBody: {
  fontSize: '.9rem',
  color: '#242f36',
  marginTop: '24px',
 },
 img: {
  float: 'left',
  width: '190px',
  height: '126px',
  
 }
}
export default SearchResultArticle;