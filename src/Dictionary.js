import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    // function search() {
    //     // documentation: https://dictionaryapi.dev/
    //     let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //     axios
    //         .get(apiUrl)
    //         .then(response => {
    //             setResults(response.data[0], {
    //                 ready: true,
    //             });
    //         })
    //         .catch(error => {
    //             console.log("Error fetching data, ", error);
    //         });
    // }

    function handleKeyWordChange(event) {
        setKeyword(event.target.value);
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word is in your mind today?</h1>
                    <form onSubmit={handleSubmit}>
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
                            </div>
                            <div className="hint">
                                suggested words: cat, hello, house,...
                            </div>
                        </div>
                    </form>
                </section>
                <Results results={results} />
            </div>
        )
    } else {
        load();
        return "Loading";
    }
}