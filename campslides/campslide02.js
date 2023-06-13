import { Carousel } from "react-responsive-carousel";
import { items02 } from "../data/item.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../campslides/campS.module.scss";
export default function CampSlideSecond() {
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
      >
        {items02?.map((item) => (
          <>
            <div key={item.id} className={styles.swipItem}>
              <div className={styles.imgBox}>
                <img src={item.url} alt="slides" />
              </div>
            </div>
          </>
        ))}
      </Carousel>
        <div className={styles.swipeitem_txt}>
          <h2>seminar at IFC</h2>
          <p>9 july 2020</p>
        </div>
    </div>
  );
}
