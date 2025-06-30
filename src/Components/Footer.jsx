import { FaFacebook , FaGithub  , FaLinkedin  } from "react-icons/fa";


function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="https://www.facebook.com" target="_blank"><FaFacebook /></a>
              <a href="https://github.com" target="_blank"><FaGithub /></a>
              <a href="https://www.linkedin.com" target="_blank"><FaLinkedin /></a>
            </div>
          </div>

          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>IOS &amp; Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer