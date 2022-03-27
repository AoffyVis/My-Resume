import './Skills.css';
import HTML from "../assets/icon/htmlLogo.png";
import CSS from "../assets/icon/CssLogo.png";
import JS from "../assets/icon/JSLogo.png";
import XD from "../assets/icon/xd-logo.png";
import React from "../assets/icon/ReactLogo.png";
import exJS from "../assets/icon/expressJS.png";
import nodeJS from "../assets/icon/nodeLogo.png";
import SQL from "../assets/icon/sqlLogo.png";

function Skills() {
  return (
    <div className="skillsContainer" id='skillsContainer'>
        <div>
            <h2>My Skills</h2>
        </div>
        <div className="gridFrontSkills">
            <div className="Skill">
                <img src={HTML} alt="html"/>
                <p>Responsive</p>
                <p>Your site looks good everywhere</p>
            </div>
            <div className="Skill">
                <img src={CSS} alt="css"/>
                <p>Customizable</p>
                <p>Easy to theme and customize with CSS</p>
            </div>
            <div className="Skill">
                <img src={JS} alt="js"/>
                <p>Consistent</p>
                <p>A mature, well-tested, stable codebase</p>
            </div>
            <div className="Skill">
                <img src={XD} alt="xd"/>
                <p>Design as imagined</p>
                <p>Wireframe, animate, prototype</p>
            </div>
        </div>
        <div className="gridBackEndSkill">
            <div className="Skill">
                <img src={React} alt="react"/>
                <p>React JS</p>
            </div>
            <div className="Skill">
                <img src={exJS} alt="express"/>
                <p>Express JS</p>
            </div>
            <div className="Skill">
                <img src={nodeJS} alt="node"/>
                <p>Node JS</p>
            </div>
            <div className="Skill">
                <img src={SQL}
                    alt="sql"/>
                <p>SQL SERVER</p>
            </div>
        </div>
    </div>
  );
}

export default Skills;
