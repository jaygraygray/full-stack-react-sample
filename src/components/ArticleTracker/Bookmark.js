import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'
class Bookmark extends Component {

  constructor() {
    super()
    this.state = {
      saved: false
    }

    this.addBookmark = this.addBookmark.bind(this)
  }


  componentDidMount() {
    axios.get(`/getarticles/${this.props.uid}`)
          .then( resp => { 
            resp.data.filter( (item) => {
              if (item.url === this.props.info.url) {
                console.log("Bookmark Filter:", item.url)
                this.setState({ saved: true })
              }
            })
          })
        }
  
  addBookmark() {

    this.setState({ saved: true })
    const body = {
      user_id: this.props.uid,
      url: this.props.info.url,
      date_published: this.props.info.date,
      title: this.props.info.title
    }
    console.log("props", this.props)
    console.log("body", body)

    axios.post('/addArticle', body)
  }

  removeBookmark(uid, articleInfo) {
    this.setState({ saved: false })

  }
  render() {

    const { img, p } = style

    if (this.state.saved === false) {
      return (
        <div onClick={ this.addBookmark }>
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