import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'

export default class Stars extends Component {
  constructor() {
    super()
    this.state = {
      rating: null
    }
  }

  // get info for each article from userID that's saved in store

  handleRate = (e, { rating, maxRating }) => this.setState({ rating })

  render() {

    return (
      <div>
        <Rating maxRating={5} 
                onRate={this.handleRate} 
                size='massive'/>
      </div>
    )
  }
}