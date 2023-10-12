import { useState } from "react";

export default function Skills() {
    const [extraClasses, setExtraClasses] = useState('');
    return (
        <section id="skills">
            <div className="center">
                <h2>Skills</h2>
                <div className={extraClasses + "skills-container " + extraClasses}>
                    <div className="skill-box"><img src="/img/javascript.png" alt=""/><span>Javascript</span></div>
                    <div className="skill-box"><img src="/img/html.png" alt=""/><span>HTML</span></div>
                    <div className="skill-box"><img src="/img/css-3.png" alt=""/><span>CSS</span></div>
                    <div className="skill-box"><img src="/img/database.png" alt=""/><span>SQLite</span></div>
                    <div className="skill-box"><img src="/img/python.png" alt=""/><span>Python</span></div>
                    <div className="skill-box"><img src="/img/physics.png" alt=""/><span>React</span></div>
                    <div className="skill-box"><img src="/img/nodejs.png" alt=""/><span>Node.js</span></div>
                    <div className="skill-box"><img src="/img/java.png" alt=""/><span>Java</span></div>
                </div>
            </div>
        </section>
    );
}
