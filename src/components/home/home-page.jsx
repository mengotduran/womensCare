import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../home/home-page.module.scss";
import { IoMdQuote } from "react-icons/io";
import { FaPlus, FaHandHoldingHeart } from "react-icons/fa";
import ElasticCarousel from "../../../pages/Carousel/homecarousel";
import Testimonial from "../../../pages/Carousel/testimonial";
import CounterUpPage from "../../../Counter/CounterUpPage";

// const transpiledModules = require('next-transpile-modules')(["CounterUpPage"]);
// const withTM = require('next-transpile-modules')(['CounterUpPage']); 
// module.exports = withTM();

export const HomePage = ({ data }) => {
  return (
    <div className={styles.home_page}>
      <section className={styles.banner_section}>
        <div className={styles.banner}>
          <div className={styles.banner_logo}>
            <img
              src="images/img bg.png"
              alt="image not found..."
              className={styles.banner_image}
            />
            <div className={styles.banner_text}>
              <IoMdQuote className={styles.banner_quote} />
              <div className={styles.text_button}>
                <p>
                  Promoting women's rights by combating gender-based violence in
                  general and gender-based violence
                </p>
                <div className={styles.navbar_button}>
                  <button className={styles.donation_btn}>
                    Make a donation
                  </button>
                  <button className={styles.nav_shop_btn}>
                    Visit the store
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.banner_message}>
              <div className={styles.banner_message_text}>
                <h3>Our fights</h3>
              </div>
              <div className={styles.banner_message_logo}>
                <div className={styles.logo1}>
                  <img src="images/img justice.png" />
                  <h4>promoting human rights</h4>
                  <p>Discover the fight</p>
                </div>
                <div className={styles.logo2}>
                  <img src="images/megaphone.png" />
                  <h4>ADVOCACY</h4>
                  <p>Discover the fight</p>
                </div>
                <div className={styles.logo3}>
                  <img src="images/book.png" />
                  <h4>THE DOCUMENTATION</h4>
                  <p>Discover the fight</p>
                </div>
                <div className={styles.logo4}>
                  <img src="images/heart-Recupere.svg" />
                  <h4>FAMILY MEDIATION</h4>
                  <p>Discover the fight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.news_api_section}>
        <div className={styles.news_api}>
          <div className={styles.general_header_style}>
            <span></span>
            <h3>News from ELLES</h3>
          </div>
          <div className={styles.news_api_img_txt}>
            {data?.map((ev) => (
              // { id, description, url } = ev,
              <div className={styles.news_inside_api}>
                <div className={styles.news_inside_api_div}>
                  <img
                    src={ev.url}
                    className={styles.news_inside_img}
                    alt="image not found..."
                  />
                </div>
                <div className={styles.news_inside_api_header_txt}>
                  <p>{ev.date}</p>
                  <h3>{ev.activity}</h3>
                  <div className={styles.news_inside_api_txt}>
                    <h2>{ev.title}</h2>
                    <h4>{ev.description}</h4>
                  </div>
                  <h5>continue reading</h5>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.news_api_more_news}>
            <h4>more news</h4>
            <span>
              <FaPlus />
            </span>
          </div>
        </div>
      </section>

      <section className={styles.family_section}>
        <div className={styles.family_img_txt}>
          <div className={styles.family_img}>
            <img src="images/img 7.jpg" />
          </div>
          <div className={styles.family_txt}>
            <h2>You protect the life of a family</h2>
            <p>
              <i>
                The association is committed to a policy of non-discrimination
                in employment and in the provision of all services.
              </i>
            </p>
            <h4>
              The association ELLES Cameroon joins the national and
              international community On the occasion of the celebration of the
              International Women's Rights Day, the theme of this edition of
              which is
            </h4>
            <div className={styles.family_logo_div}>
              <h3>Make a donation</h3>
              <FaHandHoldingHeart className={styles.family_icon} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.solidarity_section}>
        <div className={styles.solidarity}>
          <div className={styles.general_header_style}>
            <span></span>
            <h3>Solidarity shop</h3>
          </div>
          <ElasticCarousel />
        </div>
      </section>

      <section className={styles.testimonial_section}>
        <div className={styles.testimonial}>
          <div className={styles.general_header_style}>
            <span></span>
            <h3>Testimonials</h3>
          </div>
          <Testimonial />
        </div>
      </section>

      <section className={styles.volunteers_section}>
        <CounterUpPage />
      </section>
    </div>
  );
};
