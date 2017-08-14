import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class LoginMenu extends Component {

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

    const { menu, menuUL, menuLI, menuTrigger, link, menuWrapper } = style

    let menuActive = null;
    this.state.menuState ?
      menuActive = StyleSheet.create({ menu: { opacity: 1 }}) :
      menuActive = StyleSheet.create({ menu: { opacity: 0 }})

      
    return (
      
      <div onClick={ this.openMenu } className={ css(menuWrapper) }>
        {this.props.children}


        <div className={ css([menu, menuActive.menu]) }>
          <ul className={ css(menuUL) }>
            <Link to={`/bookmarks/${this.props.uid}`} className={ css(link) }>
              <li className={ css(menuLI) }>
                Bookmarks
              </li>
            </Link>
            <a className={css(link)} href="/auth/logout">
              <li className={ css(menuLI) }>
                Logout
              </li>
            </a>
          </ul>
        </div>
        </div>
    );
  }
}

const style = StyleSheet.create({
  menu: {
    zIndex:'1',
    width: '222px',
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
  menuWrapper: {
    cursor: 'pointer'
  }
})
export default connect( (state) => {
  return { uid: state.user }
})(LoginMenu);