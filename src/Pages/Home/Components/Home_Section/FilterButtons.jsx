import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../../../redux/countrySlice";
import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const regions = ["All", "Asia", "Europe"];

function FilterButtons() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.country.region);
  const [show, setShow] = useState(false);

  const toggleOffcanvas = () => setShow(!show);
  const closeOffcanvas = () => setShow(false);

  return (
    <>
      
      <Navbar expand="sm" className="d-sm-none mb-3">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="offcanvasFilter"
            onClick={toggleOffcanvas}
            style={{ border: "none" }}
          />
        </Container>
      </Navbar>

     
      <Offcanvas
        show={show}
        onHide={closeOffcanvas}
        placement="start"
        id="offcanvasFilter"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter by Region</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ButtonGroup vertical>
            {regions.map((region) => (
              <Button
                key={region}
                className={`filter-btn ${selected === region ? "active" : ""} mb-2`}
                onClick={() => {
                  dispatch(setRegion(region));
                  closeOffcanvas();
                }}
                variant="none"  
              >
                {region}
              </Button>
            ))}
          </ButtonGroup>
        </Offcanvas.Body>
      </Offcanvas>

     
      <div className="d-none d-sm-flex justify-content-center gap-4 mt-3">
        {regions.map((region) => (
      

<Button
  key={region}
  className={`filter-btn ${selected === region ? "active" : ""}`}
  onClick={() => dispatch(setRegion(region))}
  variant="link"
  style={{ outline: "none", boxShadow: "none" }}
>
  {region}
</Button>




        ))}
      </div>
    </>
  );
}

export default FilterButtons;
