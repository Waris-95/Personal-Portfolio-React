import { useState } from "react";
import Image from 'next/image';

export default function Skills() {
    const [extraClasses, setExtraClasses] = useState('');

    return (
        <section id="skills">
            <div className="center">
                <h2>Skills</h2>
                <div className={`skills-container ${extraClasses}`}>
                    <div className="skill-box"><Image src="/img/javascript.png" alt="Javascript Logo" width={50} height={50} /><span>Javascript</span></div>
                    <div className="skill-box"><Image src="/img/html.png" alt="HTML Logo" width={50} height={50} /><span>HTML</span></div>
                    <div className="skill-box"><Image src="/img/css-3.png" alt="CSS Logo" width={50} height={50} /><span>CSS</span></div>
                    <div className="skill-box"><Image src="/img/database.png" alt="SQLite Logo" width={50} height={50} /><span>SQLite</span></div>
                    <div className="skill-box"><Image src="/img/python.png" alt="Python Logo" width={50} height={50} /><span>Python</span></div>
                    <div className="skill-box"><Image src="/img/react.png" alt="React Logo" width={50} height={50} /><span>React</span></div> {/* Assuming the correct image for React should be `react.png` */}
                    <div className="skill-box"><Image src="/img/nodejs.png" alt="Node.js Logo" width={50} height={50} /><span>Node.js</span></div>
                    <div className="skill-box"><Image src="/img/java.png" alt="Java Logo" width={50} height={50} /><span>Java</span></div>
                </div>
            </div>
        </section>
    );
}
