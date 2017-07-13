import React, { Component } from 'react';

class SearchResultArticle extends Component {
 render() {
  const { container, articleTitle, articleBody, img } = style
  const { image, title, body, date, url } = this.props
  console.log(image)
  return (
   
   <div style={container}>

 
      <img src={image} style={img} />

    <h1 style={articleTitle}>{title}</h1>
    <p style={articleBody}> {body} </p>
   </div>
  );
 }
}

const style = {
 container: {
  width: '70%',
  borderStyle: 'solid',
  borderWidth: '1px 0 0 0',
  borderColor: '#cccccc',
  padding: '23px',

 },
 articleTitle: {
  color: '#009bde',
  fontSize: '1.7rem',
 },
 articleBody: {
  fontSize: '1rem',
  color: '#242f36',
 },
 img: {
  float: 'left',
  width: '190px',
  height: '126px'
 }
}
export default SearchResultArticle;