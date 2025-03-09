import React, { useState } from 'react';

function AboutMe({ description, age, color, skills }) {
    const [showSkills, setShowSkills] = useState(true);

    return (
        <div>
            <h2>About Me</h2>
            <p>{description}</p>
            <p>Age: {age}</p>
            <p>favorite color: {color}</p>

            <button onClick={() => setShowSkills(!showSkills)}>
                {showSkills ? "banana" : "strawberry"}
            </button>
            
            {showSkills && skills.length > 0 && (
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill.name} - {skill.experience}</li>
                    ))}
                </ul>
            )}
            {showSkills && skills.length === 0 && <p>No Skills Added Yet.</p>}
         
        </div>
    );
}

export default AboutMe;