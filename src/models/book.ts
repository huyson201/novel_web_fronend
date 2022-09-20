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


