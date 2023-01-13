import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import style from "./Header.module.scss";
import Logo from "../Logo/Logo";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { useLocation } from "react-router-dom";

const cx = classnames.bind(style);

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { pathname } = useLocation();
  const handleClickBars = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showMenu]);

  // close menu when route change
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);
  return (
    <header className={cx("header-top")}>
      <div className="wrapper">
        <div className={cx("header-container")}>
          <Logo />
          <button className={cx("menu-btn")} onClick={handleClickBars}>
            {!showMenu ? <HiBars3 /> : <AiOutlineClose />}
          </button>
          <HeaderMenu showMenu={showMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
