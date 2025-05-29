import { Row, Col, Container } from 'react-bootstrap';
import './Home_Header.css';
import FilterButtons from "./Home_Section/FilterButtons.jsx";
import CountryCarousel from './Home_Section/CountryCarousel.jsx';

function Home_Header() {
  return (
    <Container fluid>
      
      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <h6>Countries</h6>
        </Col>
        <Col xs="auto">
          <FilterButtons />
        </Col>
      </Row>

     
      <div className="welcome-container text-center my-3">
        
        <div className="d-flex d-md-none flex-column align-items-center">
          <hr className="custom-hr w-100 mb-2" />
          <span className="welcome-text">WELCOME</span>
          <hr className="custom-hr w-100 mt-2" />
        </div>

       
        <div className="d-none d-md-flex justify-content-center welcome-inline">
          <div className="flex-grow-1 d-flex align-items-start">
            <hr className="custom-hr hr-top" />
          </div>
          <span className="welcome-text mx-3 align-self-center">WELCOME</span>
          <div className="flex-grow-1 d-flex align-items-end">
            <hr className="custom-hr hr-bottom" />
          </div>
        </div>
      </div>

      
      <CountryCarousel />
    </Container>
  );
}

export default Home_Header;
