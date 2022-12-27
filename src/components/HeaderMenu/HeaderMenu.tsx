import React, { JSXElementConstructor, useEffect, useMemo, useState } from 'react'


import styles from "./HeaderMenu.module.scss"
import bindClass from "classnames/bind"
import { Link, LinkProps } from 'react-router-dom'

const cx = bindClass.bind(styles)



export interface HeaderMenuProps {
    children?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[],
}

export const HeaderMenu = ({ children }: HeaderMenuProps) => {
    return (
        <ul className={cx("header-menu")}>
            {children}
        </ul>
    )
}

export interface MenuSubItemProps {
    children?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[],
    to?: string
}

export const SubMenuItem = ({ children, ...props }: MenuSubItemProps) => {
    return (
        <li className={cx('sub-menu__item')} >
            <Link to={props.to || "#"}>
                {children}
            </Link>
        </li>
    )
}


export interface MenuItemProps {
    children?: React.ReactNode | React.ReactNode[] | React.ReactElement | React.ReactElement[],
    to?: string,
    title: string
}
export const MenuItem = ({ children, title, ...props }: MenuItemProps) => {
    // const [listSubItem, setListSubItem] = useState<React.ReactElement[]>([]);

    // useEffect(() => {
    //     const subItems: React.ReactElement[] = []
    //     React.Children.forEach(children, (child, index) => {
    //         if ((child as React.ReactElement).type === (SubMenuItem as React.ReactElement)) {
    //             subItems.push(React.cloneElement((child as React.ReactElement), { key: index }))
    //         }
    //     })

    //     setListSubItem(subItems)
    // }, [children])

    return (
        <li>
            <Link to={props.to || '#'} className={cx("menu-item")}>
                {title}
            </Link>
            <ul className={cx("sub-menu")}>
                {children}
            </ul>
        </li>
    )

}



