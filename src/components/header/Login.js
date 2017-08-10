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

    const { img, ul, p, li, menu, menuUL, menuLI, menuTrigger } = style
    let menuActive = null;
    this.state.menuState ?
      menuActive = StyleSheet.create({ menu: { opacity: 1 }}) :
      menuActive = StyleSheet.create({ menu: { opacity: 0 }})

    if (this.props.user === null) {
      return (
        <div>
          Not Logged In
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
                  <li className={ css(menuLI) }>
                    <a href="http://localhost:9999/auth/logout">Logout</a>
                  </li>
                  <li className={ css(menuLI) }>
                    <a href="#">Ratings</a>
                  </li>
                  <li className={ css(menuLI) }>
                    <a href="#">Bookmarks</a>
                  </li>
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
    "hover:": {
      width: '20px',
      cursor: 'pointer'
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
    height: '100px',
    position: 'absolute',
    right: '0',
    top: '120',
    background: '#fff'
  },

  menuUL: {
    listStyle: 'none'
  },

  menuLI: {
    background: 'blue'
  }
})

export default Login;