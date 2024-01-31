import { Row, Col, Image } from "react-bootstrap";
import { FaClock, FaFacebookF, FaGoogle, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../../assets/images/logo.jpg";
import "../styles/main.css";
export default function HeaderComponent() {
  return (
    <>
      <Row className="headerInfo">
        <Col sm={10}></Col>
        <Col sm={2}>
          <FaFacebookF className="iconFB" />
          <FaGoogle className="iconGG" />
        </Col>
      </Row>
      <Row>
        <Col lg={5} md={12} sm={12} className="colLogo">
          <Image src={Logo} rounded className="logo" />
        </Col>
        <Col lg={3} md={4} sm={4} className="colAddress">
          <div className="addressContainer">
            <div className="addressIcon">
              <FaLocationDot />
            </div>
            <div className="addressContent">
              Số nhà 12, KDC Lucky Dragon, Đường số 357, Phường Phước Long B,
              Quận 9, Thành phố Hồ Chí Minh
            </div>
          </div>
        </Col>
        <Col lg={2} md={4} sm={4} className="colAddress">
          <hr />
          <div className="addressContainer">
            <div className="contactIcon">
              <FaPhone />
            </div>
            <div className="addressContent">
              Liên Hệ: <br />
              +84-(028)-3620-1898
            </div>
          </div>
        </Col>
        <Col lg={2} md={4} sm={4} className="colAddress">
          <div className="addressContainer">
            <div className="timeIcon">
              <FaClock />
            </div>
            <div className="addressContent">
              Giờ hoạt động <br /> T2 - T7: 8:00 - 18:00
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
