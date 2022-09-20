import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './ChapterItem.module.scss'
import classNamesBind from 'classnames/bind'
import { Chapter } from '@src/models'
const cx = classNamesBind.bind(styles)
interface Props {
    chapter: Chapter
}
const ChapterItem = ({ chapter }: Props) => {
    return (

        <div className={cx('chapter-items')}>
            <Link to={`chapter-${chapter.chapterNumber}/${chapter.id}`}>
                <div className={cx("chapter-items__title")}>
                    <span className={cx("chapter-items__title-number")}>
                        Chương {chapter.chapterNumber}
                    </span>
                    <span className={cx("chapter-items__title-text")}>
                        {chapter.title}
                    </span>
                </div>
                <div className={cx("times")}>
                    Cập nhật: 8 tháng trước
                </div>
            </Link>
        </div>

    )
}

export default ChapterItem