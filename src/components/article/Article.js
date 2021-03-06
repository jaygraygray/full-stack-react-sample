import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import ArticleTracker from '../ArticleTracker/ArticleTracker'
import _ from 'underscore'
import moment from 'moment'

class Article extends Component {
    
    render() {

    let { container, img, content, bodyText, authorText, dateText, p, article } = style
    let { image, title, body, author, date, url, id } = this.props
    var articleInfo = _.pick(this.props, 'title', 'date', 'url')
  
    return (
        <div className={ css(container) }>

            <div className={ css(img) }> <img src={ image && image.url } alt="Headline"/> </div>
            <div className={ css(article) }>
                <ArticleTracker info={articleInfo}/>
            </div>
            <div className={ css(content) }>

                <a href={url}>
                    <h2> {title} </h2>
                </a>
                <p className={ css(p) }> <span className={ css(bodyText) }> {body} </span></p>
                <p className={ css(p) }> <span className={ css(authorText) }> {author} </span>
                  | <span className={ css(dateText) }> { moment(date).format('h:mm a')} </span></p>

            </div>

        </div>
    );
    }
}

const style = StyleSheet.create({
    container: {
        position: 'relative',
        width: '60%',
        minHeight: '142px',
        margin: 'auto',
        borderStyle: 'solid',
        borderWidth: '1px 0 0 0',
        borderColor: '#cccccc',
        display: 'flex',
        flexDirection: 'left',
        justifyContent: 'space-around',
        padding: '25px 50px 25px 50px',
        transition: 'all .1s',
        ":hover": {
            boxShadow: '0px 2px 20px #cacaca inset',
            transition: 'all .1s',
        }
    },
    img: {
        margin: 'auto',
        padding: '0',
        height: '140px',
        width: '210px',
    },
    content: {
        padding: '0 20px 0 20px',
        marginTop: '12px'
    },
    p: {
        fontSize: '.8rem',
        margin: '18px 0 18px 0',
    },
    bodyText: { color: '#1a1a1a' },
    authorText: { color: '#A9A9A9' },
    dateText: { color: '#0000A0'},

    article: {
        position: 'absolute',
        top: '-24px',
        left: '-19px',
        opacity: '1',
    }
  
})

export default Article;