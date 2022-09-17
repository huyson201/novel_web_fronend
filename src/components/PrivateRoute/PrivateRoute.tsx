import { useAppSelector } from '@src/redux'
import { cookies, REFRESH_TOKEN_KEY } from '@src/utils'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export interface PrivateRouteProps {
    children: React.ReactNode | React.ReactNode[]
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isRefreshToken = Boolean(cookies.get(REFRESH_TOKEN_KEY))
    const location = useLocation()
    if (!isRefreshToken) return <Navigate to={'/login'} state={{ from: location }} />
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute