import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@reach/menu-button";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Drop3(props) {
  let { title } = props;

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState(true);
  let [isTouchInput, setIsTouchInput] = useState(false);
  let [hasClicked, setHasClicked] = useState(false);
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <Menu>
      <MenuButton
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={() => {
          setIsOverButton(true);
        }}
        onMouseLeave={() => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
        //   setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
        className="navbar_menuu"
      >
        <span className="nav_title">{title}</span><span aria-hidden>▾</span>
      </MenuButton>
      <MenuList
        onMouseEnter={event => {
          setIsOverList(true);
        }}
        onMouseLeave={event => {
          setIsOverList(false);
        }}
      >
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 1
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 2
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 3
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
