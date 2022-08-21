import React from "react";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>
                {props.meaning.definitions[0].definition}
            </p>
            <p>
                {props.meaning.definitions[0].example}
            </p>
            <p>
                {props.meaning.definitions[0].synonyms}
            </p>
            <p>
                {props.meaning.definitions[0].antonyms[0]}
            </p>
        </div>
    )
}