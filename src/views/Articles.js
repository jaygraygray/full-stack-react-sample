import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Articles extends Component {
 render() {

  let html = document.getElementsByTagName("HTML")[0]
  html.style.overflow = 'hidden'

  const { container, breadCrumb, content, contentContainer, home } = style
  let finalURL =  this.props.match.params.url.replace(/[|]/g, "/")

  return (
   <div style={container}>

    <div>
      {this.props.match.params && <iframe src={finalURL} style={content} /> }
    </div>

    <Link to="/home"><div style={home}>Home</div></Link>
   </div>
  );
 }
}
const style = {
 container : {
  marginTop: '-219px',
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
  position: 'absolute',
  top: '0',
  left:'0',
  width: '99vw',
  height: '100vh'
 },
 home: {
   background: '#242f36',
   color: '#fff',
   position: 'fixed',
   bottom: '76px',
   right: '93px',
   borderRadius: '18px',
   padding: '32px 45px 32px 45px',
   zIndex: '2',
   fontFamily: 'Arial',
   fontWeight: 'bold',
   fontSize: '2rem'
 }
}
export default Articles;