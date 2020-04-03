import React from "react";
import ReactDom from "react-dom";

function TaskOne() {
    return (
        <article>
            <h1>Yo Y'all</h1>
            <p>Coronavirus is terrible. But I would like to find some possitives from all of this.
                Here are just a few off the top of my head:
            </p>
            <ul>
                <li>We are all getting more time with family,</li>
                <li>The governments arount the world are valuing their citizens more,</li>
                <li>Everyone has a little bit more time to slow down and maybe even learn a new skill, like React!</li>
            </ul>
        </article>)
}

ReactDom.render(<TaskOne/>, document.getElementById("root")
);


export default TaskOne;
