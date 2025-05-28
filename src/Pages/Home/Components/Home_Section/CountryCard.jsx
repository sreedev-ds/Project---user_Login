import Card from "react-bootstrap/Card";

function CountryCard({ country }) {
  return (
    <Card className="mb-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={country.flag}
        alt={country.name}
        style={{ height: "160px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>{country.region}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;