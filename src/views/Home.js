import React, { Component } from 'react';
import axios from 'axios'

import Article from '../components/article/Article'

class Home extends Component {
  constructor() {
   super()
   this.state = {
     apiData: []
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
  const ArticlesList = this.state.apiData.map( data => {
   return (
    <Article 
     image={data.imgData}
     title={data.title}
     body={data.abstract}
     author={data.byline}
     date={data.date}
     url={data.url}
    />
   )
  })
 
  const {container} = style

  return (
   <div style={container}>

    {this.state.apiData && ArticlesList }
   
   </div>
  );
 }
}
const style = {
 container : {
  marginTop: '68px'
 }
}
export default Home;