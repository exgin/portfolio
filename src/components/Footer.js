import React from 'react'
import resume from '../assets/images/Reid_Samuel_Resume.pdf'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/sreid20/"
            className="icon fa-linkedin fa-2x"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/exgin" className="icon fa-github fa-2x">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href={resume} className="icon fa-file fa-2x">
            <span className="label">Github</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
