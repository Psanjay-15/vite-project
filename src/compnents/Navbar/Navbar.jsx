import React from "react";
import "./Navbar.css";
import hirerank_logo from "../../assets/hirerank_logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <div id="navBar">
        <div id="logo">
          <Link to={"/"}>
            <img id="logoImg" src={hirerank_logo} alt="Logo" />
          </Link>
        </div>
        <div id="rightContainer">
          <Menu>
            <MenuButton>
              <img src={user} id="profile" alt="" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Sign-out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
