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

