import Card from "react-bootstrap/Card";
import './CountryCard.css'

function CountryCard({ country }) {
  return (
    <div>
      <div>
      
    <Card className="custom-shadow rounded-0" >
      <div className='d-flex pt-2'>
      <div>
      <Card.Img
      
        variant="top"
        src={country.flag}
        alt={country.name}
        style={{ height:80,  objectFit: "cover" }}
      className="rounded-0" />
      </div>
      <div>
      
      <Card.Body>
        <Card.Title className="fw-semibold">{country.name}</Card.Title>
        <Card.Text>{country.region}</Card.Text>
      </Card.Body>
      </div>
      </div>
    </Card>
    </div>

    </div>
  );
}

export default CountryCard;