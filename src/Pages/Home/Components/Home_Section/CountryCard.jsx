import Card from "react-bootstrap/Card";
import './CountryCard.css';

function CountryCard({ country }) {
  return (
    <Card className="custom-shadow rounded-0 p-2 d-flex flex-row align-items-center">
      <Card.Img
        variant="top"
        src={country.flag}
        alt={country.name}
        style={{ width: 60, height: 40, objectFit: "cover" }}
        className="rounded-0 me-3"
      />

      <div>
        <Card.Body className="p-0">
          <Card.Title className="fw-semibold mb-1">{country.name}</Card.Title>
          <Card.Text className="mb-0">{country.region}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CountryCard;
