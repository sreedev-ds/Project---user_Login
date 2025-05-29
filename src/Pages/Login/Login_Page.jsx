import Login_LeftPage from './Components/Login_LeftPage';
import Login_RightPage from './Components/Login_RightPage';
import { Container, Row, Col } from 'react-bootstrap';
import './Login_Page.css';

function Login_Page() {
  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <Login_LeftPage />
        </Col>

        
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center"
        >
          <Login_RightPage />
        </Col>
      </Row>
    </Container>
  );
}

export default Login_Page;
