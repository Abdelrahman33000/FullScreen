import { useEffect } from "react";
import { Advertisement, Modal, Subscribe, WhatsApp } from "../components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useToggle } from "../hooks";
export const MainLayout = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const advertisementModal = useToggle(false);
  useEffect(() => {
    const hasRendered = sessionStorage.getItem("hasRendered");

    if (!hasRendered) {
      sessionStorage.setItem("hasRendered", "true");
      setTimeout(() => {
        advertisementModal.open();
      }, 5000);
    }
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Modal
        isOpen={advertisementModal.isOpen}
        closeModal={advertisementModal.close}
        className=" !p-0 xl:!w-[500px]"
      >
        <Advertisement />
      </Modal>
      <Outlet />
      <WhatsApp />
      <Subscribe />
      <Footer />
    </>
  );
};
export default MainLayout;
