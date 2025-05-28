// import Home_Footer from './Components/Home_Footer.jsx'
// import Home_Header from './Components/Home_Header.jsx'
// // import Home_Section from './Components/Home_Section.jsx'

// function Home_Page() {
//   return (
//     <div className = " mx-5 my-3 d-flex flex-column min-vh-100">
//       <div>
//           <header>
//               <Home_Header/>

//           </header>
//       </div>
//       <div className="flex-grow-1">
         
//         <section className="h-100">
//           {/* <Home_Section/> */}
//         </section>
      
//       </div>
//       <div>
//           <footer>
//           <Home_Footer/>
//           </footer>

//       </div>
//     </div>
//   )
// }

// export default Home_Page


// src/pages/Home.js
import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Services/countryService.jsx";
import { setCountries } from "../../redux/countrySlice.jsx";
import CountryCard from "./Components/Home_Section/CountryCard.jsx";
import FilterButtons from "./Components/Home_Section/FilterButtons.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.country.all);
  const selectedRegion = useSelector((state) => state.country.region);
  const [visibleCount, setVisibleCount] = useState(12);

  const loaderRef = useRef(null);

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

  const loadMore = useCallback(() => {
    if (visibleCount < filtered.length) {
      setVisibleCount((prev) => prev + 12);
    }
  }, [visibleCount, filtered.length]);

  // Lazy loading logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loadMore]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Country Browser</h2>

      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h5>WELCOME</h5>
        <FilterButtons />
      </div>

      <Row className="g-3">
        {filtered.slice(0, visibleCount).map((country, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>

      <div ref={loaderRef} style={{ height: "50px" }} />

      <footer className="text-center mt-5">
        <div className="d-flex justify-content-center gap-3 mb-2">
          <i className="fa fa-google border p-2 rounded-circle"></i>
          <i className="fa fa-facebook border p-2 rounded-circle"></i>
          <i className="fa fa-linkedin border p-2 rounded-circle"></i>
          <i className="fa fa-twitter border p-2 rounded-circle"></i>
        </div>
        <p>example@email.com</p>
      </footer>
    </Container>
  );
}

export default Home;
