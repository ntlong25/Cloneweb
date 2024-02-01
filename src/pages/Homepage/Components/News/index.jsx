import "./styles/index.css";
import { Container } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

const News = () => {
  const news = [
    {
      id: 1,
      imageUrl: "https://xaydungben.com.vn/storage/LOGOBEN%20Footer.png",
      title:
        "ĐỊNH VỊ THƯƠNG HIỆU CỦA CÔNG TY XÂY DỰNG BEN - CHUYÊN NGHIỆP VÀ TẬN TÂM",
      date: "28/07/2021",
    },
    {
      id: 2,
      imageUrl:
        "https://xaydungben.com.vn/storage/CAO%20TOC%20TRUNG%20LUONG//5a8a2aec4c0bb255eb1a.jpg",
      title:
        "NHỮNG ĐIỀU CẦN LƯU Ý VỀ KỸ THUẬT VÀ CHẤT LƯỢNG THI CÔNG ĐƯỜNG CAO TỐC",
      date: "28/10/2020",
    },
    {
      id: 3,
      imageUrl: "https://xaydungben.com.vn/storage/3616_5.jpg",
      title:
        "CẦU THĂNG LONG VÀ THỰC HƯ CÔNG NGHỆ SỬA MẶT CẦU CÓ XUẤT XỨ TRUNG QUỐC",
      date: "05/09/2020",
    },
    {
      id: 4,
      imageUrl:
        "https://xaydungben.com.vn/storage/CAO%20TOC%20TRUNG%20LUONG//09564bac59b8a4e6fda9.jpg",
      title: "7 YẾU TỐ ẢNH HƯỞNG ĐẾN TIẾN ĐỘ THI CÔNG CÔNG TRÌNH",
      date: "05/09/2020",
    },
    {
      id: 5,
      imageUrl:
        "https://xaydungben.com.vn/storage/5uY9HbjM59f3358n4Vc2eNKCCKCmFj2gAbrvITGM.jpeg",
      title:
        "KĨ SƯ XÂY DỰNG CỦA BEN KHÔNG QUẢN NGÀY ĐÊM ĐỂ TẠO NÊN NHỮNG CÔNG TRÌNH ĐẸP CHẮC CHẮN",
      date: "10/08/2020",
    },
    {
      id: 6,
      imageUrl: "https://xaydungben.com.vn/storage/dau%20tu%20cong.jpg",
      title: "NHÀ THẦU XÂY DỰNG KỲ VỌNG VÀO ĐẦU TƯ CÔNG",
      date: "18/07/2020",
    },
  ];

  return (
    <div className="container-news">
      <div className="content-news">
        <h2 className="tilte-news">
          <span>TIN TỨC </span> Mới Nhất
        </h2>
        <p>Cập nhật thông tin - Tin tức xây dựng</p>
      </div>

      <Container className="news-list">
        {news.map((item) => (
          <div className="item" key={item.id}>
            <div className="zoomable-image-container">
              <img
                className="item-img-news"
                src={item.imageUrl}
                alt="capacity"
              />
            </div>
            <div className="item-content-news">
              <div>
                <p style={{ textAlign: "left" }}>Ngày đăng: {item.date}</p>
                <h5 className="item-title-news" >{item.title.toUpperCase()}</h5>
              </div>
              <p style={{ textAlign: "left" }}>
                <button className="item-detail-news">Xem chi tiết <FaAngleRight /></button>
              </p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default News;
