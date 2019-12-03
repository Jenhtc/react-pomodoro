import React from "react";

function SessionLength(props) {
    function increaseSession() {
        if (props.sessionLength === 60) {
            return;
        }
        props.increaseSession();
    }

    function decreaseSession() {
        if (props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }
    return (
        <section>
            <h3>Work!</h3>
            <section className="interval-container">
                <button onClick={decreaseSession}>Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button onClick={increaseSession}>Up</button>
            </section>
        </section>
    );
}

export default SessionLength;
