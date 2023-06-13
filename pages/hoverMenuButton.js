import Link from "next/link";
import { Dropdown } from "@nextui-org/react";

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
                          background: "white", // colors.pink800
                          color: "grey",
                          height: "$12",
                          margin: "0px",
                          "&:hover": {
                            background: "#eef075",
                          },
                          "&:active": {
                            background: "$pink200",
                          },
                        }}
                      >
                        REGARDS
                      </Dropdown.Button>
                      <Dropdown.Menu aria-label="Static Actions">
                        <Dropdown.Item
                          key="new"
                          css={{
                            height: "60px",
                          }}
                        >
                          <Link href="/Regards/presentation">
                            PRESENTATION OF HOLISTIC HOSPITAL
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="copy">
                          <Link href="/Regards/medicine">
                            HOLISTIC MEDICINE
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="edit">
                          <Link href="/Regards/specialist">SPECIALIST</Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="agency">
                          <Link href="/Regards/therapy">OUR AGENCIES</Link>
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
