export interface Chapter {
    id: number,
    title: string,
    chapterNumber: string,
    content: string,
    createdAt?: string,
    updatedAt?: string,
    bookId: number
}

export interface ChapterResponse {
    prevChapter: {
        link?: string
    },
    nextChapter: {
        link?: string
    },
    chapter?: Chapter
}