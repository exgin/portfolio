import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

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

const github = <FontAwesomeIcon icon={faGithub} size="3x" />
const git = <FontAwesomeIcon icon={faGit} size="3x" />
const js = <FontAwesomeIcon icon={faJs} size="3x" />
const python = <FontAwesomeIcon icon={faPython} size="3x" />
const html = <FontAwesomeIcon icon={faHtml5} size="3x" />
const css = <FontAwesomeIcon icon={faCss3} size="3x" />
const node = <FontAwesomeIcon icon={faNode} size="3x" />
const react = <FontAwesomeIcon icon={faReact} size="3x" />

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
        <section id="two">
          <h2>Projects</h2>

          <Gallery />

          <h3>Course Work</h3>

          <p>add course work here</p>
        </section>

        <section id="four">
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
              <img src="https://img.icons8.com/windows/32/000000/heroku.png" />
            </li>
            <li>Netlify</li>
          </ul>
        </section>

        <section id="one">
          <header className="major">
            <h2>About me</h2>
          </header>
          <p>add about me</p>
        </section>

        <section id="three">
          <h2>Contact</h2>
          <p>Want to contact me? Do so here!</p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
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
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">exgin3538@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
