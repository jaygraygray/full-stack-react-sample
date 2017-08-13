import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'
class Bookmark extends Component {

  constructor() {
    super()
    this.state = {
      saved: false
    }
  }

  
  componentDidMount() {
    axios.get(`/getarticles/${this.props.uid}`)
          .then( resp => { 
        //check stories for url living on this.props.info.url
        // if there's a match, then set saved to TRUE
        // if there's no match, then set saved to FALSE
            for (let i = 0; i < resp.data.length; i++) {
              if (resp.data[i].url === this.props.info.url) {
                this.setState({ saved : true})
              } else if (resp.data[i].url !== this.props.info.url) {
                this.setState({ saved: false })
              }
            }
          })

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
    // console.log("props: ", this.props.info.url)
    // console.log("state: ", this.state.stories)
    if (this.state.saved === false) {
      return (
        <div onClick={ () => { this.addBookmark(this.props.info) } }>
          <p className={ css(p) }> Add Bookmark </p>
          {/* <img className={ css(img) } src={require('./bookmark-white.svg')} /> */}
        </div>
      );
    } else if (this.state.saved === true) {
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