import { HeroSection, ScrollButton } from "../../components";
import { ServicesWrapper } from "../../features";

export const Services = () => {
  return (
    <div>
      <HeroSection type="service" />
      <ScrollButton />

      <ServicesWrapper />
    </div>
  );
};

export default Services;
