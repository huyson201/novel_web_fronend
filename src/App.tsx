import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@src/styles/style.scss";

import PageContainer from "./components/PageContainer";
import { withBooks } from "./hooks/withBooks";
import { menuList } from "./utils";
import NotMatch from "./pages/NotMatch";
import { RouterType } from "./Routers";
import PageLoader from "./components/PageLoader/PageLoader";

const Home = lazy(() => import("@src/pages/Home"));
const Login = lazy(() => import("@src/pages/Login"));
const Register = lazy(() => import("@src/pages/Register"));
const BookDetail = lazy(() => import("@src/pages/BookDetail"));
const Chapter = lazy(() => import("@src/pages/Chapter"));
const Category = lazy(() => import("@src/pages/Category"));
const Account = lazy(() => import("@src/pages/Account"));
const Profile = lazy(() => import("@src/pages/Account/Profile"));
const Bookcase = lazy(() => import("@src/pages/Bookcase"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const Books = lazy(() => import("./pages/Books"));
const BookRank = lazy(() => import("./pages/BookRank/BookRank"));
const CateWrapper = lazy(() => import("./components/CateWrapper"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PageContainer />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path=":slug" element={<BookDetail />} />
            <Route path=":slug/:chapter/:chapterId" element={<Chapter />} />
            <Route path="the-loai/" element={<CateWrapper />}>
              <Route path=":cateSlug" element={<Category />} />
            </Route>
            <Route path="danh-sach/" element={<CateWrapper />}>
              <Route path="bxh" element={<BookRank />} />
              {menuList.map((data, index) => {
                const ListBookComponent = withBooks(Books, {
                  fetchData: async (page: number) =>
                    data.fetchData({ page: page }),
                  title: data.name,
                });
                return (
                  <Route
                    path={data.slug}
                    key={index}
                    element={<ListBookComponent />}
                  />
                );
              })}
            </Route>
            <Route
              path="account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            >
              <Route index element={<Bookcase />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route
              path="*"
              element={<NotMatch title="Trang này không tồn tại hoặc bị xóa" />}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

const routes = (routers: Array<RouterType>, index?: number) => {
  if (!routers || routers.length === 0) return;
  return routers.map((route, index) => {
    if (!route.subs) {
      if (route.indexRoute)
        return <Route key={`${index}`} index element={<route.Component />} />;
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<route.Component />}
        />
      );
    }

    return (
      <Route path={route.path} element={<route.Component />}>
        {routes(route.subs)}
      </Route>
    );
  });
};
export default App;
