import React, { useState } from 'react'
import { default as RCPagination, PaginationProps as RCPaginationProps } from 'rc-pagination'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import { useNavigate, useSearchParams } from 'react-router-dom'
import classNames from 'classnames'
import classNamesBind from 'classnames/bind'
import styles from './Pagination.module.scss'

const cx = classNamesBind.bind(styles)
export interface PaginationProps extends RCPaginationProps {
    className?: string
}

const Pagination = ({ className, current, onChange, ...props }: PaginationProps) => {
    const navigation = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState<number>(() => {
        if (current) return current
        let page: number = parseInt(searchParams.get('page') || '1')
        return page
    })

    const handleOnchange = (current: number, pageSize: number) => {
        onChange && onChange(current, pageSize)
        setCurrentPage(current)
    }

    const itemRender = (current: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", element: React.ReactNode) => {
        switch (type) {
            case 'prev':
                return <VscChevronLeft />
            case 'next':
                return <VscChevronRight />
            case 'jump-next':
            case 'jump-prev':
                return '...'
            default:
                return element
        }

    }
    return (
        <RCPagination
            className={cx(className, 'pagination')}
            nextIcon={<VscChevronRight />}
            prevIcon={<VscChevronLeft />}
            itemRender={itemRender}
            {...props}
            onChange={onChange}
            current={current}
            jumpNextIcon={"..."}
            jumpPrevIcon={"..."}

        />
    )
}

export default Pagination