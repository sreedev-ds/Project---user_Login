import { Row, Col } from "react-bootstrap";
import './Home_Footer.css'

function Home_Footer() {
  return (
<div className='d-flex flex-column align-items-center'>        <div>      
        <Row className="justify-content-center my-3">
      <Col xs="auto">
        <div className="social-circle">
          <svg viewBox="0 0 24 24" className="social-icon">
            <path d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.27-.93 2.35-1.97 3.08v2.56h3.18c1.86-1.72 2.93-4.26 2.93-7.22 0-.61-.05-1.21-.14-1.78z" />
            <path d="M12.17 22c2.52 0 4.64-.83 6.18-2.26l-3.18-2.56c-.88.59-2.01.94-3 .94-2.3 0-4.25-1.55-4.95-3.64H4v2.28C5.53 19.98 8.61 22 12.17 22z" />
            <path d="M7.22 14.48A5.986 5.986 0 016.8 12c0-.85.16-1.66.42-2.48V7.24H4A9.984 9.984 0 002 12c0 1.65.4 3.22 1.1 4.6l3.12-2.12z" />
            <path d="M12.17 6.24c1.38 0 2.63.47 3.61 1.39l2.68-2.68C16.8 2.93 14.68 2 12.17 2 8.61 2 5.53 4.02 4 6.76l3.22 2.28c.7-2.09 2.65-3.64 4.95-3.64z" />
          </svg>
        </div>
      </Col>

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
            <path d="M4.98 3.5c0 1.38-1.1 2.5-2.49 2.5A2.5 2.5 0 012.5 1a2.5 2.5 0 012.48 2.5zM2 8h4v12H2zm6 0h4v1.56h.06c.56-1 1.95-2.06 4.02-2.06 4.3 0 5.1 2.83 5.1 6.51V20h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V20H8z" />
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
    </Row>
    </div>
    <div>
        <p>Example@email.com</p>
    </div>
    <div>

       <small>Copyright © 2020 Name.All rights reserved.</small> 
    </div>
    </div>
        

  )
}

export default Home_Footer