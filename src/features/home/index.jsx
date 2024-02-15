import { HeroSection, LoadingMode, Subscribe } from "../../components";
import {
  Business,
  Marketing,
  Opinions,
  Services,
  Sponsors,
  Stories,
  WhyFullScreen,
} from "./components";
import Swipe from "./components/Swiper/Swiper";

export const HomeWrapper = () => {
  return (
    <>
      <HeroSection type="main" />
      <Swipe />
      <Marketing />
      <WhyFullScreen />
      <Services />
      <Business />
      <Opinions />
      <Sponsors />
      <Stories />
    </>
  );
};
export default HomeWrapper;
