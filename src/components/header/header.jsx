import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import HoverMenuButton from "../../../pages/hoverMenuButton";
import "@reach/menu-button/styles.css";
import "@reach/combobox/styles.css";
import { FiShoppingBag } from "react-icons/fi";
import Modal from "../../../pages/modal/modal";
import { CiSearch } from "react-icons/ci";
import { ResponsiveNav } from "../../../navbar/navbar";

export const Header = () => {
  return (
    <>
      <section className="navbar_section social_media_donation">
        <div className="navbar">
          <div className="media_lang">
            <div className="media">
              <FaFacebook className="social_media"/>
              <RiInstagramFill className="social_media"/>
            </div>
            <div className="lang_dropdown">
              <HoverMenuButton title="Language"/>
            </div>
          </div>
          <div className="shopping_cart">
            <span>0 cfa</span>
            <FiShoppingBag />
          </div>
          <div className="last_nav">
            <div className="nav_modal_search">
              <Modal className="nav_modal" />
            </div>
            <div className="navbar_button">
                <button className="nav_shop_btn">Our Shop</button>
                <button className="donation_btn">Make a donation</button>
            </div>
          </div>
        </div>
      </section>

      <section className="responsive_nav">
         <ResponsiveNav />
      </section>
    </>
  );
};
