import "./Intro.css"
import React, { useEffect } from 'react'
import anime from "./anime-master"

function Intro() {

  function activateTask() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('ok');
      }, 300);
    });
  }

  useEffect(() => {
    async function launch() {
      const result = await activateTask();
      let path = anime.path("#a-route path")
      anime({
        targets: "#star",
        translateX: path("x"),
        translateY: path("y"),
        easing: "linear",
        rotate: path("angle"),
        duration: 15000,
        loop: true
      })
    }

    launch();
  })

  return (
    <div className="intro">
      <video autoPlay muted loop>
        <source src="vid1.mp4" type="video/mp4" />
      </video> 
      <div className="content">
        <h1>Hello, I am Nadir</h1>
        <h2>Web Developer</h2>
        <p>I've worked with various web applications</p>
        <p>Always keen to improving myself</p>
      </div>
      <div className="animation" id="moving-target">
        <div id="star">⭐️</div>
        <svg id="a-route" width="660" height="600">
          <path className="star-route" fill="none" d="M 196 282 L 197 260 A 50 50 0 1 1 205 246 L 217 235 A 50 50 0 1 1 233 227 L 249 223 A 50 50 0 1 1 267 225 L 283 236 A 50 50 0 1 1 294 250 L 299 268 A 50 50 0 1 1 299 287 L 294 305 A 50 50 0 1 1 281 318 L 263 323 A 50 50 0 1 1 247 323 L 226 320 A 50 50 0 1 1 211 312 L 201 295 A 50 50 0 1 1 196 280 " />
        </svg>
      </div>
    </div>
  )
}

export default Intro
