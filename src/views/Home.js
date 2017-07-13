import React, { Component } from 'react';
import axios from 'axios'

import Article from '../components/article/Article'
import TopStories from '../components/topStories/TopStories'
import MinorHeadline from '../components/topStories/MinorHeadline'

import  moment  from 'moment'

class Home extends Component {
  constructor() {
   super()
   this.state = {
     topStories: [],
     stories: []
   }
 }

  componentDidMount() {
   var section = null

   // set default section to Home if no other
   // section is present in the URL parameter
   !this.props.match.params.section ?
    section = 'home' :
    section = this.props.match.params.section
     axios.get(`http://localhost:9998/view/${section}`)
          .then( r => {
           this.setState({
            topStories: r.data.slice(0,3),
            stories: r.data.slice(4, r.data.length)
           })
          })
  }

 render() {

  const ArticlesList = this.state.stories.map( (data, i) => {
   let date = moment(data.date).format('h:mm a')
   
   return (
    <Article
     key={i}
     image={data.imgData[1]}
     title={data.title}
     body={data.abstract}
     author={data.byline}
     date={date}
     url={data.url}
    />
   )})

  const {container} = style

  return (
   
   <div style={container}>
    <TopStories stories={this.state.topStories}/>
    {this.state.stories && ArticlesList }
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