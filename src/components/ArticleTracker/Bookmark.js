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


  addBookmark(articleInfo) {
    //insert new bookmark based on userID
    // and passed in info
    this.setState({ saved: true })
    const body = {
      user_id: this.props.uid,
      url: articleInfo.url,
      date_published: articleInfo.date_published,
      title: articleInfo.title
    }

    axios.post('/addArticle', body)
         .then( resp => { this.setState({ saved: true }) })
  }

  removeBookmark(uid, articleInfo) {
    this.setState({ saved: false })
  }
  render() {

    const { img, p } = style
    
    if (!this.state.saved) {
      return (
        <div onClick={ () => { this.addBookmark(this.props.info) } }>
          <p className={ css(p) }> Add Bookmark </p>
          {/* <img className={ css(img) } src={require('./bookmark-white.svg')} /> */}
        </div>
      );
    } else {
      return(
        <div>
          <p className={ css(p) }> Remove Bookmark </p>
          {/* <img className={ css(img) } src={require('./bookmark-black.svg')} /> */}
        </div> 
      )
    }
  }
}
const style = StyleSheet.create({
  img : {
    width: '32px',
  },
  p: {
    color: "#fff",
    fontSize: '1.2rem'
  }
})
export default Bookmark