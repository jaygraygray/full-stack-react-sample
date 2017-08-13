import React, { Component } from 'react';
import HeaderNav from './HeaderNav'
import Search from './Search'
import Login from './Login'
import axios from 'axios'
import { connect } from 'react-redux'
import { action_getUserID } from '../../ducks/reducer'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  constructor(){
    super()
    this.state = {
      userData: null
    }


  }

  componentDidMount() {
    axios.get('/auth/me').then( (r) => {
        if (r.data) {
          this.setState({ userData: r.data })
          this.props.action_getUserID(r.data._json.clientID)
        }
      })
  }

  

  render() {

  const { container, aligner, h1 } = style
    
  return (
    <div style={ container }>

      <div style={ aligner }>
        <h1 style={ h1 }>The Times</h1>
        <Search />
        <Login user={this.state.userData} />

          
      </div>

      <HeaderNav />

    </div>
    );
  }
}

const style = {
  container : {
    margin: 'auto',
    width: '100%',
    height: '64px',
    background: '#242f36',
    color: '#fff',
},
  aligner : {
    display: 'flex',
    height: '64px',
    justifyContent: 'space-around',
    alignItems: 'center'
},
  h1 : {
    fontSize: '2rem',
  }
}
export default withRouter(connect(null, { action_getUserID })(Header)) ;