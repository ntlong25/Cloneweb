import "./styles/index.css";
import { Carousel, Button } from "react-bootstrap";

const Devices = () => {
  const devices = [
    {
      id: 1,
      imgUrl: "https://xaydungben.com.vn/storage/DJI_0065.JPG",
      title: "xây dựng công trình hạ tầng kĩ thuật",
      content:
        "Khi thi công các dự án cầu, cảng, kè bờ thì biện pháp thi công là một khâu chuẩn bị rất quan trọng quyết định thành bại của dự án. Với nhiều năm kinh nghiệm qua các công trình trọng điểm, Công ty xây dựng BEN thường xuyên phối hợp với các bên liên quan để cùng nhau đưa ra giải pháp thi công tối ưu nhằm đảm bảo thi công công trình đạt yêu cầu kỹ thuật, an toàn khi thi công, rút ngắn tiến độ và giảm thiểu chi phí thi công cho chủ đầu tư.",
    },
    {
      id: 2,
      imgUrl:
        "https://xaydungben.com.vn/storage/z2663535734204_dac3154b71594443ffe570aa38487060.jpg",
      title: "XÂY DỰNG CÔNG TRÌNH CÔNG NGHIỆP",
      content:
        "Trong lĩnh vực xây dựng, khi triển khai các công trình lớn thường có sự tham gia của nhiều nhà thầu do vậy để công trình đạt được hiệu quả cao thì rất cần sự phối hợp nhịp nhàng giữa các thành viên tham gia thi công. Nhận thức được tầm quan trọng của sự việc này, Công ty xây dựng BEN luôn là thành viên tích cực trong việc phối hợp và thông tin liên lạc kịp thời giữa Chủ đầu tư, Tư vấn và các nhà thầu khác nhằm đạt được mục tiêu chung cho công trình",
    },
  ];
  return (
    <div className="container-devices">
      <div className="content-devices">
        <h2 className="tilte-devices">
          <span>DỊCH VỤ </span> Của Chúng Tôi
        </h2>
        <p style={{ width: "70%" }}>
          Chúng tôi tin tưởng với những giá trị sáng tạo mà chúng tôi tạo ra từ
          kinh nghiệm và sự hiểu biết sâu sắc về khách hàng trong lĩnh vực này.
        </p>
      </div>

      <Carousel fade className="slide-banner" indicators={false}>
        {devices.map((item) => (
          <div key={item.id}>
            <img
              className="d-block w-100 carousel-image"
              src={item.imgUrl}
              alt="First slide"
            />
            <div className="carousel-caption">
              <div style={{ paddingBottom: "13%" }}>
                <span className="title-business">
                  PROFESSIONAL AND DEDICATED
                </span>
                <h2 className="name-busines">XÂY DỰNG BEN</h2>
                <Button className="btn-detail-business">XEM CHI TIẾT</Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Devices;
