import React from "react";

export default function Antonyms(props) {
    console.log(props.antonyms);
    if (props.antonyms) {
        return (
            <ul className="Antonyms">
                {props.antonyms.map(function (antonym, index) {
                    return (
                        <li key={index}>
                            {antonym} (antonym)
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return null;
    }
}