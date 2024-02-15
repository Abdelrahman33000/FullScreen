import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Suspense, lazy } from "react";
import { LoadingMode } from "./components";
import { OurWorks } from "./pages/OurWorks";
import Aa from "./Login/Login";
// import App0 from "./pages/progress";

const Home = lazy(() => import("./pages/Home"));
const ArticleDetails = lazy(() => import("./pages/ArticleDetails"));
const Articles = lazy(() => import("./pages/Articles"));
const PackageDetails = lazy(() => import("./pages/PackageDetails"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Hiring = lazy(() => import("./pages/Hiring"));
const Packages = lazy(() => import("./pages/Packages"));
const JobDescription = lazy(() => import("./pages/JobDescription"));

function App() {
  return (
    <>
    {/* <App0 /> */}
      <Routes>
        <Route
          element={
            <Suspense fallback={<LoadingMode />}>
              <MainLayout />
            </Suspense>
          }
        >
          <Route index path="/" element={<Home />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package-details/:id" element={<PackageDetails />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article-details/:id" element={<ArticleDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/job-description/:id" element={<JobDescription />} />
        </Route>
        <Route path="/a" element={<Aa />} />
      </Routes>
    </>
  );
}

export default App;
