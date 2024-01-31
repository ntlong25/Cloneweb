import { Carousel, Button } from "react-bootstrap";
import "./styles/index.css";

const Banner = () => {
  return (
    <Carousel fade className="slide-banner" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://xaydungben.com.vn/storage/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption">
          <div style={{paddingBottom: "13%"}}>
            <span className="title-business">PROFESSIONAL AND DEDICATED</span>
            <h2 className="name-busines">XÂY DỰNG BEN</h2>
            <Button className="btn-detail-business">XEM CHI TIẾT</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://xaydungben.com.vn/storage/1.JPG"
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption">
          <div style={{paddingBottom: "13%"}}>
            <span className="title-business">PROFESSIONAL AND DEDICATED</span>
            <h2 className="name-busines">XÂY DỰNG BEN</h2>
            <Button className="btn-detail-business">XEM CHI TIẾT</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
