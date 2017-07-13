import React, { Component } from 'react';
 
import Headline from './Headline'
import MinorHeadline from './MinorHeadline'



 class TopStories extends Component {
  render() {
   
   const {container, h1 } = style

   return (
    <div style={container}>
     <h1 style={h1}>Top Stories</h1>
     <Headline story={this.props.stories[0]}/>
     <MinorHeadline story={this.props.stories[1]}/>
     <MinorHeadline story={this.props.stories[2]}/> 
    </div>
   );
  }
 }

 const style = {
  container : {
   width: '712px',
   height: '420px',
   padding: '18px'
  },
  h1 : {
   fontFamily: 'Arial',
   fontSize: '2rem'
  }
 }
 
 export default TopStories;


