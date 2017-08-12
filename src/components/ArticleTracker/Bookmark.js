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
  isSaved(articleURL) {
    // get list of articles
    // check if saved URL matches this.props.info.url
    /// if YES: display filled bookmark
    /// if NO: display empty bookmark
  }


  addBookmark(uid, articleInfo) {
    //insert new bookmark based on userID
    // and passed in info
  }

  removeBookmark(uid, articleInfo) {
    //remove bookmark based on userID
  }
  render() {
    console.log('Bookmark.js: ', this.props.info)
    const { img } = style
    
    if (!this.state.saved) {
      return (
        <div onClick={ () => { this.addBookmark(this.props.uid, this.props.articleInfo) } }>
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
export default Bookmark