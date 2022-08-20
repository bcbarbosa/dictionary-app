import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`We are searching here... your word was ${keyword} right?`);
    }

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
        </div>
    )
}