import React, { Component } from 'react';
 
import Headline from './Headline'
import MinorHeadline from './MinorHeadline'



 class TopStories extends Component {
  render() {
   
   const {container, h1, ul } = style

   return (
    <div>
    <h1 style={h1}>Top Stories</h1>
    <div style={container}>
     <Headline story={this.props.stories[0]}/>
     
     <ul style={ul}>
      <li><MinorHeadline story={this.props.stories[1]}/></li>
      <li><MinorHeadline story={this.props.stories[2]}/></li>
     </ul>
     
      
    </div>
    </div>
   );
  }
 }

 const style = {
  container : {
   height: '420px',
   padding: '18px',
   display: 'flex',
   justifyContent : 'space-around'
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


