import React, { Component } from 'react';
 
import Headline from './Headline'
import MinorHeadline from './MinorHeadline'



 class TopStories extends Component {
  render() {
   
   const {container, h1, ul } = style

   return (
    <div style={container}>
      
     <Headline story={this.props.stories[0]}/>
     
     <div>
      <MinorHeadline story={this.props.stories[1]}/>
      <MinorHeadline story={this.props.stories[2]}/>
     </div>
    
    </div>
 
   );
  }
 }

 const style = {
  container : {
   width: '73%',
   margin: 'auto',
   height: '420px',
   padding: '18px',
   display: 'flex',
   justifyContent: 'space-around'
  },
  h1 : {
   fontFamily: 'Arial',
   fontSize: '2rem'
  },
  ul : {
   listStyle: 'none',
  }
 }
 
 export default TopStories;


