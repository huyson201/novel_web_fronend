import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'

import { matchRoutes, useLocation } from 'react-router-dom'
const PageContainer = () => {
    const location = useLocation()
    const routes = matchRoutes([{ path: '/:slug/chapter/:chapterId' }], location)

    return (
        <>
            <Header />
            <div className='main-content'>
                <Outlet />
            </div>
            {/* footer */}
            {(!routes || routes.length <= 0) && <Footer />}
        </>
    )
}

export default PageContainer