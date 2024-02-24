import { Link } from "react-router-dom"

const headshot = require("../../data/headshot.jpg");
const linkedin_icon = require("../../data/linkedin_icon2.png");
const github_icon = require("../../data/github_icon.png");
const gmail_icon = require("../../data/gmail_icon.png");



const musegig = require("../../data/musegig.png");
const mancala = require("../../data/Mancala.png");

export default function Home()

{

const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/isaiahvogt/");
};

const handleGitHubClick = () => {
    window.open("https://www.github.com/ivogt12");
};

const handleGmailClick = () => {
    window.open("mailto:your_email@example.com");
};

const scrollToSection = () => {
    const targetPortfolio = document.getElementById("featured_projects");
    targetPortfolio.scrollIntoView({ behavior: "smooth" });
  }


  const DownloadLink = ({ href, fileName }) => {
    const handleDownload = () => {
      fetch(href)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.error("Error downloading file:", error));
    };

    return (
      <Link class="home_l_butt" id="home_resume_button" onClick={handleDownload}>
        Download Resume
      </Link>
    );
  };

    return (
        <>
        <section className="home" >
            <section className="home_item left">
                <div className="left_titles">
                    <h1 className="left_childs" id="home_title">Isaiah Vogt</h1>
                    <h2 className="left_childs" id="home_subtitle">Software Engineer</h2>
                </div>
                <div  className=" left_childs home_left_buttons" >
                    <Link onClick={scrollToSection} class="home_l_butt" id="home_featured_projects_button">Featured Projects</Link>
                    <DownloadLink class="home_l_butt" id="home_resume_button" href="../data/ProfessionalResume.pdf" fileName="ProfessionalResume.pdf" />
                </div>
            </section>
            <section className="home_item headshot">
                <img id="home_headshot" src={headshot} alt="isaiahvogt's headshot" />
            </section>
            <section className="home_item right">
                <img class="home_icons" id="home_linkedin_icon" src={linkedin_icon} alt="linkedin icon" onClick={ handleLinkedInClick } />
                <img class="home_icons" id="home_github_icon" src={github_icon} alt="github icon" onClick={ handleGitHubClick}  />
                <img class="home_icons" id="home_gmail_icon" src={gmail_icon} alt="gmail icon" onClick={ handleGmailClick } />
            </section>
        </section>

        <section className="featured_projects" id="featured_projects">
            <h1 id="home_second_title" >Featured Projects</h1>
            <div class="featured-project">
                <div class="project-image">
                    <img class="feat_proj_wf" src={ musegig } alt="MuseGig" />
                </div>
                <div class="project-info">
                    <h2 class="feat_proj_titles">MuseGig</h2>
                    <p>Discover and support gigs for musicians.<br />Create, customize, and manage your posted gigs.</p>
                    <div className="project_info_bottom feat_proj_skills" id="MuseGig_skills">Node.js • Express • MongoDB • CSS • HTML • Heroku</div>
                    <a className="feat_proj_github_links" href="https://github.com/ivogt12/MuseGig">github</a>
                </div>
                
                </div>

                <div class="featured-project feat_proj_bottom">
                <div class="project-image">
                    <img class="feat_proj_wf" src={ mancala } alt="Mancala" />
                </div>
                <div class="project-info">
                    <h2 class="feat_proj_titles">Mancala Browser Game</h2>
                    <p>Experience the classic board game of Mancala<br /> in your browser! Play against friends and become<br /> a Mancala master today!</p>
                    <div className="project_info_bottom feat_proj_skills">JavaScript • HTML • CSS • Github Pages</div>
                    <a className="feat_proj_github_links"  href="https://github.com/ivogt12/Mancala-Browser-Game">github</a>
                </div>
                
           
            </div>
        </section>

        
        </>
    )
}