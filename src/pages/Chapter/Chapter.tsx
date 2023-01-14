import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LinkButton } from "@src/components/Button";
import ToolBar from "@src/components/ToolBar";
import styles from "./Chapter.module.scss";
import classNamesBind from "classnames/bind";
import ChapterNavigation from "@src/components/ChapterNavigation";
import { useFetch } from "@src/hooks";
import bookApi from "@src/apis/book.api";
import {
  BookcaseResponse,
  Chapter as BookChapter,
  ChapterResponse,
} from "@src/models";
import { useAppDispatch, useAppSelector } from "@src/redux";
import NotMatch from "../NotMatch";
import {
  fetchBook,
  fetchBookFail,
  fetchBookSuccess,
} from "@src/redux/features/bookSlice";
import authApi from "@src/apis/auth.api";
const cx = classNamesBind.bind(styles);

const Chapter = () => {
  const book = useAppSelector((state) => state.book.book);
  const user = useAppSelector((state) => state.auth.authProfile);
  const dispatch = useAppDispatch();
  const [showNav, setShowNav] = useState<boolean>(false);
  const [bookcase, setBookcase] = useState<BookcaseResponse>();
  const { slug, chapterId } = useParams();
  const settings = useAppSelector((state) => state.settings);
  if (!slug || !chapterId) return <NotMatch />;

  const handleClickChapterLink = () => {
    if (!showNav) return;
    setShowNav(false);
  };

  const handleClickBookmark = async () => {
    if (!book || !user) return;
    if (bookcase && bookcase.chapterId === +chapterId) {
      await authApi.deleteBookcase(book.id);
      setBookcase(undefined);
      return;
    }

    let result = await authApi.addBookcase(book.id, +chapterId);
    setBookcase(result);
  };

  useEffect(() => {
    if (book) return;
    const fetchBookData = async () => {
      dispatch(fetchBook());
      try {
        let data = await bookApi.getBook(slug);
        dispatch(fetchBookSuccess(data));
      } catch (error) {
        console.log(error);
        dispatch(fetchBookFail());
      }
    };
    fetchBookData();
  }, [slug]);

  // increase view after 30s

  useEffect(() => {
    if (book) {
      let bookId: number = book.id;
      setTimeout(() => {
        bookApi.increaseView(bookId);
      }, 30 * 1000);
    }
  }, [chapterId]);

  useEffect(() => {
    if (!user || !book) return;
    const fetchBookcaseById = async () => {
      let resData = await authApi.getBookcaseById(book.id);
      setBookcase(resData);
    };
    fetchBookcaseById();
  }, [user, chapterId, book]);

  const {
    data: res,
    isLoading,
    error,
  } = useFetch<ChapterResponse>(
    async () => bookApi.getChapter(slug, +chapterId),
    [chapterId, slug]
  );

  return (
    <>
      <ToolBar
        onClickBookmark={handleClickBookmark}
        bookMark={
          bookcase && bookcase.chapterId === +chapterId ? "Added" : "NoAdded"
        }
        prevLink={res?.prevChapter.link}
        nextLink={res?.nextChapter.link}
        onClickListButton={() => setShowNav(true)}
      />
      <div
        className={cx("reading-page", `theme-${settings?.theme ?? "light"}`)}
      >
        <div className="wrapper">
          <div className={cx("content-container")}>
            <div className={cx("page-head")}>
              <div className={cx("novel-title")}>
                <Link to={`/${slug}`}>{book?.title}</Link>
              </div>
              <div className={cx("chapter-title")}>
                <span className={cx("chapter-number")}>
                  Chương {res?.chapter?.chapterNumber}.{" "}
                </span>
                {res?.chapter?.title}
              </div>

              <div className={cx("controls-btn")}>
                <LinkButton
                  to={
                    res?.prevChapter.link
                      ? `/${slug}${res.prevChapter.link}`
                      : "#"
                  }
                  btnType={"gray"}
                  title="Chương trước"
                  disabled={res?.prevChapter.link ? false : true}
                />
                <LinkButton
                  to={
                    res?.nextChapter.link
                      ? `/${slug}${res.nextChapter.link}`
                      : "#"
                  }
                  btnType={"gray"}
                  title="Chương Sau"
                  disabled={res?.nextChapter.link ? false : true}
                />
              </div>
            </div>
          </div>
          <div className={cx("content-container")}>
            <div
              className={cx("novel-content")}
              style={{ fontSize: settings.fontSize }}
              dangerouslySetInnerHTML={{ __html: res?.chapter?.content || "" }}
            ></div>
          </div>
          <div className={cx("content-container")}>
            <div className={cx("controls-btn")}>
              <LinkButton
                to={
                  res?.prevChapter.link
                    ? `/${slug}${res.prevChapter.link}`
                    : "#"
                }
                btnType={"gray"}
                title="Chương trước"
                disabled={res?.prevChapter.link ? false : true}
              />
              <LinkButton
                to={
                  res?.nextChapter.link
                    ? `/${slug}${res.nextChapter.link}`
                    : "#"
                }
                btnType={"gray"}
                title="Chương Sau"
                disabled={res?.nextChapter.link ? false : true}
              />
            </div>
          </div>
        </div>
      </div>
      <ChapterNavigation
        onClickChapterLink={handleClickChapterLink}
        show={showNav}
        onClickOutside={() => setShowNav(false)}
      />
    </>
  );
};

export default Chapter;
