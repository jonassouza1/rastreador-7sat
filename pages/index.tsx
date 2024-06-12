import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Header from "./components/header";
import Hero from "./components/hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
