import React from "react";
import { Container } from "react-bootstrap";
import GithubLogo from "../img/github-logo.png";
import "./Footer.css";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer d-flex align-items-center">
      <Container className="text-center">
        <div className="d-inline-flex align-items-center">
          <a
            href="https://github.com/Zubrah"
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img src={GithubLogo} height="25" alt="GitHub Source" />
            <span className="ml-2">Source</span>
          </a>
          <span className="ml-2">•</span>
          
          <span className="ml-2">•</span>
          <span className="ml-2">
            <a href="https://zubeirmsemo.me"> Profile</a>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
