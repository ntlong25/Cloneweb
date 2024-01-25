import ContentComponent from "./Components/ContentComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";

export default function LayoutComponent() {
  return (
    <>
      <HeaderComponent />
      <ContentComponent></ContentComponent>
      <FooterComponent />
    </>
  );
}
