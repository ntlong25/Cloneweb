import { GrLanguage } from "react-icons/gr";
import Homepage from "../pages/Homepage";
import { Image } from "react-bootstrap";
import vn from "../assets/flag/vn.png";
import en from "../assets/flag/en.png";
import "./main.css";
export const categories = [
  {
    name: "Trang Chủ",
    // pathName: "trang-chu",
    pathName: "",

    component: <Homepage />,
  },
  {
    name: "Giới Thiệu",
    pathName: "gioi-thieu",
    component: null,
  },
  {
    name: "Dịch Vụ",
    pathName: "dich-vu",
    component: null,

    children: [
      {
        name: "Xây Dựng Công Trình Công Nghiệp",
        pathName: "xay-dung-cong-trinh-cong-nghiep",
        component: null,
      },
      {
        name: "Xây Dựng Công Trình Hạ Tầng Kĩ Thuật",
        pathName: "xay-dung-cong-trinh-ha-tang-ki-thuat",
        component: null,
      },
    ],
  },
  {
    name: "Dự Án",
    pathName: "du-an",
    component: null,

    children: [
      {
        name: "Các Dự Án Cầu Cảng",
        pathName: "cac-du-an-cau-cang",
        component: null,
      },
      {
        name: "Bờ Kè Khu Dân Cư",
        pathName: "bo-ke-khu-dan-cu",
        component: null,
      },
      {
        name: "Đường Và Kênh Đập",
        pathName: "duong-va-kenh-dap",
        component: null,
      },
      {
        name: "Xây Dựng Công Nghiệp Và Dân Dụng",
        pathName: "xay-dung-cong-nghiep-va-dan-dung",
        component: null,
      },
      {
        name: "Hạ Tầng Kĩ Thuật",
        pathName: "ha-tang-ki-thuat",
        component: null,
      },
    ],
  },
  {
    name: "Tin Tức",
    pathName: "tin-tuc",
    component: null,

    children: [
      {
        name: "Tin Tức Nổi Bật",
        pathName: "tin-tuc-noi-bat",
        component: null,
      },
      {
        name: "Xây Dựng Công Nghiệp Và Dân Dụng",
        pathName: "xay-dung-cong-nghiep-va-dan-dung",
        component: null,
      },
      {
        name: "Đường Và Kênh Đập",
        pathName: "duong-va-kenh-dap",
        component: null,
      },
      {
        name: "Khu Dân Cư",
        pathName: "khu-dan-cu",
        component: null,
      },
      {
        name: "Cầu, Cảng, Bờ Kè",
        pathName: "cau-cang-bo-ke",
        component: null,
      },
    ],
  },
  {
    name: "Tuyển Dụng",
    pathName: "tuyen-dung",
    component: null,
  },
  {
    name: "Liên Hệ",
    pathName: "lien-he",
    component: null,
  },
  {
    name: <GrLanguage />,
    pathName: "ngon-ngu",
    component: null,
    children: [
      {
        name: (
          <>
            <Image src={vn} rounded width={20} className="flag" />
            <span>Việt Nam</span>
          </>
        ),
        pathName: "vn",
        component: null,
      },
      {
        name: (
          <>
            <Image src={en} rounded width={20} className="flag" />
            <span>Tiếng Anh</span>
          </>
        ),
        pathName: "en",
        component: null,
      },
    ],
  },
];
