import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
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
            <Results results={results} />
        </div>
    )
}