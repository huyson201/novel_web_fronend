import React from "react";
import Dropdown from "../DropDown/DropDown";
import { useAppDispatch, useAppSelector } from "@src/redux";
import { Link } from "react-router-dom";
import { IoChevronDown, IoLogOutOutline, IoPersonSharp } from "react-icons/io5";
import { LinkButton } from "../Button";
import authApi from "@src/apis/auth.api";
import { logout } from "@src/redux/features/authSlice";
import bindClass from "classnames/bind";
import styles from "./UserDrop.module.scss";

const cx = bindClass.bind(styles);

const UserDrop = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await authApi.logout();
    dispatch(logout());
  };
  return (
    <>
      {auth.isLogged ? (
        <div className={cx("account")}>
          <Dropdown
            title={auth.authProfile?.name || ""}
            toggleClassName={cx("account-drop-toggle")}
            className="custom-drop"
            dropContentClassName={cx("account-drop-content")}
          >
            <Link to="/account" className={cx("auth-ops")}>
              <IoPersonSharp className={cx("auth-ops-icons")} />
              Trang cá nhân
            </Link>
            <Link to={"#"} className={cx("auth-ops")} onClick={handleLogout}>
              <IoLogOutOutline className={cx("auth-ops-icons")} />
              Đăng xuất
            </Link>
          </Dropdown>
        </div>
      ) : (
        <div className={cx("login-register")}>
          <LinkButton
            to="/register"
            title="Đăng ký"
            className="btn hover-primary text-white bg-primary"
          />
          <LinkButton
            btnType="gray"
            to="/login"
            title="Đăng nhập"
            className="btn hover-gray text-black bg-gray"
          />
        </div>
      )}
    </>
  );
};

export default UserDrop;
