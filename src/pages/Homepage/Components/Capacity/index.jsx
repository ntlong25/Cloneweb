import "./styles/index.css";
import { Container } from "react-bootstrap";

const Capacity = () => {
  const capacity = [
    {
      id: 1,
      imageUrl: "https://xaydungben.com.vn/storage/1.JPG",
      title: "Chuyên Nghiệp và Tận Tâm",
      content: "Công ty xây dựng cảng, cầu đường, bờ kè",
    },
    {
      id: 2,
      imageUrl:
        "https://xaydungben.com.vn/storage/xqhKhPkOtZwSNbJzqDXVFeLsQB68ffwtjcrmVTaq.jpeg",
      title: "Xâu dựng uy tín lâu dài với khách hàng",
      content:
        "Chúng tôi phát triển dự án dựa trên yếu tố bền vững, xây dựng uy tín lâu dài với khách hàng",
    },
    {
      id: 3,
      imageUrl:
        "https://xaydungben.com.vn/storage/NHA%20MAY%20XI%20MANG%20HOLCIM/IMG_0590.JPG",
      title: "",
      content:
        "Công Ty BEN với nhiều năm kinh nghiệm làm về cầu đường, có nhiều dự án tiêu biểu như: Cầu Mỹ Luông, Cầu An Hảo ... cùng sự hiểu biết sâu sắc về khách hàng trong lĩnh vực này BEN tin tưởng sẽ sáng tạo và đưa ra những giải pháp tối ưu nhất cho khách hàng của mình. Vì vậy BEN sẽ là đối tác tin cậy mà các nhà thầu mong muốn lựa chọn.",
    },
  ];
  return (
    <div className="container-capacity">
      <div className="content-capacity">
        <h2 className="tilte-capacity">
          <span>NĂNG LỰC </span> Của Chúng Tôi
        </h2>
        <p>
          Chúng tôi phát triển dự án dựa trên yếu tố bền vững, xây dựng uy tín
          lâu dài với khách hàng.
        </p>
      </div>

      <Container className="capacity-list">
        <div className="item-capacity">
          {capacity.slice(0, -1).map((item) => (
            <div className="item1" key={item.id}>
              <img
                className="item-img-capacity"
                src={item.imageUrl}
                alt="capacity"
              />
              <div className="item-content-capacity">
                <h3 className="item-title-capacity">{item.title}</h3>
                <p style={{ textAlign: "justify" }}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="item-last" key={capacity[capacity.length-1].id}>
          <img
            className="item-img-last"
            src={capacity[capacity.length-1].imageUrl}
            alt="capacity"
          />
          <div className="item-content-last">
            <p style={{ textAlign: "justify" }}>
              {capacity[capacity.length-1].content}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Capacity;
