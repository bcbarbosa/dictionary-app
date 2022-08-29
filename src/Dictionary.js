import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Photos from "./Photos";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001ee5f1c6b80aa4b2f8e1e87721cabb45c";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=10`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }
        axios
            .get(pexelsApiUrl, {
                headers: headers
            })
            .then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

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
                                Suggested words: cat, hello, house,...
                            </div>
                        </div>
                    </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        )
    } else {
        load();
        return "Loading";
    }
}