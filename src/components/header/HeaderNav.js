import React from 'react';

import { Link } from 'react-router-dom'

export default HeaderNav => {

 const {container, ul, li} = style

 return (
  <div style={container}>
    <ul style={ul}>
     <Link to="/home"><li style={li}>Home</li></Link>
     <Link to="/opinion"><li style={li}>Opinion</li></Link>
     <Link to="/world"><li style={li}>World</li></Link>
     <Link to="/national"><li style={li}>U.S.</li></Link>
     <Link to="/nyregion"><li style={li}>N.Y.</li></Link>
     <Link to="/technology"><li style={li}>Technology</li></Link>
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

