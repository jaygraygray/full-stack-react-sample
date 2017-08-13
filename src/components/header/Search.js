import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Search extends Component {

  constructor() {
  super()

  this.state = {
    searchTerm: ''
  }

  //bind functions so they can be accessed in render()
  this.search = this.search.bind(this)
  this.onSearchChange = this.onSearchChange.bind(this)
  this.clear = this.clear.bind(this)
  }

  // e = event take from form submission
  search(e) {
    e.preventDefault()
    console.log(e)
    this.props.history.push('/search/' + this.state.searchTerm + '/0')
  }

  //logs the value of what's being searched
  onSearchChange(e) {
    this.setState( { searchTerm: e.target.value } )
  }

  clear() {
    this.refs.search.value = ''
  }

  render() {

  const { input, searchIcon, ul, li } = style

    return (

      <form action={`/search/${this.state.searchTerm}/0`}>
       
        <ul style={ ul }>
         
          <li style={ li }>
            <img style={ searchIcon } src={ require('./search.svg') } alt="Search"/>
          </li>
         
          <li style={ li }>
            <input style={ input } defaultValue="Search"  onChange={ this.onSearchChange } onClick={ this.clear } ref="search"/> 
          </li>
          
        </ul>
      
      </form>

    );
  }
}

const style = {
  ul : {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  searchIcon: {
    paddingLeft: '6px',
    width: '24px',
    background: '#3a434a',
    borderRadius: '40px 0 0 40px',
    height: '34px'
  },
  input : {
    height: '34px',
    color: '#fff',
    borderRadius: '0 40px 40px 0',
    background: '#3a434a',
    borderStyle: 'none',
    fontSize: '.7rem',
    fontWeight: 'bold',
    paddingLeft: '8px',
    width: '327px',
    textAlign: 'center'
  }
}
export default withRouter(Search);