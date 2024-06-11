import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "./components/header";

const Home = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
