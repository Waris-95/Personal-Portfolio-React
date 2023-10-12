import { useState, useEffect } from "react";

export default function Intro() {
    const [classes,setClasses] = useState('');
    useEffect(() => {  
        setClasses('visible');

    }, []);

    return (
        <section id="intro" className={classes}>
      <div>
      <p>I'm <span>Abdul Waris</span><br />Full-Stack Developer,<br /> And a code enthusiast</p>
        <a href="">Contact Me</a>
      </div>
      <div className="img-container">
    <img src="/img/Image 2.png" alt="Abdul Waris" />
</div>

    </section>
    );
}