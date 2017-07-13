import React, { Component } from 'react';

class Headline extends Component {

constructor() {
 super()
 this.state = {}
}


componentWillReceiveProps(nextProps) {
 if (this.props.story === undefined) {
  this.setState(nextProps.story)
 }
}
 //const { title, byline, date } = props.story
 render() {

 const { container, info, h1, p } = style
 console.log(this.state)
 
 //console.log(typeof this.props.story.title)
 return (
  
  <div style={container}>
 
   <div style={info}>
<h1 style={h1}>{this.state.title}</h1>
    <p>{this.state.byline}</p>
    <p>{this.state.date}</p>
   </div>
  </div>
 );
};
}
const style = {
 container : {
  height: '400px',
  margin: '10px',
  width: '50%',
 },

 info : {
  height: '200px',
  color: '#c1c7d4'
 },

 h1 : {
  color: '#242f36',
  fontSize: '1.5rem'
 },

 p: {
  color: "#fff",
  fontSize: ".9rem"
 }
}
export default Headline;