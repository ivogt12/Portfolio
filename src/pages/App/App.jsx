// import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import './App.css';

const linkedin_icon_footer = require("../../data/linked_icon_footer.png");
const github_icon_footer = require("../../data/github_icon_footer.png");
const gmail_icon_footer = require("../../data/gmail_icon_footer.png");

function App() {

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/isaiahvogt/");
};

const handleGitHubClick = () => {
    window.open("https://www.github.com/ivogt12");
};

const handleGmailClick = () => {
    window.open("mailto:your_email@example.com");
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToSection = () => {
  const targetPortfolio = document.getElementById("featured_projects");
  targetPortfolio.scrollIntoView({ behavior: "smooth" });
}

  
  return (
    <Router>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <footer>
            <section class="footer_navBar">
                <Link onClick={scrollToTop} className="footer_links">to top</Link>
                <Link onClick={handleGitHubClick} className="footer_links">github</Link>
                <Link onClick={scrollToSection} className="footer_links">portfolio</Link>
                <Link to="/" className="footer_links">home</Link>
            </section>
            <section class="footer_icons">
                <img class="footer_icon" id="footer_linkedin_icon" src={ linkedin_icon_footer } alt="linkedin" onClick={ handleLinkedInClick } />
                <img class="footer_icon footer_middle_icon" id="footer_github_icons" src={ github_icon_footer } alt="github" onClick={ handleGitHubClick } />
                <img class="footer_icon" id="footer_gmail_icons" src={ gmail_icon_footer } alt="gmail" onClick={ handleGmailClick } />
            </section>
        </footer>
    </Router>
  );
}

export default App;
