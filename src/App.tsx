import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@src/styles/style.scss'

import PageContainer from './components/PageContainer'
import Home from '@src/pages/Home'
import Login from '@src/pages/Login';
import Register from '@src/pages/Register';
import BookDetail from '@src/pages/BookDetail';
import Chapter from '@src/pages/Chapter';
import Category from '@src/pages/Category';
import Account from '@src/pages/Account';
import Profile from '@src/pages/Account/Profile';
import Bookcase from './pages/Bookcase';
import PrivateRoute from './components/PrivateRoute';
import { withBooks } from './hooks/withBooks';
import { menuList } from './utils';
import Books from './pages/Books';
import BookRank from './pages/BookRank/BookRank';
import NotMatch from './pages/NotMatch';
import router, { RouterType } from './Routers';
import CateWrapper from './components/CateWrapper';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<PageContainer />} >
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path=':slug' element={<BookDetail />} />
          <Route path=':slug/:chapter/:chapterId' element={<Chapter />} />
          <Route path='the-loai/' element={<CateWrapper />}>
            {
              menuList.map((data, index) => {
                const ListBookComponent = withBooks(Books, { fetchData: async (page: number) => data.fetchData({ page: page }), title: data.name })
                return <Route path={data.slug} key={index} element={<ListBookComponent />} />
              })
            }
            <Route path='bxh' element={<BookRank />} />
            <Route path=':cateSlug' element={<Category />} />
          </Route>
          <Route path='account' element={<PrivateRoute><Account /></PrivateRoute>}>
            <Route index element={<Bookcase />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<NotMatch title='Trang này không tồn tại hoặc bị xóa' />} />
        </Route>
      </Routes>
    </div>
  )
}


const routes = (routers: Array<RouterType>, index?: number) => {
  if (!routers || routers.length === 0) return
  return routers.map((route, index) => {
    if (!route.subs) {
      if (route.indexRoute) return <Route key={`${index}`} index element={<route.Component />} />
      return (<Route key={route.path} path={route.path} element={<route.Component />} />)
    }

    return (
      <Route path={route.path} element={<route.Component />}>
        {routes(route.subs)}
      </Route>
    )
  })



}
export default App
