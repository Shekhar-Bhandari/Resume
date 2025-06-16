import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Images
import jsLogo from "../../images/js.png";
import reactLogo from "../../images/react.png";
import nodeLogo from "../../images/node.png";
import expressLogo from "../../images/express.png";
import mongodbLogo from "../../images/mongodb.png";
import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import todoApp from "../../images/todoapp.jpg";
import hospital from "../../images/hospital.png";
import tailwind from "../../images/tail.png";
import ecoeye from "../../images/ecoeye.png";
import movie from '../../images/movie.png'
import imagehub from '../../images/imagehub.png'
const HomePage = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <div className="navbar">
        <Link className="link" to="./">Home</Link>
        
        <Link className="link" to="./contact">Contact</Link>
      </div>

      {/* Address */}
      <div className="address">
        <p>Based In Nepal</p>
      </div>

      {/* Intro */}
      <div className="quality">
        <p>
          Quality <span className="webdev">Design & Web <br /> Development</span> Synergy
        </p>
      </div>

      <div className="intro">
        <p>Hi! I am Shekhar Bhandari. I create intuitive, virtually stunning web apps.</p>
      </div>

      {/* Work Buttons */}
      <div className="work">
        <Link className="seemywork" to="https://github.com/Shekhar-Bhandari">See my work</Link>
        <Link className="arrow" to="./work">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
        <a
  className="download"
  href="/resume-new.pdf"
  target="_blank"
  download
>
  &nbsp;&nbsp;&nbsp;Download my CV
</a>

      </div>

      {/* Spacing */}
      <div style={{ margin: "100px 0" }}></div>

      {/* Current Technologies */}
      <div className="currenttechnology">
        <h1>Current Technologies</h1>
      </div>

      <p className="description">
        I am proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.
      </p>

      {/* Technologies Grid */}
      <div className="technologies">
        <div className="typescript"><img className="logo" src={jsLogo} alt="JavaScript" /><p>&nbsp;&nbsp;JavaScript</p></div>
        <div className="typescript"><img className="logo" src={reactLogo} alt="React" /><p>&nbsp;&nbsp;ReactJs</p></div>
        <div className="typescript"><img className="logo" src={nodeLogo} alt="Node.js" /><p>&nbsp;&nbsp;NodeJs</p></div>
        <div className="typescript"><img className="logo" src={expressLogo} alt="Express" /><p>&nbsp;&nbsp;ExpressJs</p></div>
      </div>

      <div className="technologies">
        <div className="typescript"><img className="logo" src={mongodbLogo} alt="MongoDB" /><p>&nbsp;&nbsp;MongoDB</p></div>
        <div className="typescript"><img className="logo" src={htmlLogo} alt="HTML" /><p>&nbsp;&nbsp;HTML</p></div>
        <div className="typescript"><img className="logo" src={cssLogo} alt="CSS" /><p>&nbsp;&nbsp;CSS</p></div>
        <div className="typescript"><img className="logo" src={tailwind} alt="Tailwind" /><p>&nbsp;&nbsp;Tailwind</p></div>
      </div>

      {/* Portfolio */}
      <div className="myPortfolio">
        <h1>My Portfolio</h1>
      </div>

      <div className="portfolio-grid">
        {/* Row 1 */}
        <div className="portfolio-item">
          <div className="project-container">
            <img className="projectImage" src={imagehub} alt="imagehub" />
            <p className="projectName"><Link to="https://imagehub-two.vercel.app/">Image Hub App</Link></p>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="project-container">
            <img className="projectImage" src={movie} alt="Movie" />
            <p className="projectName"><Link to="https://movie-platform-vzxj.vercel.app/">Movie Website</Link></p>
          </div>
        </div>

         {/* Row 2 */}
        <div className="portfolio-item">
          <div className="project-container">
            <img className="projectImage" src={hospital} alt="hospital" />
            <p className="projectName"><Link to="https://hospital-new-kappa.vercel.app/">Hospital Website</Link></p>
          </div>
        </div>
        
        <div className="portfolio-item">
          <div className="project-container">
            <img className="projectImage" src={ecoeye} alt="Eco Eye" />
            <p className="projectName"><Link to="https://eco-eye.vercel.app/">Eco-Eye</Link></p>
          </div>
        </div>

        

        

       

        
      </div>
    </div>
  );
};

export default HomePage;
