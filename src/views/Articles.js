import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Articles extends Component {
 render() {
  const { container, breadCrumb, content, contentContainer } = style
  console.log(this.props.match.params.url)
  let finalURL =  this.props.match.params.url.replace(/[|]/g, "/")
  console.log(finalURL)
  return (
   <div style={container}>
    <div style={breadCrumb}>
     <Link to="/">Home</Link> > Article 
    </div>
    <div>
      {this.props.match.params && <iframe src={finalURL} style={content} /> }
    </div>
   </div>
  );
 }
}
const style = {
 container : {
  marginTop: '68px',
 },
 breadCrumb: {
  fontFamily: 'Arial',
  margin: '109px 0 30px 176px',
  fontSize: '1rem',
 },
 contentContainer: {
  overflow: 'hidden',
  position: 'relative'
 },
 content: {
  width: '90%',
  height: '100vh'
 }
}
export default Articles;