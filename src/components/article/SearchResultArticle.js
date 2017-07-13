import React, { Component } from 'react';

class SearchResultArticle extends Component {
 render() {
  //const {} = style
  const { image, title, body, date, url } = this.props
  return (
   <div>
   {title}
   </div>
  );
 }
}

export default SearchResultArticle;