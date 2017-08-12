import React, { Component } from 'react';
import Stars from './Stars';
import Bookmark from './Bookmark'
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'

class ArticleTracker extends Component {

  render() {

    const { container, ul } = style

    return (
      <div className={ css(container) }>
        <ul className={ css(ul) }>
          <li>
            <Stars info={this.props.info}
                   id={this.props.id}/>
          </li>
          <li>
            <Bookmark info={this.props.info}
                      id={this.props.id}/>
          </li>
        </ul>
      </div>
    );
  }
}
const style = StyleSheet.create({
  container : {
    alignSelf: 'flex-end',
    width: '100%',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    alignItems: 'bottom',
  }
})


export default connect( (state) => {
  return { id: state.user }
})(ArticleTracker);