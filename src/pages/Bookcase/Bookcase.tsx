import BookcaseItem from '@src/components/BookcaseItem'
import React, { useEffect } from 'react'
import styles from './Bookcase.module.scss'
import classNamesBind from 'classnames/bind'
import EmptyBookCase from '@src/components/EmptyBookCase'
import { useFetch } from '@src/hooks'
import authApi from '@src/apis/auth.api'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { deleteBookcase, fetchBookcase, fetchBookcaseFail, fetchBookcaseSuccess } from '@src/redux/features/bookcase'
const cx = classNamesBind.bind(styles)

const Bookcase = () => {
    // const { data: bookcase, isLoading, error } = useFetch(authApi.getBookcase, [])
    const bookcase = useAppSelector(state => state.bookcase)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchBookcase())
        const fetchData = async () => {
            try {
                let data = await authApi.getBookcase()
                dispatch(fetchBookcaseSuccess(data))
            } catch (error) {
                dispatch(fetchBookcaseFail())
            }
        }
        fetchData()
    }, [])

    const handleDelete = async (bookId: number) => {
        try {
            let resData = await authApi.deleteBookcase(bookId)
            dispatch(deleteBookcase(resData))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={cx('book-case')}>
            <h2 className={cx("book-case__title")}>Tủ sách của bạn</h2>
            <div className={cx("book-case__list")}>
                {
                    bookcase.bookcase?.map((value, index) => {
                        return (
                            <BookcaseItem onDelete={handleDelete} bookcase={value} key={`${value.book.slug}-${index}`} />
                        )
                    })
                }

                {
                    !bookcase.bookcase && bookcase.loading && (<EmptyBookCase />)
                }
            </div>
        </div>
    )
}

export default Bookcase