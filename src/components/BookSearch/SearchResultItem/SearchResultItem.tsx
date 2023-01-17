import React from "react";
import styles from "./SearchResultItem.module.scss";
import bindClass from "classnames/bind";
import { Link } from "react-router-dom";
import { Book } from "@src/models";
import { handleErrorImage } from "@src/utils";
import loadedErrorImg from "@src/assets/images/loading-error.jpg";

interface SearchResultItemProps {
  book: Book;
}
const cx = bindClass.bind(styles);
const SearchResultItem = ({ book }: SearchResultItemProps) => {
  return (
    <Link to={`/${book.slug}`}>
      <div className={cx("result-item")}>
        <div className={cx("img-box")}>
          <img
            src={`${import.meta.env.VITE_API_HOST}/api/v1/image?url=${
              book.image
            }`}
            alt="img"
            onError={handleErrorImage(loadedErrorImg)}
          />
        </div>
        <div className={cx("result-content")}>
          <div className={cx("book-title")}>{book.title}</div>
          <div className={cx("book-cate")}>
            {book.categories?.map((cate) => {
              return (
                <span className={cx("tag tag-blue hover-none", "book-cates")}>
                  {cate.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultItem;
