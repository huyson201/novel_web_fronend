import React from "react";
import { Link } from "react-router-dom";
import styles from "./BookItem.module.scss";
import classNamesBind from "classnames/bind";
import { Book } from "@src/models/book";
import noImg from "@src/assets/images/no-img.png";
import { getTimeToNow, handleErrorImage, handleImgLoaded } from "@src/utils";
import ImageLoader from "@src/components/ImageLoader/ImageLoader";
import loadedErrorImg from "@src/assets/images/loading-error.jpg";

const cx = classNamesBind.bind(styles);
export interface Props {
  book: Book;
  bookRank?: number;
}
export const BookItem = ({ book, bookRank }: Props) => {
  return (
    <div className={cx("list-items")}>
      <div className={cx("img-box")}>
        <Link to={"/" + (book.slug || "#")}>
          <img
            src={`${import.meta.env.VITE_API_HOST}/api/v1/image?url=${
              book.image
            }`}
            alt="avatar"
            onLoad={handleImgLoaded}
            onError={handleErrorImage(loadedErrorImg)}
          />
          <ImageLoader imgUrl={noImg} />

          {bookRank && (
            <div
              className={cx(
                "book-rank",
                `top-${bookRank > 3 ? "other" : bookRank}`
              )}
            >
              Top {bookRank ?? ""}
            </div>
          )}
        </Link>
      </div>
      <div className={cx("list-items__contents")}>
        <div className={cx("list-items__contents-title")}>
          <Link to={"/" + (book.slug || "#")}>
            <h3 className={cx("title")}>
              {book.title || "Đang Cập Nhật"}{" "}
              {book.state === "full" && (
                <span className="tag tag-green">Full</span>
              )}
              {book.vip === 1 && (
                <span className="tag tag-yellow tag-vip">VIP</span>
              )}
            </h3>
          </Link>
          <p className={cx("author")}>
            {book.author?.replace("Tác giả: ", "") || "Đang Cập Nhật"}
          </p>
        </div>

        <div className={cx("cates")}>
          {book.categories &&
            book.categories.map((value) => {
              return (
                <Link key={`cate-${value.slug}`} to={`/the-loai/${value.slug}`}>
                  <span className="tag tag-blue">{value.name}</span>
                </Link>
              );
            })}
        </div>
        {book.chapters && (
          <div className={cx("chapter")}>
            <Link
              to={
                book.chapters.length <= 0
                  ? "#"
                  : `/${book.slug}/chapter-${book.chapters[0]?.chapterNumber}/${book.chapters[0]?.id}`
              }
              className={cx("chapter__links")}
            >
              {book.chapters.length > 0 ? (
                <>
                  <span className={cx("chapter__number")}>
                    Chương {book.chapters[0]?.chapterNumber}.
                  </span>
                  <span className={cx("chapter__title")}>
                    {book.chapters[0]?.title}
                  </span>
                </>
              ) : (
                <span className={cx("chapter__number")}>Đang cập nhật.</span>
              )}
            </Link>
            <p className={cx("times")}>
              {getTimeToNow(book.chapters[0]?.updatedAt)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
