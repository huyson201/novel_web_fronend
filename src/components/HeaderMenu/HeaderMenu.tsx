import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

import styles from "./HeaderMenu.module.scss";
import bindClass from "classnames/bind";
import { useFetch } from "@src/hooks";
import categoryApi from "@src/apis/category.api";
import UserDrop from "../UserDrop/UserDrop";

const cx = bindClass.bind(styles);

export interface HeaderMenuProps {
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | React.ReactElement
    | React.ReactElement[];
  showMenu: boolean;
}

export const menuList = [
  {
    name: "Bảng xếp hạng",
    slug: "danh-sach/bxh",
  },
  {
    name: "Truyện mới cập nhật",
    slug: "danh-sach/truyen-moi",
  },
];
export const HeaderMenu = ({ children, showMenu }: HeaderMenuProps) => {
  const { data: cates, isLoading, error } = useFetch(categoryApi.getAll, []);

  return (
    <ul className={cx("header-menu", { active: showMenu })}>
      <li className={cx("menu-items")}>
        Thể Loại
        <IoChevronDown className={cx("arrow-down")} />
        <ul className={cx("sub-menus", "large-desktop")}>
          {cates?.map((cate) => {
            return (
              <li key={cate.slug} className={cx("sub-items")}>
                <Link to={`/the-loai/${cate.slug}`}>{cate.name}</Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className={cx("menu-items")}>
        Danh sách
        <IoChevronDown className={cx("arrow-down")} />
        <ul className={cx("sub-menus")}>
          {menuList.map((item) => {
            return (
              <li key={item.slug} className={cx("sub-items")}>
                <Link to={item.slug}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </li>
      <li className={cx("menu-items", "login-box")}>
        <UserDrop />
      </li>
    </ul>
  );
};
