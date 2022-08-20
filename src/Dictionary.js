import React from "react";

export default function Dictionary() {

    return (
        <div className="Dictionary">
            <form>
                <div className="row mt-4">
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Search for a word"
                            className="form-control"
                            autoFocus="on" />
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