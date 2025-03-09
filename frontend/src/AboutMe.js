import React from 'react';

function AboutMe({ description, age, color, skills }) {
    return (
        <div>
            <h2>About Me</h2>
            <p>{description}</p>
            <p>Age: {age}</p>
            <p>favorite color: {color}</p>
            <h3>Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default AboutMe;