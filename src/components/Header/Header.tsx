import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "@src/redux";
import { logout } from "@src/redux/features/authSlice";
import authApi from "@src/apis/auth.api";
import Logo from "../Logo/Logo";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

const cx = classnames.bind(style);

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
  const handleLogout = async () => {
    await authApi.logout();
    dispatch(logout());
  };

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
