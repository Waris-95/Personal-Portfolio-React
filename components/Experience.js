export default function Experience() {
    return (
        <section id="experience">
            <div className="center">
                <h2>Experience</h2>
                <div className="timeline">
                    <div className="item">
                        <time className="date"><span className="year">2023</span><span className="arrow"></span></time>
                        <div className="separator">
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <figure className="texts">
                            <h3>Student</h3>
                            <h4>App Academy</h4>
                            <figcaption>Currently undertaking a comprehensive Full-Stack development program at App Academy, a highly esteemed institution with a rigorous selection process that accepts less than 5% of its applicants.</figcaption>
                        </figure>
                    </div>
                    <div className="item">
                        <time className="date"><span className="year">2021</span><span className="arrow"></span></time>
                        <div className="separator">
                            <div className="dot"></div>
                            <div className="line"></div>
                        </div>
                        <figure className="texts">
                            <h3>Front-End Developer</h3>
                            <h4>Freelance, remote</h4>
                            <figcaption>Collaborated with several clients on Upwork, providing Front-End Development services utilizing HTML, CSS, and JavaScript.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
