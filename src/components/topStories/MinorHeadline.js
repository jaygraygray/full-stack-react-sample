import React, { Component } from 'react';

import moment from 'moment'

class MinorHeadline extends Component {
 constructor() {
  super()
  this.state = {}
 }
 componentWillReceiveProps(nextProps) {
 if (this.props.story === undefined) {
  this.setState(nextProps.story)
 }
}

 render() {
  const { container, h1, author, date, ul, li } = style
  const { title, byline, datePublished} = this.state
  return (
   <div style={container}>
    <h1 style={h1}> {title} </h1>
    <ul style={ul}>
     <li style={li}><p style={author}> {byline} </p></li>
     <li style={li}><p style={date}> {moment(datePublished).format('h:mm a')} </p></li>
    </ul>
   </div>
  );
 }
}
const style = {
 container : {
  width: '39%',
  height: '165px',
  padding: '20px',
  marginTop: '18px',
  marginLeft: '24px',
  border: '1px solid #c1c7d4'
 },
 h1 : {
  color: '#242f36',
  fontSize: '1.3rem',
  margin: '0'
 },
 author: {
  fontSize: '.9rem',
  color: '#A9A9A9',
 },
 date: {
  fontSize: '.9rem',
  color: '#0000A0',
 },
 ul: {
  listStyle: 'none'
 },
 li : {
  marginTop: '6px'
 }
}
export default MinorHeadline;