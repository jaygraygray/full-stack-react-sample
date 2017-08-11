import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'

class Bookmark extends Component {

  constructor() {
    super()
    this.state = {
      saved: null
    }
  }

  // get info for each article from userID that's saved in store
  
  render() {

    const { img } = style
    
    if (!this.state.saved) {
      return (
        <div>
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