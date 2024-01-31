import Banners from "../../pages/Homepage/Components/Banner";
import Capacity from "../../pages/Homepage/Components/Capacity";
import Contact from "../../pages/Homepage/Components/Contact";
import News from "../../pages/Homepage/Components/News";

export default function ContentComponent() {
  return (
    <div>
      <Banners />
      <Capacity />
      <News />
      <Contact />
    </div>
  );
}
