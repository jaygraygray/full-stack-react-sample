import React, { Component } from 'react';
import Stars from './Stars';
import Bookmark from './Bookmark'

import { StyleSheet, css } from 'aphrodite'

class ArticleTracker extends Component {
  render() {
    const { container, ul } = style
    return (
      <div className={ css(container) }>
        <ul className={ css(ul) }>
          <li>
            <Stars/>
          </li>
          <li>
            <Bookmark />
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