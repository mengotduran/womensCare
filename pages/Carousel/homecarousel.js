import { Specialist } from "../../data/data.json";
import Carousel from "react-elastic-carousel";
import React, { useRef } from "react";
import styles from "../../styles/homecarousel.module.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 900, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

export default function ElasticCarousel() {
  const data01 = Specialist;
  //  console.log(data01)
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className={styles.carousel_solidary_section}>
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
      >
        {/* <div className={styles.carousel_solidary}></div>
          <div className={styles.carousel_solidary_img_box}>
          {data01?.map((ev) => (
            <>
              <img
                src={ev.url}
                style={{ width: "400px" }}
                key={ev.id}
                className={styles.carousel_solidary_box}
              />
              <div className={styles.carousel_solidary_box}>
                <h3>{ev.name}<span>afritude</span></h3>
                <p>{ev.description}</p>
                <div>Visit the store</div>
              </div>
            </>
          ))}
          </div> */}
        {data01?.map((ev) => (
          <div className={styles.carousel_solidary_img_box}>
            <img
              src={ev.url}
              style={{ width: "100%" }}
              key={ev.id}
              className={styles.carousel_solidary_box}
            />
            <div className={styles.carousel_solidary_txt}>
              <div>
                <h3>{ev.name}</h3>
                <span>afritude</span>
              </div>
              <p>{ev.description}</p>
              <div className={styles.carousel_solidary_store}>Visit the store</div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

// export async function getStaticProps() {
//     const {specialist} = await import('/data/data.json')
//     console.log(specialist)

//     return {
//       props: {
//         data: specialist,
//       }
//     }
//   }
