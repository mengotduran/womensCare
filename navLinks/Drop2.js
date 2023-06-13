// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Link from "next/link";

// export default function Drop2(props) {
//   let { title } = props;

//   let [isOverButton, setIsOverButton] = useState(false);
//   let [isOverList, setIsOverList] = useState(false);
//   let [isOpen, setIsOpen] = useState(true);
//   let [isTouchInput, setIsTouchInput] = useState(false);
//   let [hasClicked, setHasClicked] = useState(false);
//   let button = useRef(null);

//   useLayoutEffect(() => {
//     if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
//       button.current.click();
//       setIsOpen(false);
//     } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
//       button.current.click();
//       setIsOpen(true);
//     }
//   }, [isOverButton, isOverList]);

//   useEffect(() => {
//     setIsTouchInput(false);
//     setHasClicked(false);
//   }, [hasClicked]);

//   return (
//     <Menu>
//       <MenuButton
//         ref={button}
//         onTouchStart={() => {
//           setIsTouchInput(true);
//         }}
//         onMouseEnter={() => {
//           setIsOverButton(true);
//         }}
//         onMouseLeave={() => {
//           setIsOverButton(false);
//         }}
//         onClick={() => {
//           setHasClicked(true);
//         //   setIsOpen(!isOpen);
//         }}
//         onKeyDown={() => {
//           setIsOpen(!isOpen);
//         }}
//         className="navbar_menuu"
//       >
//         <span className="nav_title">{title}</span><span aria-hidden>▾</span>
//       </MenuButton>
//       <MenuList
//         onMouseEnter={event => {
//           setIsOverList(true);
//         }}
//         onMouseLeave={event => {
//           setIsOverList(false);
//         }}
//       >
//         <MenuItem
//           onSelect={() => {
//             setIsOpen(false);
//           }}
//         >
//           <Link href="/dropdownPages/campaign">Our Campaigns</Link>
//         </MenuItem>
//         <MenuItem
//           onSelect={() => {
//             setIsOpen(false);
//           }}
//         >
//           Our Projects
//         </MenuItem>
//         <MenuItem
//           onSelect={() => {
//             setIsOpen(false);
//           }}
//         >
//           Action 3
//         </MenuItem>
//       </MenuList>
//     </Menu>
//   );
// }

import Link from "next/link";
// import React, { useState, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import styles from "../navLinks/drop.module.scss";

export default function Drop2() {
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
                        color: "rgb(83, 82, 82)",
                        // color:"black",
                        height: "$10",
                        margin: "0px",
                        padding:"$0",
                        paddingTop:"5px",
                        gap:"0",
                        fontSize:"13px",
                        paddingBottom:"2px",
                        borderBottom:"2px solid transparent",
                        "&:hover": {
                          background: "#fff",
                          borderBottom:"2px solid #e27020",
                          color:"#e27020",
                        },
                        "&:active": {
                          background: "$fff",
                        },
                      }}
                      className={styles.main_txt_style}
                    >
                      <h3>OUR ACTIONS</h3>
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
                          <h3>Our Campaigns</h3>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item key="copy">
                        <Link href="/"  className={styles.txt_style}> <h3>Our Projects</h3></Link>
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

