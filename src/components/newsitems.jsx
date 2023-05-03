import React from "react";
import './newsitems.css';

function Newsitems(props){
    return(
        <div className="boxx">
            <img src={props.imageUrl}/>
            <h5>{props.tittle}...</h5>
            <span>{props.desc}...</span>
            <a href={props.newsUrl}>Continue Reading</a>
        </div>
    );
}

export default Newsitems;