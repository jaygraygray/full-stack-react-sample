import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
 render() {
  const { container, image, content } = style
  return (
   <div style={container}>
    <div style={image}> asdf </div>
    <div style={content}>
     <h2>Article Title</h2>
     <p>Body text lineszz</p>
     <p>By AuthorName  |  8:54am</p>
    </div>
   </div>
  );
 }
}

Article.propTypes = {

};

const style = {
 container : {
  width: '90%',
  margin: '24px',
  padding: '18px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'light-gray'
 },
 image : {
  float: 'left',
  margin: '0',
  padding: '0',
  height: '140px',
  width: '210px',
 },
 content: {},
}

export default Article;