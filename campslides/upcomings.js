import { upcoming } from "../data/item.json";
import styles from "../campslides/campS.module.scss";
import Image from "next/image";
export default function Upcoming() {
  return (
    <div className={styles.container05}>
      {upcoming?.map((item) => (
        <>
          <div key={item.id} className={styles.upcoming}>
                <h1>Campaign to come</h1>
            <div className={styles.upcoming_img_text}>
              <img src={item.url} alt="image not found"/>
              <div className={styles.upcoming_text}>
                <p>{item.date}</p>
                <h2>{item.description}</h2>
                <h4>{item.desc02}</h4>
                <div className={styles.upcoming_btn}>
                    <button className={styles.upcoming_btn_btn}>Make a donation</button>
                    <span className={styles.upcoming_btn_span}>{item.donation}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
