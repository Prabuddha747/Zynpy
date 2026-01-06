import './Footer.css'

const Footer = () => {
  return (
    <footer id="support" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Zynpy</h3>
            <p className="footer-tagline">
              Plan together. Pool money. Pay without stress.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#for-hosts">For Hosts</a></li>
              <li><a href="#transparency">Transparency</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#support">Help Center</a></li>
              <li><a href="#support">Contact Us</a></li>
              <li><a href="#support">FAQs</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#support">Privacy Policy</a></li>
              <li><a href="#support">Terms of Service</a></li>
              <li><a href="#support">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Zynpy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

