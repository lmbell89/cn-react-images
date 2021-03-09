import React from 'react'

export const Footer = (props) => {

    let timeText
    const milliseconds = Date.now() - props.date

    if (Math.floor(milliseconds / 1000 / 60) === 0) {
        timeText = `${Math.floor(milliseconds / 1000)}s`
    } else if (Math.floor(milliseconds / 1000 / 60 / 60) === 0) {
        timeText = `${Math.floor(milliseconds / 1000/ 60)}m`
    } else if (Math.floor(milliseconds / 1000 / 60 / 60 / 24) === 0) {
        timeText = `${Math.floor(milliseconds / 1000/ 60/ 60)}h`
    } else if (Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365)) {
        timeText = `${Math.floor(milliseconds / 1000/ 60/ 60 / 24)}d`
    } else {
        timeText = `${Math.floor(milliseconds / 1000/ 60/ 60 / 24 / 365)}y`
    }


    let commentButton

    if (props.comments) {
        commentButton = (
        <div>
            <span className="divider">|</span>
            <button>&#128172;</button>
        </div>
        )
    }

    return (
        <div className="footer">
            <div className="time">&#128339;{timeText}</div>
            <span className="divider">|</span>
            <div>{props.category}</div>
            {commentButton}
        </div>
    )
}