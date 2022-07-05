import "./Skills.css"
import React from 'react'

function Skills() {
  return (
    <div className="skills" id="skills">

        {/* TITLE CONTAINER */}
        <div className="title">
          <h1>My Skills</h1>
          <p>Based on built projects</p>
        </div>

        <div className="skill-wrap">

          {/* FRONT END CONTAINER */}
          <div className="front-end">
            <h1>Client Side</h1>
            <div className="skill">
              <h2>React</h2>
              <div className="progress-bar">
                <div className="progress a"></div>
              </div>
            </div>
            <div className="skill">
              <h2>HTML/CSS</h2>
              <div className="progress-bar">
                <div className="progress b"></div>
              </div>
            </div>
            <div className="skill">
              <h2>JavaScript</h2>
              <div className="progress-bar">
                <div className="progress c"></div>
              </div>
            </div>
            <div className="skill">
              <h2>Bootstrap</h2>
              <div className="progress-bar">
                <div className="progress d"></div>
              </div>
            </div>
          </div>

          {/* BACK END CONTAINER */}
          <div className="back-end">
            <h1>Server Side</h1>
            <div className="skill">
              <h2>Node</h2>
              <div className="progress-bar">
                <div className="progress e"></div>
              </div>
            </div>
            <div className="skill">
              <h2>Mongo DB</h2>
              <div className="progress-bar">
                <div className="progress f"></div>
              </div>
            </div>
            <div className="skill">
              <h2>Express</h2>
              <div className="progress-bar">
                <div className="progress g"></div>
              </div>
            </div>
            <div className="skill">
              <h2>Firebase</h2>
              <div className="progress-bar">
                <div className="progress h"></div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Skills
