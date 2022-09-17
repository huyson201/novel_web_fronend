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

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<PageContainer />} >
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* {
            listBookRouters.map((data, index) => {
              return <Route path={data.routePath} key={index} element={<data.Component title={data.title} />} />
            })
          } */}
          <Route path=':slug' element={<BookDetail />} />
          <Route path=':slug/chapter/:chapterId' element={<Chapter />} />
          <Route path='the-loai/:slug' element={<Category />} />

          <Route path='account' element={<PrivateRoute><Account /></PrivateRoute>}>
            <Route index element={<Bookcase />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
