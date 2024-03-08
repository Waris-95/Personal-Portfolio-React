import Image from 'next/image';


import { useState, useEffect } from "react";

export default function Intro() {
    const [classes, setClasses] = useState('');

    useEffect(() => {  
        setClasses('visible');
    }, []);

    return (
        <section id="intro" className={classes}>
            <div>
            <p>I&apos;m <span>Abdul Waris</span><br />Full-Stack Developer,<br /> And a code enthusiast</p>
            
                <a href="#contact">Contact Me</a> {/* Pointing it to a contact section, adjust as necessary */}
            </div>
            <div className="img-container">

<Image src="/img/Subject.png" alt="Abdul Waris" width={200} height={20} />


            </div>
        </section>
    );
}
// 285 and 294 x