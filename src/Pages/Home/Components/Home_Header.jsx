import {Row, Col, Button} from 'react-bootstrap'
import './Home_Header.css'


function Home_Header() {
  return (
    <div>
        <div className='d-flex flex-row justify-content-between'>
        <div>
            <h6>
                Countries
            </h6>
        </div>
        <div>
 <Button variant="light" className="btn-transparent">All</Button>
<Button variant="light" className="btn-transparent">Asia</Button>
<Button variant="light" className="btn-transparent">Europe</Button>
        </div>



        </div>
        <div className='text-center my-3'>
        <Row className='align-items-center'>
            <Col className="pt-1 mt-0">
            
                <hr  className='mt-0 mb-3 custom-hr'/>
            </Col>
            <Col  xs='auto'>
            <span >WELCOME</span>

            </Col>

            <Col  className='pt-1'>
            <hr className='mt-2 custom-hr'/>
            </Col>



        </Row>

        
        </div>

        
    </div>
  )
}

export default Home_Header