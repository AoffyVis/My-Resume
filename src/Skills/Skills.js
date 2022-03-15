import './Skills.css';

function Skills() {
  return (
    <div className="skillsContainer" id='skillsContainer'>
        <div>
            <h2>My Skills</h2>
        </div>
        <div className="gridFrontSkills">
            <div className="Skill">
                <img src="/htmlLogo.png" alt="html"/>
                <p>Responsive</p>
                <p>Your site looks good everywhere</p>
            </div>
            <div className="Skill">
                <img src="/CssLogo.png" alt="css"/>
                <p>Customizable</p>
                <p>Easy to theme and customize with CSS</p>
            </div>
            <div className="Skill">
                <img src="/JSLogo.png" alt="js"/>
                <p>Consistent</p>
                <p>A mature, well-tested, stable codebase</p>
            </div>
            <div className="Skill">
                <img src="/xd-logo.png" alt="xd"/>
                <p>Design like you always imagined</p>
                <p>Wireframe, animate, prototype, collaborate, and more</p>
            </div>
        </div>
        <div className="gridBackEndSkill">
        <div className="Skill">
                <img src="/reactLogo.png" alt="react"/>
                <p>React JS</p>
            </div>
            <div className="Skill">
                <img src="/express-logo.png" alt="express"/>
                <p>Express JS</p>
            </div>
            <div className="Skill">
                <img src="/nodeLogo.png" alt="node"/>
                <p>Node JS</p>
            </div>
            <div className="Skill">
                <img src="/sqlLogo.png"
                    alt="sql"/>
                <p>SQL SERVER</p>
            </div>
        </div>
    </div>
  );
}

export default Skills;
