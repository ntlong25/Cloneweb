import ContentComponent from "./Components/ContentComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import NavbarComponent from "./Components/NavbarComponent";

export default function LayoutComponent(props) {
  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      {props.children ? props.children : <ContentComponent />}
      <FooterComponent />
    </>
  );
}
