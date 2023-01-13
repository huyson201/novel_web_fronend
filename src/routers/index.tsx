import App from "@src/App";
import PageContainer from "@src/components/PageContainer";
import { lazy } from "react";
import { menuList } from "@src/utils";
import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import { withBooks } from "@src/hooks/withBooks";

const Home = lazy(() => import("@src/pages/Home"));
const Login = lazy(() => import("@src/pages/Login"));
const Register = lazy(() => import("@src/pages/Register"));
const BookDetail = lazy(() => import("@src/pages/BookDetail"));
const Chapter = lazy(() => import("@src/pages/Chapter"));
const Category = lazy(() => import("@src/pages/Category"));
const Account = lazy(() => import("@src/pages/Account"));
const Profile = lazy(() => import("@src/pages/Account/Profile"));
const Bookcase = lazy(() => import("@src/pages/Bookcase"));
const PrivateRoute = lazy(() => import("@src/components/PrivateRoute"));
const Books = lazy(() => import("@src/pages/Books"));
const BookRank = lazy(() => import("@src/pages/BookRank/BookRank"));
const CateWrapper = lazy(() => import("@src/components/CateWrapper"));
const NotMatch = lazy(() => import("@src/pages/NotMatch"));

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        path: "/",
        element: <PageContainer />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: ":slug",
            element: <BookDetail />,
          },
          {
            path: ":slug/:chapter/:chapterId",
            element: <Chapter />,
          },
          {
            path: "/the-loai",
            element: <CateWrapper />,
            children: [
              {
                path: ":cateSlug",
                element: <Category />,
              },
            ],
          },
          {
            path: "/danh-sach",
            element: <CateWrapper />,
            children: [
              {
                path: "bxh",
                element: <BookRank />,
              },
              ...menuList.map((data, index) => {
                const ListBookComponent = withBooks(Books, {
                  fetchData: async (page: number) =>
                    data.fetchData({ page: page }),
                  title: data.name,
                });
                return {
                  path: data.slug,
                  element: <ListBookComponent />,
                };
              }),
            ],
          },
          {
            path: "account",
            element: (
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            ),
            children: [
              {
                index: true,
                element: <Bookcase />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotMatch title="Trang này không tồn tại hoặc bị xóa" />,
      },
    ],
  },
]);
