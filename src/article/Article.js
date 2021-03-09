import React from 'react'
import {Footer} from './footer'

export const Article = (props) => {
    const context = require.context("../assets/images", false)

    return (
        <div className="article">
            <img src={context(`./${props.imgSrc}`).default} alt={props.imgAlt}></img>
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subtitle}</div>
            <Footer 
                date={props.date} 
                category={props.category} 
                comments={props.comments} 
            />
        </div>
    )
}