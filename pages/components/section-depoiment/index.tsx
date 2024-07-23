import { useState, useEffect } from "react";
import styles from "styles/section/SectionDepoiments.module.css";

import { register } from "swiper/element/bundle";
register();
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const SectionDepoiments = () => {
  const images = [
    { id: "0", image: "/car0.jpg" },
    { id: "1", image: "/car1.jpg" },
    { id: "2", image: "/car2.jpg" },
    { id: "3", image: "/car3.jpg" },
    { id: "4", image: "/car4.jpg" },
    { id: "5", image: "/car5.jpg" },
    { id: "6", image: "/car6.jpg" },
    { id: "7", image: "/car7.jpg" },
  ];

  const [count, setCount] = useState<number>(6);

  useEffect(() => {
    const handleResize = async () => {
      if (window.innerWidth < 1650) {
        setCount(5);
        if (window.innerWidth < 1380) {
          setCount(4);
        }
        if (window.innerWidth < 1110) {
          setCount(3);
        }
        if (window.innerWidth < 840) {
          setCount(2);
        }
        if (window.innerWidth < 570) {
          setCount(1);
        }
      } else {
        setCount(6);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.gradient}></div>
      <div className={styles.divTitle}>
        <h2>GALERIA DE CLIENTES</h2>
        <img src="/logo.png" alt="logo da empresa" />
      </div>

      <div className={styles.carousel}>
        <Swiper
          slidesPerView={count}
          pagination={{ clickable: true }}
          navigation
          className={styles.slides}
        >
          {images.map((el) => (
            <SwiperSlide key={el.id} className={styles.swiperImg}>
              <img src={el.image} alt="cliente" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default SectionDepoiments;
