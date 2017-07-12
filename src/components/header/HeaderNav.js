import React from 'react';

export default HeaderNav => {

 const {container, ul, li} = style

 return (
  <div style={container}>
    <ul style={ul}>
     <li style={li}>Home</li>
     <li style={li}>World</li>
     <li style={li}>U.S.</li>
     <li style={li}>Politics</li>
     <li style={li}>N.Y.</li>
     <li style={li}>More</li>
    </ul>
  </div>
 );
}
const style = {
 container : {
   margin: '28px auto',
 },
  ul : {
   display: 'flex',
   justifyContent: 'space-between',
   fontSize: '.8rem',
   fontFamily: 'Arial',
   fontWeight: 'bold',
   listStyle: 'none',
   padding: '0',
   marginLeft: '0',
  },

  li : {
   paddingLeft: '32px',
   paddingRight: '32px',
   color: '#242f36',
   // borderWidth: '0 0 3px 0',
   // borderStyle: 'solid',
   // borderColor: '#009bde',
  }
 }

