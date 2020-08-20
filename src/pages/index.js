import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

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

          <ul className="">
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML | CSS</li>
            ----
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Git | Github</li>
          </ul>
        </section>

        <section id="one">
          <header className="major">
            <h2>About me</h2>
          </header>
          <p>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </p>
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
