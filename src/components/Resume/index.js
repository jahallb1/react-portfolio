import React from "react";



function Resume() {
    return(
        <div>
            <h2> <a href={require('../../assets/documents/JoshHallResume.pdf')}>Resume</a></h2>

            <h3>Front End Languages</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>jQuery</li>
            </ul>
            <h3>Back End Languages</h3>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>SQL</li>
                <li>MongoDb</li>
            </ul>
        </div>
    );
}

export default Resume;