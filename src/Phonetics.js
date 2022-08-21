import React from "react";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <span className="text">{props.phonetic.text}</span>
            <span><a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a></span>
        </div>
    );
}