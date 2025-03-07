import React from 'react';

function AboutMe({ description, age, color }) {
    return (
        <div>
            <h2>About Me</h2>
            <p>{description}</p>
            <p>Age: {age}</p>
            <p>favorite color: {color}</p>
        </div>
    );
}

export default AboutMe;