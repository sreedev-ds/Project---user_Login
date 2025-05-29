import { Row, Col } from "react-bootstrap";


function Home_Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center '>
      <div>
        <Row className="justify-content-center my-1">
         

          <Col xs="auto">
            <div className="social-circle">
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M15 2h-3c-1.7 0-3 1.3-3 3v3H6v4h3v10h4V12h3.3l.7-4h-4V5c0-.3.2-1 1-1h3V2z" />
              </svg>
            </div>
          </Col>

          

          <Col xs="auto">
            <div className="social-circle">
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M22 5.92a8.4 8.4 0 01-2.47.71 4.28 4.28 0 001.88-2.38 8.37 8.37 0 01-2.8 1.05A4.28 4.28 0 0012.33 8c0 .34.04.66.11.98a12.14 12.14 0 01-8.79-4.45 4.28 4.28 0 001.33 5.7A4.24 4.24 0 012 9.3v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07A4.29 4.29 0 008 18.22a8.6 8.6 0 01-5.33 1.84A12.09 12.09 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0022 5.92z" />
              </svg>
            </div>
          </Col>
          <Col xs="auto">
            <div className="social-circle">
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M4.98 3.5c0 1.38-1.1 2.5-2.49 2.5A2.5 2.5 0 012.5 1a2.5 2.5 0 012.48 2.5zM2 8h4v12H2zm6 0h4v1.56h.06c.56-1 1.95-2.06 4.02-2.06 4.3 0 5.1 2.83 5.1 6.51V20h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V20H8z" />
              </svg>
            </div>
          </Col>
           <Col xs="auto">
            <div className="social-circle">
             
              <svg viewBox="0 0 24 24" className="social-icon">
                <path d="M19.6 3H4.4C3.08 3 2 4.08 2 5.4v13.2C2 19.92 3.08 21 4.4 21h15.2c1.32 0 2.4-1.08 2.4-2.4V5.4C22 4.08 20.92 3 19.6 3zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{margin:0}}>
        <p style={{margin:0}}>Example@email.com</p>
      </div>
      <div style={{margin:0}}>
        <small>Copyright © 2020 Name. All rights reserved.</small>
      </div>
    </div>
  );
}

export default Home_Footer;