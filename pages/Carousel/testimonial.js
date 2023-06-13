import { Testimonials } from "../../data/testimonial.json";
import Carousel from "react-elastic-carousel";
import React, { useRef } from "react";
import styles from "../../styles/homecarousel.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export default function Testimonial() {
  const items = Testimonials;
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className={styles.carousel_testimonial_section}>
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
        pagination={true}
        enableAutoPlay={true}
        showArrows={true}
        autoPlaySpeed={4000}
        isRTL={false}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
          }, 4000); // same time
        }}
        className="carousel"
      >
        {items?.map((ev) => (
        <div className={styles.testimonial_txt_box}>
          <div className={styles.testimonial_txt_div}>
            <FaQuoteLeft className={styles.testimonial_quote} />
            <p>{ev.description}</p>
            <div className={styles.testimonial_img}>
              <img src={ev.url} alt="image not found" />
              <h3>{ev.name}</h3>
            </div>
          </div>
        </div>
        ))}
      </Carousel>
    </div>
  );
}

// export async function getStaticProps() {
//   // const {testimonial} = await import('/data/testimonial.json')
//   // console.log(testimonial)
//   const filePath = path.join(process.cwd(), "/data/testimonial.json");
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);


//   return {
//     props: {
//       data: objectData,
//     },
//   };
// }
