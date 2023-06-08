import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../home/home-page.module.scss";
import { IoMdQuote } from "react-icons/io";

export const HomePage = ({data}) => {
  console.log(data)
  return (
    <div className={styles.home_page}>
      <section className={styles.banner_section}>
        <div className={styles.banner}>
          <div
            className={styles.banner_logo}
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(1, 1, 1, 0) -50%, rgb(0, 0, 0)),url('images/img 3.jpg')",
              height: "535px",
              objectFit: "cover",
              objectPosition: "15% 10%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
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
              <div className={styles.TC}>
                <img
                  src={ev.url}
                  key={ev.id}
                />
                <div className={styles.therapy_text}>
                  <p key={ev.id}>{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
