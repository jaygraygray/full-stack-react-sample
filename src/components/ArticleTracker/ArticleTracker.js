import React, { Component } from 'react';
import Stars from './Stars';
import Bookmark from './Bookmark'
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'

class ArticleTracker extends Component {
  constructor() {
    super()

    this.state = {
      menuStatus: '+'
    }

    this.menuAction = this.menuAction.bind(this)
  }

  menuAction() {
    if (this.state.menuStatus === '+') {
      this.setState({ menuStatus: '-'})
    } else if (this.state.menuStatus === '-') {
      this.setState({ menuStatus: '+' })
    }
  }

  render() {

    const { container, ul, menuTrigger } = style

    let menuStyle = null;
    (this.state.menuStatus === '-') ?
      menuStyle = StyleSheet.create({ menu: { opacity: 1 } }) :
      menuStyle = StyleSheet.create({ menu: { opacity: 0 } }) 

    return (
      <div className={ css(container) }>
        <div className={ css(menuTrigger) } onClick={ this.menuAction }>
          { this.state.menuStatus }
        </div>
        <ul className={ css([ul, menuStyle.menu]) }>
          {/* <li>
            <Stars info={this.props.info}
                   uid={this.props.id}/>
          </li> */}
          <li>
            <Bookmark info={this.props.info}
                      uid={this.props.id}/>
          </li>
        </ul>
      </div>
    );
  }
}
const style = StyleSheet.create({
  menuTrigger: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: '#242f36',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#fff',
    transition: 'all .2s',
    marginRight: '0',
    marginTop: '0',
    fontSize: '1rem',
      ":hover": {
        cursor: 'pointer',
        transition: 'all .2s',
        fontSize: '1.3rem',
      }
    
  },
  container : {
    height: '100%',
    width: '100%',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    alignItems: 'bottom',
    width: '200px',
    background: '#242f36',
    opacity: '0',
    transition: 'all .2s',
    borderRadius: '18px',
    padding: '24px',
      ":hover": {
        cursor: 'pointer',
      }
  }
})


export default connect( (state) => {
  return { id: state.user }
})(ArticleTracker);