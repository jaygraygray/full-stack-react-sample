import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import SearchResultArticle from '../components/article/SearchResultArticle'

class SearchResults extends Component {

  constructor(props) {
    super(props)
   
    this.state = {
      searchResults: [],
      currentPage: this.props.match.params.page,
      searchTerm: null
    }

    this.NextPage = this.NextPage.bind(this)
    this.PrevPage = this.PrevPage.bind(this)

  }

  componentDidMount() {
    this.updateResults(this.props.match.params.query, this.props.match.params.page)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params !== nextProps.match.params) {
      this.setState({
        searchTerm: nextProps.match.params.page
      })
      this.updateResults(nextProps.match.params.query, nextProps.match.params.page)
    }
  }

  updateResults(query, page) {
 
    axios.get(`/search/${query}/${page}`)
    .then( r => {
      this.setState({
        searchResults: r.data,
      })
    })
  }


  NextPage() {
    let page = parseInt(this.props.match.params.page)
    page++
    this.props.history.push(`/search/${this.props.match.params.query}/${page}`) 
    this.updateResults(this.props.match.params.query, page)
  }

  PrevPage() {
    let page = parseInt(this.props.match.params.page)
    page--
    this.props.history.push(`/search/${this.props.match.params.query}/${this.props.match.params.page}`)
    this.updateResults(this.props.match.params.query, page)
  }

  render() {

    const results = this.state.searchResults.map( (data, i) => {
    
      let date = moment(data.date).format('h:mm a')
      
      //if article returns with no image, assign it one
      let image = null
      data.imgData ?
      image = `https://static01.nyt.com/${data.imgData.url}` :
      image = 'https://vignette1.wikia.nocookie.net/bokunoheroacademia/images/d/d5/NoPicAvailable.png/revision/latest?cb=20160326222204'
      
      return (
        <SearchResultArticle
          key={i}
          image={image}
          title={data.headline.main}
          body={data.snippet}
          date={date}
          url={data.url}
        />
      )
    })

  const { container, breadCrumb, ul, li } = style
  
  return (
    <div className={ css(container) }>

      <div className={ css(breadCrumb) }>
        <Link to="/home">Home</Link> > Search 
      </div>
      
      <ul className={css(ul)}>
        <li className={ css(li) } onClick={ this.PrevPage }> &lt; Previous Page </li>
        <li className={ css(li) } onClick={ this.NextPage }> Next Page &gt; </li>
      </ul>
    
      {this.state.searchResults && results }

    </div>
    );
  }
}

const style = StyleSheet.create({
  container : {
    marginTop: '68px',
  },
  breadCrumb: {
    fontFamily: 'Arial',
    margin: '109px 0 30px 176px',
    fontSize: '1rem',
  },
  page: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  ul: {
    width: '100%',
    padding: '0',
    margin: 'auto',
    marginBottom: '24px',
    display: 'flex',
    listStyle: 'none',
  },
  li: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '.8rem',
    background: '#c3c3c3',
    width: '20%',
    margin: 'auto',
    padding: '18px 32px 18px 32px',
    borderStyle: 'solid',
    borderWidth: '0 0 8px 0px',
    borderColor: '#ababab',
    textAlign: 'center',
    transition: 'all .2s',
    ":hover": {
      cursor: 'pointer',
      borderColor: '#4d4d4d',
      transition: 'all .2s',
      background: '#b3b3cc',
    }
  }
})
export default withRouter(SearchResults);

