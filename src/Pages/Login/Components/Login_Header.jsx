import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login_Header.css';

function Login_Header() {
  return (
    <Container className="login-header-wrapper py-3">
      <Row>
        <Col>
          <h3 className="styled-header">
            Sign <span className="decorated-i-wrapper">
              <div className="line" />
              <div className="letter">I</div>
              <div className="line" />
            </span>n
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="new-user-text">
            <span>New user?</span>
            <span className="ms-2">
              <Link to="/" className="link-style">Create an account</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login_Header;
