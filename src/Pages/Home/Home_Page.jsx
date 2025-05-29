import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Services/countryService";
import { setCountries } from "../../redux/countrySlice";

import Home_Footer from './Components/Home_Footer.jsx';
import Home_Header from "./Components/Home_Header.jsx";
import CountryCard from "./Components/Home_Section/CountryCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.country.all);
  const selectedRegion = useSelector((state) => state.country.region);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      dispatch(setCountries(data));
    };
    fetchCountries();
  }, [dispatch]);

  const filtered = allCountries.filter(
    (c) => selectedRegion === "All" || c.region === selectedRegion
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <Container fluid className="px-3 px-md-5 py-2">
     
      <header>
        <Home_Header />
      </header>

      
      <main className="py-3">
        <Row className="g-3 mt-3">
          {filtered.slice(0, visibleCount).map((country, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <CountryCard country={country} />
            </Col>
          ))}
        </Row>

     
        {visibleCount < filtered.length && (
          <div className="text-center mt-4">
            <Button onClick={handleLoadMore} variant="dark" className="rounded-0">
              Load More
            </Button>
          </div>
        )}
      </main>

     
      <footer className="mt-4">
        <Home_Footer />
      </footer>
    </Container>
  );
}

export default Home;
