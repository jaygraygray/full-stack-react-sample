import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom'

import { StyleSheet, css } from 'aphrodite'

class HeaderNav extends Component {


render() {

  const { container, ul, li, liActive } = style
  
 return (
  <div className={ css(container) }>
    <ul className={ css(ul) }>
     <NavLink className={css(li)} activeClassName={css(liActive)} to="/home">      <li>Home</li></NavLink>
     <NavLink className={css(li)} activeClassName={css(liActive)} to="/opinion">   <li>Opinion</li></NavLink>
     <NavLink className={css(li)} activeClassName={css(liActive)} to="/world">     <li>World</li></NavLink>
     <NavLink className={css(li)} activeClassName={css(liActive)} to="/national">  <li>U.S.</li></NavLink>
     <NavLink className={css(li)} activeClassName={css(liActive)} to="/nyregion">  <li>N.Y.</li></NavLink>
     <NavLink className={css(li)} activeClassName={css(liActive)} to="/technology"><li>Technology</li></NavLink>
    </ul>
  </div>
 );
}
}


const style = StyleSheet.create({
 container : {
   width: '80%',
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

  liActive: {
     padding: "0 32px 24px 32px",
   color: '#242f36',
   borderWidth: '0 0 3px 0',
   borderStyle: 'solid',
   borderColor: 'orange',
   transition: 'all .2s',  
  },

  li : {
   padding: "0 32px 24px 32px",
   color: '#242f36',
   borderWidth: '0 0 3px 0',
   borderStyle: 'solid',
   borderColor: '#fff',
   transition: 'all .2s',

   ':hover': {
   borderWidth: '0 0 3px 0',
   borderStyle: 'solid',
   borderColor: '#009bde',
   transition: 'all .2s',
   }
  }
 })

export default withRouter(HeaderNav)