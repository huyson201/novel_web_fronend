import React from "react";
import Pagination from "@src/components/Pagination";
import { Book, PaginationResponse } from "@src/models";
import styles from "./Books.module.scss";
import classNamesBind from "classnames/bind";
import HomeListBook from "@src/components/HomeListBook";
import { BookItem } from "@src/components/HomeListBook/BookItem/BookItem";
import { useSearchParams } from "react-router-dom";
const cx = classNamesBind.bind(styles);
export interface BooksProps {
  title?: string;
  data?: PaginationResponse<Book>;
  showRank?: boolean;
  onPageChange?: () => void;
}
const Books = ({ title, data, showRank }: BooksProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePaginationOnchange = (current: number, pageSize: number) => {
    setSearchParams(`page=${current}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={cx("list-book__title")}>
        <h2>{title || ""}</h2>
      </div>
      <div className={cx("list_books")}>
        {data?.result.map((value, index) => {
          return (
            <BookItem
              {...(showRank && { bookRank: index + 1 })}
              book={value}
              key={`key-${value.slug}`}
            />
          );
        })}
      </div>
      {data && data?.total / data?.per_page > 1 && (
        <div className={cx("pagination-wrapper")}>
          <Pagination
            current={parseInt(searchParams.get("page") || "1")}
            onChange={handlePaginationOnchange}
            total={data?.total}
            pageSize={data?.per_page ?? 0}
            defaultPageSize={10}
          />
        </div>
      )}
    </>
  );
};

export default Books;
