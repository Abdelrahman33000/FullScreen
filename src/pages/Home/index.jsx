import { Helmet } from "react-helmet";
import { HomeWrapper } from "../../features";
import { ScrollButton } from "../../components";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fullscreen | الشاشة الكاملة</title>
        <meta
          name="description"
          content="شركة الشاشة الكاملة للتسويق الالكتروني و البرمجة."
        />
      </Helmet>
      <ScrollButton />
      <HomeWrapper />
    </>
  );
};
export default Home;
