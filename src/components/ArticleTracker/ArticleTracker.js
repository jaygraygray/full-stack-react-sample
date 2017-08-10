import React, { Component } from 'react';
import Stars from './Stars';
import Bookmark from './Bookmark'
import axios from 'axios'
import { StyleSheet, css } from 'aphrodite'
import { action_getUserID } from '../../ducks/reducer'
import { connect } from 'react-redux'

class ArticleTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url : null
    }
  }


  render() {
    const { container, ul } = style

    return (
      <div className={ css(container) }>
        <ul className={ css(ul) }>
          <li>
            <Stars article={this.props.url}
                   id={this.props.id}/>
          </li>
          <li>
            <Bookmark article={this.props.url}
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

function mapStateToProps(state) {
  return {
    id: state.user
  }
}
export default connect(mapStateToProps)(ArticleTracker);