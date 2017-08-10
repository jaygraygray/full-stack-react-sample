import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      menuState: false
    }
    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {

    this.setState({
      menuState : !this.state.menuState
    })

  }
  render() {

    const { img, ul, p, li, menu, menuUL, menuLI, menuTrigger, link } = style
    let menuActive = null;
    this.state.menuState ?
      menuActive = StyleSheet.create({ menu: { opacity: 1 }}) :
      menuActive = StyleSheet.create({ menu: { opacity: 0 }})

    if (!this.props.user) {
      return (
        <div>
          <a href="http://localhost:9999/auth/">Log In</a>
        </div>
      );
    } else {

      return (
        <ul className={ css(ul) }>
          <li className={ css(li) }>
            <p className={ css(p) }>Welcome back, <br /> 
            { this.props.user.displayName } </p>
          </li>
          <li className={ css(li) }>
            <img src={this.props.user.picture} className={ css(img) }/>
          </li>
          <li className={ css(li) }>
            <div className={ css(menuTrigger) } onClick={ this.openMenu }>\/</div>
              <div className={ css([menu, menuActive.menu]) }>
                <ul className={ css(menuUL) }>
                  <a className={css(link)} href="http://localhost:9999/auth/logout">
                    <li className={ css(menuLI) }>
                      Logout
                    </li>
                  </a>
                  <a className={css(link)} href="#">
                    <li className={ css(menuLI) }>
                      Ratings
                    </li>
                  </a>
                  <a className={ css(link) } href="#">
                    <li className={ css(menuLI) }>
                      Bookmarks
                    </li>
                  </a>
                </ul>
              </div>
          </li>
          
        </ul>
      );  
    }
  }
}
const style = StyleSheet.create({
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
  },

  menuTrigger: {
    letterSpacing: '-1px',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: '#fff',
    paddingBottom: '12px',
    width: '34px',
    transition: 'all .2s',
    ":hover": {
      cursor: 'pointer',
      transition: 'all .2s',
      paddingTop: '12px',
      paddingBottom: '4px'
    }
  },

  p: {
    fontFamily: 'Arial',
    fontSize: '1rem'
  },

  li: {
    marginLeft: '24px',
    textAlign: 'center',
  },

  menu: {
    width: '200px',
    position: 'absolute',
    right: '0',
    top: '64px',
    background: '#242f36',
    
  },

  menuUL: {
    listStyle: 'none'
  },

  menuLI: {
    padding: '24px',
    transition: 'all .2s',
    ":hover": {
      background: '#c1c7d4',
      transition: 'all .2s',
    },
  },

  link : {
    background: 'pink',
    color: '#fff',
    textDecoration: 'none',
    ":hover": {
      color: '#000',
      textDecoration: 'underline', 
    }
  }
})

export default Login;