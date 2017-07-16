import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import  Search  from '../components/header/Search'

class Articles extends Component {

  render() {

  const { container, content, home, nav } = style
  
  // format URL for iframe consumption
  let finalURL =  this.props.match.params.url.replace(/[|]/g, "/")

    return (
      <div style={ container }>

        <div style={ nav }>
          <Link to="/home" style={ home }>Home</Link>
          <Search />
        </div>

        <div>
          { this.props.match.params && <iframe src={ finalURL } style={ content } title='NYTimes Browser'/> }
        </div>

      </div>
    );
  }
}
const style = {
  container : {
    marginTop: '-219px',
  },
  contentContainer: {
    overflow: 'hidden',
    position: 'relative'
  },
  content: {
    position: 'absolute',
    top: '0',
    left:'0',
    width: '100vw',
    height: '100vh'
  },
  nav: {
    position: 'fixed',
    bottom: '76px',
    right: '93px',
    borderRadius: '18px',
    width: '256px',
    height: '213px',
    zIndex: '2',
    background: '#242f36',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  home: {
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '2rem',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    textDecoration: 'none',
    padding: '0 26px 33px 26px',
  }
}
export default Articles;