import React, { Component } from 'react';

class Search extends Component {
 render() {
  const { input, searchIcon, ul, li } = style
  return (
   <ul style={ul}>
     <li style={li}><img style={searchIcon} src={require('./search.svg')} /></li>
     <li style={li}><input style={input} defaultValue="Search" /> </li>
   </ul>
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
export default Search;