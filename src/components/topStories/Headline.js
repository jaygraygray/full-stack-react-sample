import React, { Component } from 'react';

import moment from 'moment'

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
 return (
  
  <div style={container}>
 
   <div style={info}>
    <ul style={ul}>
     <li>
       <h1 style={h1}>{title}</h1>
       <p style={p}>{byline}</p>
       <p style={p}>{moment(date).format('h:mm a')}</p>
      </li>
     <li>
      <img src={imgData && imgData[0].url}/>
     </li>
    </ul>

   </div>
   <div style={content}>
    {abstract}
   </div>
  </div>
 );
};
}
const style = {
 container : {
  height: '350px',
  margin: 'auto',
  border: '1px solid #c1c7d4'
 },

 info : {
  height: '200px',
  background: '#c1c7d4',
  padding: '18px'
 },

 h1 : {
  color: '#242f36',
  fontSize: '1.5rem',
  margin: '0'
 },

 p: {
  marginTop: '18px',
  color: "#fff",
  fontSize: ".8rem"
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
}
export default Headline;