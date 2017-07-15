import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

class SearchResultArticle extends Component {
 render() {
  const { container, articleTitle, articleBody, img } = style
  const { image, title, body, date, url } = this.props
  let formatURL = url.replace(/\//g, '|')
  console.log(url)
  return (
   
   <div className={css(container)}>
      
      <img src={image} className={css(img)} />

    <Link to={`/article/${formatURL}`}><h1 className={css(articleTitle)}>{title}</h1></Link>
    <p className={css(articleBody)}> {body} </p>
   </div>
  );
 }
}

const style = StyleSheet.create({
 container : {
  width: '60%',
  minHeight: '142px',
  margin: 'auto',
  borderStyle: 'solid',
  borderWidth: '1px 0 0 0',
  borderColor: '#cccccc',
  display: 'flex',
  flexDirection: 'left',
  justifyContent: 'space-around',
  padding: '25px 50px 25px 50px',
  transition: 'all .1s',
  ":hover": {
      boxShadow: '0px 2px 20px #cacaca inset',
      transition: 'all .1s',
  }
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
})
export default SearchResultArticle;