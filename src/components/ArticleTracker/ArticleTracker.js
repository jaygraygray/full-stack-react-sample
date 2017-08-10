import React, { Component } from 'react';
import Stars from './Stars';
import Bookmark from './Bookmark'
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite'

class ArticleTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url : null
    }
  }


  render() {
    const { container, ul } = style
    console.log("Props:", this.props)
    return (
      <div className={ css(container) }>
        <ul className={ css(ul) }>
          <li>
            <Stars article={this.props.url}/>
          </li>
          <li>
            <Bookmark article={this.props.url}/>
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
export default ArticleTracker;