import { items } from "../data/item.json";
import styles from "../campslides/campS.module.scss";
export default function CampFourth() {
  console.log(items);
  return (
    <div className={styles.container04}>
      {items?.map((item) => (
        <>
          <div key={item.id} className={styles.swipItem04}>
            <div className={styles.imgBox04}>
              <img src={item.url} alt="slides" />
              <div className={styles.swipeitem_txt04}>
                <h2>{item.description}</h2>
                <p>9 april 2020</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
