import "./Projects.css"
import React from 'react'

function Projects() {
  return (
    <div className="projects" id="projects">
        <div className="header">
          <h1>My Work</h1>
          <p>Click the project to see it</p>
        </div>

        <div className="projects-wrapper">

          {/* line one */}
          <div className="project-line one">

            <div className="project" onClick={event => window.open("https://usermade-instagram.web.app/", "_blank")}>
              <div className="pic social"></div>
              <h3>Social-Media</h3>
            </div>

            <div className="project" onClick={event => window.open("https://e-commerce1-ae557.web.app/", "_blank")}>
              <div className="pic ecom"></div>
              <h3>E-commerce</h3>
            </div>

            <div className="project" onClick={event => window.open("https://nadir-karimov.web.app", "_blank")}>
              <div className="pic port"></div>
              <h3>Simple Portfolio</h3>
            </div>

          </div>

          {/* line two https://nadir-karimov.web.app/*/}
          <div className="project-line two">

            <div className="project" onClick={event => window.open("https://usermade-messenger.web.app", "_blank")}>
              <div className="pic mess"></div>
              <h3>Messenger UI</h3>
            </div>

            <div className="project" onClick={event => window.open("https://superb-khapse-8ab265.netlify.app", "_blank")}>
              <div className="pic docm"></div>
              <h3>Documentation</h3>
            </div>

            <div className="project" onClick={event => window.open("https://celebrated-monstera-f1451c.netlify.app", "_blank")}>
              <div className="pic prm"></div>
              <h3>Promotion</h3>
            </div>

          </div>

          {/* line three */}
          <div className="project-line three">

            <div className="project">
              <div className="pic calc"></div>
              <h3>Calculator</h3>
            </div>

            <div className="project">
              <div className="pic trb"></div>
              <h3>Tribute Page</h3>
            </div>

            <div className="project" onClick={event => window.open("https://bucolic-sopapillas-e44e36.netlify.app/", "_blank")}>
              <div className="pic srv"></div>
              <h3>Survey</h3>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Projects
