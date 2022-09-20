export interface Chapter {
    id: number,
    title: string,
    chapterNumber: string,
    content: string,
    createdAt?: string,
    updatedAt?: string,
    bookId: number
}

