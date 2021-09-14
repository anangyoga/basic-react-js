import React from "react";
import './YouTubeCom.css'

const YouTubeCom = (props)=>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" srcset="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeCom.defaultProps = {
    time: '00.00',
    title: 'Undefined Title',
    desc: 'descriptions text'
}

export default YouTubeCom