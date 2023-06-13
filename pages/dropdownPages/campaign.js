import styles from "../dropdownPages/dropdown.module.scss";
import { FaGreaterThan } from "react-icons/fa";
import CampSlideFirst from "../../campslides/campslides01";
import CampSlideSecond from "../../campslides/campslide02";
import CampSlideThird from "../../campslides/campslide03";
import CampFourth from "../../campslides/camp04";
import Upcoming from "../../campslides/upcomings";

export default function Campaign() {
  return (
    <div className={styles.Campaign_section}>
      <section className={styles.campaigns_banner}>
        <div className={styles.campaign_background_banner}>
          <div className={styles.campaign_bg_txt}>
            <h3 className={styles.campaign_welcome_txt}>Welcome</h3>
            <FaGreaterThan className={styles.campaign_icon} />
            <h3>Our Campaigns</h3>
          </div>
        </div>
      </section>

      <section className={styles.ourcampaign_slider_section}>
        <div className={styles.ourcampaign_txt}>
          <h2>our campaigns</h2>
        </div>
        <div className={styles.ourcampaign_slider}>
          <div className={styles.ourcampaign_slider_first}>
            <CampSlideFirst />
            <CampSlideSecond />
          </div>
          <div className={styles.ourcampaign_slider_third}>
            <CampSlideThird />
            <CampFourth />
          </div>
        </div>
      </section>

      <Upcoming />
    </div>
  );
}
