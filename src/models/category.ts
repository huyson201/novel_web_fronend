import { DefaultApiResponse } from './common';
export interface Category {
    id: number,
    name: string,
    slug: string,
    createdAt?: string,
    updatedAt?: string
}
