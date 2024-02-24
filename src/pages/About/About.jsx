export default function About()
{
    return (
        <main className="about">
            <h1 className="about_title1">About Me</h1>
            <div className="about_top">
                <section className="about_left">
                    <p className="left_top">Hi, my name is Isaiah Vogt.<br />I am a fullstack software engineer and student<br />at CSU, Fullerton, 
                        with a concentration in <br />cybersecurity. I enjoy keeping myself busy with<br />web development 
                        projects and thrive working<br />on complex problems. Check out a showcase<br />of my skills and programs I have worked on.
                    </p>
                    <p className="left_bottom">When I am not at school or programming, I enjoy<br />playing guitar and saxophone.</p>

                </section>

                <section className="about_right">
                    <h2 className="about_title2">Education</h2>
                    <div className="right_top"><b>B.S. Computer Science</b><br />CSUF<br />Grad. Spring 2025</div>
                    <div className="right_bottom"><b>Software Engineering Immersive</b><br />General Assembly<br />Completed March 2023</div>
                </section>
            </div>

            <section className="about_bottom">
                <h2 className="about_title3">Skills</h2>
                <p>C++/C • JavaScript • Python • HTML •<br />CSS • React • Express • Node.js •<br />MongoDB • PostgreSQL •<br />
                    Mongoose • GitHub • Git • Linux • Heroku
                </p>
            </section>
        </main>
    )
}