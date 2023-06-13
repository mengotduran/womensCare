import Link from "next/link";
import { Dropdown } from "@nextui-org/react";
import styles from "../navLinks/drop.module.scss";

export default function HoverMenuButton() {
  return (
    <>
      <header className="main-header">
        <div className="main-div">
          <div className="first-header">
          </div>
          <div className="second-header">
            <div className="last-SH">
              <div className="navbar-container">
                <div className="nav_links">
                <Dropdown>
                    <Dropdown.Button
                      css={{
                        borderRadius: 0, // radii.xs
                        background: "transparent", // colors.pink800
                        color: "#000",
                        // color:"black",
                        height: "$10",
                        margin: "0px",
                        padding: "$0",
                        gap: "0",
                        fontSize: "13px",
                        borderBottom: "2px solid transparent",
                        "&:hover": {
                          background: "transparent",
                          color: "#fff",
                        },
                        "&:active": {
                          background: "$fff",
                        },
                      }}
                      className={styles.main_txt_style_lang}
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
                          <h3>EN</h3>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="copy">
                        <Link href="/" className={styles.txt_style}>
                          {" "}
                          <h3>FR</h3>
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
};
