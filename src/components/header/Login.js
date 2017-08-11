import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import LoginMenu from './LoginMenu'

class Login extends Component {

  render() {

    const { img, ul, p, li, a, arrow } = style

    if (!this.props.user) {
      return (
        <div>
          <a className={ css(a) } href="http://localhost:9999/auth/">Log In</a>
        </div>
      );
    } else {

      return (
        <LoginMenu>
        <ul className={ css(ul) }>

          
            <li className={ css(li) }>
              <p className={ css(p) }> { this.props.user.displayName }  <span className={ css(arrow) }>v</span> </p>
            </li>
            <li className={ css(li) }>
              <img src={this.props.user.picture} className={ css(img) }/>
            </li>
          

        </ul>
        </LoginMenu>
      );  
    }
  }
}
const style = StyleSheet.create({
  arrow : {
    marginLeft: '24px',
    color: '#a9a9a9',
  },
  img : {
    margin: '0',
    padding: '0',
    width: '42px',
    height: '42px',
    borderRadius: '50%'
  },

  ul: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    justifyContent: 'space-between'
  },

  p: {
    fontFamily: 'Arial',
    fontSize: '1rem'
  },

  li: {
    marginLeft: '24px',
    textAlign: 'center',
  },

  a: {
    color: '#fff',
    textDecoration: 'none',
    ":hover": {
      textDecoration: 'underline',
    },
    ":visited": {
      color: '#fff',
      textDecoration: 'none',  
    },
    ":acitve": {
      color: '#fff',
      textDecoration: 'none',
    }
  }
})

export default Login;