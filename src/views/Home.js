import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import Article from '../components/article/Article'
import TopStories from '../components/topStories/TopStories'


class Home extends Component {

  constructor() {
    super()
    
    this.state = {
      topStories: [],
      stories: []
    }
  }

  updateArticles(section) {
    if (section == 'auth') {
      axios.get(`/view/home`)
      .then( r => {
        this.setState({
          topStories: r.data.slice(0,3),
          stories: r.data.slice(4, r.data.length)
        })
      })
    } else {
      axios.get(`/view/${section}`)
      .then( r => {
        this.setState({
          topStories: r.data.slice(0,3),
          stories: r.data.slice(4, r.data.length)
        })
      })
    }
  }

  componentDidMount() {
    var section = null

    // set default section to Home if no other
    // section is present in the URL parameter
    !this.props.match.params.section ?
    section = 'home' :
    section = this.props.match.params.section
    
    this.updateArticles(section)
  }

  // if section changes, make sure correct articles are displayed
  componentWillReceiveProps(nextProps) {

    let section = nextProps.match.params.section

    if (section !== this.props.match.params.section) {
      this.updateArticles(section)
    }
  }

  render() {
  // generate list of articles
    const ArticlesList = this.state.stories.map( (data, i) => {
    
      let date = moment(data.date).format('h:mm a')

      return (
        <div>

          
          <Article
          key={i}
          image={data.imgData[1]}
          title={data.title}
          body={data.abstract}
          author={data.byline}
          date={date}
          url={data.url}
          />
        </div>
        )
      }
    )

    const { container } = style

    return (
      <div style={ container }>

        <TopStories stories={ this.state.topStories }/>
        { this.state.stories && ArticlesList } 

      </div>
      );
  }
}

const style = {
  container : {
    marginTop: '68px',
}
}
export default Home;