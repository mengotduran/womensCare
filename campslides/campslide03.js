import { Carousel } from "react-responsive-carousel";
import { items } from "../data/item.json";
import testimonials from "../data/testimonial.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../campslides/campS.module.scss";
export default function CampSlideThird() {
  console.log(items);
  return (
    <div className={styles.container03}>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper03}
      >
        {items?.map((item) => (
          <>
            <div key={item.id} className={styles.swipItem03}>
              <div className={styles.imgBox03}>
                <img src={item.url} alt="slides" />
              </div>
            </div>
          </>
        ))}
      </Carousel>
        <div className={styles.swipeitem_txt03}>
          <h2>Girls take action against female circumcision</h2>
          <p>9 april 2020</p>
        </div>
    </div>
  );
}
