import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from "../../assets/images/logoFooter.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "../styles/main.css";
import { categories } from "../../init/category";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
export default function FooterComponent() {
  return (
    <div className="footer">
      <Container>
        <Row className="footerContent">
          <Col lg={4} md={12} sm={12} className="colFooter">
            <div className="footerContentTitle">
              <h5 className="footerContentH5">GIỚI THIỆU</h5>
              <hr className="footerContentHr" />
            </div>

            <Image src={Logo} rounded className="logoFooter" />
            <p className="footerContentP">
              Chúng tôi phát triển dự án dựa trên yếu tố bền vững, xây dựng uy
              tín lâu dài với khách hàng
            </p>
          </Col>
          <Col lg={4} md={12} sm={12} className="colFooter">
            <div className="footerContentTitle">
              <h5 className="footerContentH5">LIÊN KẾT NHANH</h5>
              <hr className="footerContentHr" />
            </div>
            <ul className="footerMenuUl">
              {categories.map((item, index) => {
                return (
                  <li key={index} className="footerMenuLi">
                    <MdKeyboardDoubleArrowRight />
                    {!item?.children ? (
                      <Link to={`/${item.pathName}`} className="footerMenuLink">
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        to={`/${item.pathName}/${item?.children[0]?.pathName}`}
                        className="footerMenuLink"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12} className="colFooter">
            <div className="footerContentTitle">
              <h5 className="footerContentH5">THÔNG TIN LIÊN HỆ</h5>
              <hr className="footerContentHr" />
            </div>
            <div className="footerContentContact">
              <Row>
                <Col sm={4}>Địa chỉ :</Col>
                <Col sm={8} className="footerColContentContact">
                  Số nhà 12, KDC Lucky Dragon, Đường số 357, Phường Phước Long
                  B, Quận 9, Thành phố Hồ Chí Minh
                </Col>
              </Row>
              <Row>
                <Col sm={4}>Điện thoại :</Col>
                <Col sm={8} className="footerColContentContact">
                  +84-(028)-3620-1898
                </Col>
              </Row>
              <Row>
                <Col sm={4}>E-mail :</Col>
                <Col sm={8} className="footerColContentContact">
                  ctcpben@gmail.com
                </Col>
              </Row>
              <Row className="rowIconFooter">
                <FaFacebookF className="iconFBFooter" />
                <FaGoogle className="iconGGFooter" />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="footerLicense">
        <p className="footerLicenseP">
          Công ty xây dựng BEN © DESIGN BY AVALON SOLUTION ASIA.
        </p>
      </Row>
    </div>
  );
}
