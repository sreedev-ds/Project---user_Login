import Carousel from "react-bootstrap/Carousel";
import './CountryCarousel.css';

const slides = [
  {
    title: "Asia",
    image: "/Assets/Asia_Images.png"
  },
  {
    title: "Europe",
    image: "/Assets/Europe_Images.jpg"
  },
  {
    title: "Africa",
    image: "/Assets/Africa_Images.jpg"
  }
];

function CountryCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="custom-carousel"
        indicators={true}
        controls={true}
        interval={3000}
        slide={true}
        touch={true}
        fade={false}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="carousel-slide">
              <div className="carousel-main me-2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="img-fluid rounded slide-image"
                />
              </div>
              <div className="carousel-preview">
                <img
                  src={slides[(idx + 1) % slides.length].image}
                  alt={slides[(idx + 1) % slides.length].title}
                  className="img-fluid rounded slide-image"
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CountryCarousel;
