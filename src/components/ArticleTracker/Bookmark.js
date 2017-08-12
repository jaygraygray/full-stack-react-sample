import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'

class Bookmark extends Component {

  constructor() {
    super()
    this.state = {
      saved: null
    }
  }

  // get info for each article from userID that's saved in store
  // will need to be addBookmark and removeBookmark methods
  
  render() {

    const { img } = style
    
    if (!this.state.saved) {
      return (
        <div onClick={ () => { this.addBookmark(this.props.uid) } }>
          <img className={ css(img) } src={require('./bookmark-white.svg')} />
        </div>
      );
    } else {
      return(
        <div>
          <img className={ css(img) } src={require('./bookmark-black.svg')} />
        </div> 
      )
    }
  }
}
const style = StyleSheet.create({
  img : {
    width: '32px',
  }
})
export default Bookmark;