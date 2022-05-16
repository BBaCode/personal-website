import "./Footer.scss";
import email from "../../assets/email.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logos-parent">
        <div className="footer__logo-container">
          <a className="footer__logo" href="https://github.com/bbacode">
            <img className="footer__logo" alt="logo" src={github} />
          </a>
        </div>
        <div className="footer__logo-container">
          <a
            className="footer__logo"
            href="https://www.linkedin.com/in/brian-d-bassett/"
          >
            <img className="footer__logo" alt="logo" src={linkedin} />{" "}
          </a>
        </div>
        <div className="footer__logo-container">
          <a className="footer__logo" href="https://twitter.com/bbacodes">
            <img className="footer__logo" alt="logo" src={twitter} />{" "}
          </a>
        </div>
        <div className="footer__logo-container">
          <a className="footer__logo" href="mailto:brianbsstt@gmail.com">
            {" "}
            <img className="footer__logo" alt="logo" src={email} />{" "}
          </a>
        </div>
      </div>
      <div className="footer__text"></div>
    </div>
  );
}

export default Footer;
