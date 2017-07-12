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

   // set default section to Home if no other
   // section is present in the URL parameter
   !this.props.match.params.section ?
    section = 'home' :
    section = this.props.match.params.section

    axios.get(`http://localhost:9998/view/${section}`).then( r => this.setState({ apiData: r.data }))
  }
 render() {
   console.log( this.state.apiData )
  return (
   <div>
    {this.state.apiData && this.state.apiData.map( data => { return <div><b>Title:</b> {data.title} </div> }) }
   </div>
  );
 }
}

export default Home;