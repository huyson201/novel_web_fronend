import { DefaultApiResponse } from './common';
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
    view: number
}

export interface BookCase {
    book: Book,
    chapter: Chapter
}

export interface DeleteBookCaseResponse {
    bookId: number,
    userId: number,
    chapterId: number
}

export interface BookcaseResponse {
    bookId: number,
    userId: number,
    chapterId: number
}
