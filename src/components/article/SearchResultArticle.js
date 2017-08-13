import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'
import ArticleTracker from '../ArticleTracker/ArticleTracker'
import _ from 'underscore'

class SearchResultArticle extends Component {

    render() {

    const { container, articleTitle, articleBody, img, content, imgContainer, article} = style
    const { image, title, body, url } = this.props
    var articleInfo = _.pick(this.props, 'title', 'url')

    return (

        <div className={ css(container) }>

            <div className={ css(article) }>
                <ArticleTracker info={articleInfo}/>
            </div>

            <div className={ css(imgContainer) }>
                <img src={ image } className={ css(img) } alt="Headline"/>
            </div>

            <div className={ css(content) }>
                <a href={url}>
                    <h1 className={ css(articleTitle) }> {title} </h1>
                </a>
                <p className={ css(articleBody) }> {body} </p>
            </div>

        </div>
    );
    }
}

const style = StyleSheet.create({
    container : {
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
        fontFamily: 'Arial',
        textDecoration: 'none',
        padding: '25px 50px 25px 50px',
        transition: 'all .1s',
        ":hover": {
            boxShadow: '0px 2px 20px #cacaca inset',
            transition: 'all .1s',
        }
    },
    articleTitle: {
        color: '#009bde',
        fontSize: '1.3rem',
        marginTop: '6px',
    },
    articleBody: {
        fontSize: '.9rem',
        color: '#242f36',
        marginTop: '24px',
    },
    imgContainer: {
        width: '20%',
    },
    img: {
        float: 'left',
        width: '190px',
        height: '126px',
    }, 
    content: {
        width: '60%',
        padding: '0 20px 0 20px',
        marginTop: '12px'
    },
    article: {
        position: 'absolute',
        left: '16px',
    }
})
export default SearchResultArticle;