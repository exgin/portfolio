import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

import netlify from '../assets/images/netlify.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faJs,
  faPython,
  faHtml5,
  faCss3,
  faGit,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon color="black" icon={faGithub} size="3x" />
const git = <FontAwesomeIcon color="black" icon={faGit} size="3x" />
const js = <FontAwesomeIcon color="black" icon={faJs} size="3x" />
const python = <FontAwesomeIcon color="black" icon={faPython} size="3x" />
const html = <FontAwesomeIcon color="black" icon={faHtml5} size="3x" />
const css = <FontAwesomeIcon color="black" icon={faCss3} size="3x" />
const node = <FontAwesomeIcon color="black" icon={faNode} size="3x" />
const react = <FontAwesomeIcon color="black" icon={faReact} size="3x" />

const HomeIndex = () => {
  const siteTitle = 'Samuel Reid Portfolio'
  const siteDescription = 'Samuel Reid Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Developments</h2>
          </header>
          <Gallery />
        </section>

        <section id="two">
          <h2>Skills</h2>

          <ul className="icons">
            <li>{js}</li>
            <li>{node}</li>
            <li>{react}</li>
            <li>{python}</li>
            <li>{html}</li>
            <li>{css}</li>
            <li>{git}</li>
            <li>{github}</li>
            <li>
              <img
                src="https://img.icons8.com/windows/32/000000/heroku.png"
                height="43px"
                width="43px"
                alt="heroku icon"
              />
            </li>
            <li>
              <img
                src={netlify}
                height="43px"
                width="43px"
                alt="netlify icon"
              />
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>About me</h2>
          <p>
            I'm a full stack developer from the Atlanta Metropolitan Area. After
            graduating with an AAS in Information Techonolgy, I started
            researching more into coding. Having a natural enjoyment of solving
            problems & expressing my creativity drew me closer to software
            engineering.
          </p>

          <p>
            I'm passionate about the code that is written, and the team members
            I interact with. I strongly believe that having communcation & a
            soild team is key in developing innovative projects. Also, I want to
            understand how the code is written or how a solution is formed,
            instead of just writing code just to write it.
          </p>

          <h2>Interests</h2>
          <ul className="icons">
            <li>coding</li>
            <li>building computers</li>
            <li>stocks</li>
            <li>fitness</li>
            <li>skateboarding</li>
            <li>football</li>
            <li>eating</li>
            <li>gaming</li>
          </ul>
        </section>

        <section id="four">
          <h2>Contact</h2>
          <p>Want to contact me? You can also do so here!</p>
          <div className="row">
            {/* ***Contact Form*** */}
            {/* <div className="8u 12u$(small)">
              <form method="post" action="mailto:exgin353@gmail.com">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div> */}
            <div>
              <span className="icon fa-envelope-o"> exgin3538@gmail.com</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
