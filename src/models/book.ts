import { DefaultApiResponse, PaginationResponse } from './common';
import { Category } from "./category"
import { Chapter } from './chapter';

export interface Book {
    id: number,
    title: string,
    slug: string,
    image: string,
    desc: string,
    author: string,
    translator: string,
    state: string,
    categories?: [Category],
    createdAt: string,
    updatedAt: string
    chapters?: [Chapter]
}

export interface BookResponse extends DefaultApiResponse {
    data: PaginationResponse<Book>
}

export interface GetBook extends DefaultApiResponse {
    data: Book
}