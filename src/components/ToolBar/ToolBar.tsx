import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  IoArrowBackOutline,
  IoBookmarkOutline,
  IoArrowForwardOutline,
  IoBookOutline,
  IoListOutline,
  IoSettingsOutline,
  IoSearch,
  IoCloseOutline,
  IoMoonSharp,
  IoBookSharp,
  IoSunnySharp,
} from "react-icons/io5";
import { ImSun, ImIcoMoon } from "react-icons/im";
import {
  MdOutlineBookmarkBorder,
  MdOutlineBookmarkAdded,
} from "react-icons/md";
import styles from "./ToolBar.module.scss";
import classNamesBind from "classnames/bind";
import decreaseFont from "@src/assets/icons/font-size-decrease.svg";
import increaseFont from "@src/assets/icons/font-size-increase.svg";
import { useAppDispatch, useAppSelector } from "@src/redux";
import {
  decreaseFontSize,
  increaseFontSize,
  updateTheme,
} from "@src/redux/features/settingsSlice";
import { themeType } from "@src/models";

const cx = classNamesBind.bind(styles);
export type BookmarkType = "Added" | "NoAdded";

export interface Props {
  onClickListButton?: (e?: MouseEvent) => void;
  nextLink?: string;
  prevLink?: string;
  bookMark: BookmarkType;
  onClickBookmark?: () => void;
}

const ToolBar = ({
  prevLink,
  nextLink,
  onClickBookmark,
  onClickListButton,
  bookMark = "NoAdded",
}: Props) => {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const { slug } = useParams();
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const disPatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  const handleSetTheme = (theme: themeType) => {
    disPatch(updateTheme(theme));
  };

  const handleAddBookcase = () => {
    onClickBookmark && onClickBookmark();
  };

  // show toolbar
  useEffect(() => {
    if (!showSettings) {
      toolbarRef.current?.classList.add(cx("show"));
    }
  }, [showSettings]);

  // show toolbar when scrolling to top
  useEffect(() => {
    let currentScrollTop = window.scrollY;

    const showToolbar = () => {
      if (
        currentScrollTop > window.scrollY ||
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        toolbarRef.current?.classList.add(cx("show"));
      } else {
        toolbarRef.current?.classList.remove(cx("show"));
      }
      currentScrollTop = window.scrollY;
    };

    window.addEventListener("scroll", showToolbar);

    return () => window.removeEventListener("scroll", showToolbar);
  }, []);

  return (
    <div
      className={cx(
        "toolbar",
        { [`show-settings`]: showSettings },
        `theme-${settings?.theme ?? "light"}`
      )}
      ref={toolbarRef}
    >
      <div className={cx("toolbar-controls")}>
        <button
          className={cx("toolbar__btn")}
          onClick={() => setShowSettings((prev) => !prev)}
        >
          <IoSettingsOutline className="toolbar__btn-ions" />
        </button>
        <Link className={cx("toolbar__btn")} to={`/${slug}`}>
          <IoBookOutline className="toolbar__btn-ions" />
        </Link>
        <button
          className={cx("toolbar__btn")}
          onClick={onClickListButton && onClickListButton}
        >
          <IoListOutline className="toolbar__btn-ions" />
        </button>
        <button className={cx("toolbar__btn")} onClick={handleAddBookcase}>
          {bookMark === "NoAdded" ? (
            <MdOutlineBookmarkBorder className="toolbar__btn-ions" />
          ) : (
            <MdOutlineBookmarkAdded className="toolbar__btn-ions" />
          )}
        </button>
        <Link
          className={cx("toolbar__btn", { disabled: !prevLink })}
          to={prevLink ? `/${slug}${prevLink}` : "#"}
        >
          <IoArrowBackOutline className="toolbar__btn-ions" />
        </Link>
        <Link
          className={cx("toolbar__btn", { disabled: !nextLink })}
          to={nextLink ? `/${slug}${nextLink}` : "#"}
        >
          <IoArrowForwardOutline className="toolbar__btn-ions" />
        </Link>
      </div>
      <div className={cx("setting-controls")}>
        <div className={cx("control-header")}>
          <button
            className={cx("close-settings-btn")}
            onClick={() => setShowSettings(false)}
          >
            <span>
              <IoCloseOutline />
            </span>
          </button>
          <div className={cx("header-title")}>Cài đặt</div>
        </div>
        <div className={cx("controls-area")}>
          <div className={cx("control-title")}>Giao diện</div>
          <div className={cx("control-options")}>
            <button
              className={cx("tool-theme", "theme-light", "options", {
                active: settings?.theme == "light",
              })}
              onClick={() => handleSetTheme("light")}
            >
              <ImSun />
            </button>
            <button
              className={cx("tool-theme", "theme-dark", "options", {
                active: settings?.theme == "dark",
              })}
              onClick={() => handleSetTheme("dark")}
            >
              <ImIcoMoon />
            </button>
            <button
              className={cx("tool-theme", "theme-book", "options", {
                active: settings?.theme == "book",
              })}
              onClick={() => handleSetTheme("book")}
            >
              <IoBookSharp />
            </button>
          </div>
        </div>
        <div className={cx("controls-area")}>
          <div className={cx("control-title")}>Cỡ chữ</div>
          <div className={cx("control-options")}>
            <button
              className={cx("options", "fontsize-btn")}
              onClick={() => disPatch(decreaseFontSize())}
            >
              <img
                className={cx("font-size-icon")}
                src={decreaseFont}
                alt="icon_font"
              />
            </button>
            <button
              className={cx("options", "fontsize-btn")}
              onClick={() => disPatch(increaseFontSize())}
            >
              <img
                className={cx("font-size-icon")}
                src={increaseFont}
                alt="icon_font"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
