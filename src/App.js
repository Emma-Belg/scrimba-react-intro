import React from 'react';
import Footer from "./Footer";
import TaskOne from "./task1.js";

function App() {
    return (
        (
            <div>
                <ul>
                    <li>React is awesome</li>
                    <li>I am learning</li>
                    <li>Thanks to Scrimba</li>
                </ul>

              <TaskOne/>
              <Footer/>
            </div>
        )
    );
}

export default App;

