import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }

    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyword} definition`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     search();
    // }

    // function search() {
    //     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //     axios
    //         .get(apiUrl)
    //         .then(response => {
    //             const { word } = response.data;
    //             setKeyword({
    //                 ready: true,
    //                 word: word
    //             });
    //         })
    //         .catch(error => {
    //             console.log("Error fetching data, ", error);
    //         });
    // }

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <div className="row mt-4">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Search for a word"
                            className="form-control"
                            autoFocus="on"
                            onChange={handleKeyWordChange}
                        />
                    </div>
                    <div className="col-3">
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary w-100" />
                    </div></div>
            </form>
            <div className="meaning">
                {keyword.word}
            </div>
        </div>
    )
}