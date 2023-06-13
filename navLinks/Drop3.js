import Link from "next/link";
// import React, { useState, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import styles from "../navLinks/drop.module.scss";

export default function Drop3() {
  return (
    <>
      <header className="main-header">
        <div className="main-div">
          <div className="first-header"></div>
          <div className="second-header">
            <div className="last-SH">
              <div className="navbar-container">
                <div className="nav_links">
                  <Dropdown>
                    <Dropdown.Button
                      css={{
                        borderRadius: 0, // radii.xs
                        background: "white", // colors.pink800
                        color: "rgb(83, 82, 82)",
                        // color:"black",
                        height: "$10",
                        margin: "0px",
                        padding: "$0",
                        paddingTop:"5px",
                        gap: "0",
                        fontSize: "13px",
                        paddingBottom: "2px",
                        borderBottom: "2px solid transparent",
                        "&:hover": {
                          background: "#fff",
                          borderBottom: "2px solid #e27020",
                          color: "#e27020",
                        },
                        "&:active": {
                          background: "$fff",
                        },
                      }}
                      className={styles.main_txt_style}
                    >
                      <h3>ACT WITH ELLE</h3>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Static Actions"
                      css={{
                        background: "#fff",
                        width: "10px",
                      }}
                    >
                      <Dropdown.Item>
                        <Link
                          href="/dropdownPages/campaign"
                          className={styles.txt_style}
                        >
                          <h3>Become a volunteer at ELLE</h3>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="copy">
                        <Link href="/" className={styles.txt_style}>
                          {" "}
                          <h3>Become a partner at ELLE</h3>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="edit">
                        <Link href="/" className={styles.txt_style}>
                          <h3>Make a donation</h3>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="edits">
                        <Link href="/" className={styles.txt_style}>
                          <h3>Solidary shop</h3>
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
