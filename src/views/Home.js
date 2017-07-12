import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
  constructor() {
   super()
   this.state = {
     apiData: null
   }
 }

  componentDidMount() {
   var section = null
   if (!this.props.match.params.section) {
    alert('asdf')
    section = 'home'
   } else {
    section = this.props.match.params.section;
   }
     console.log('asdfasdf', section)
     axios.get(`http://localhost:9998/view/${section}`).then( r => this.setState({ apiData: r.data }))
  }
 render() {
  console.log(this.state.apiData)
  return (
   <div>
    
   </div>
  );
 }
}

export default Home;