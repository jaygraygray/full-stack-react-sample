import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
    this.search = this.search.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  
  search(e) {
    e.preventDefault()
    this.props.history.push('/search/' + this.state.searchTerm + '/0')

  }


  onSearchChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
    
  }
 render() {
  const { input, searchIcon, ul, li } = style
  return (
    <form onSubmit={this.search}>
    <ul style={ul}>
      <li style={li}><img style={searchIcon} src={require('./search.svg')}/></li>
      <li style={li}><input style={input} defaultValue="Search"  onChange={ this.onSearchChange }/> </li>
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
  height: '32px',
  color: '#fff',
  borderRadius: '0 40px 40px 0',
  background: '#3a434a',
  borderStyle: 'none',
  fontSize: '.7rem',
  fontWeight: 'bold',
  paddingLeft: '8px'
 }
}
export default withRouter(Search);