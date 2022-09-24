import PageContainer from "./components/PageContainer"
import BookDetail from "./pages/BookDetail"
import Chapter from "./pages/Chapter"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

export interface RouterType {
    id: number,
    path?: string,
    Component: () => JSX.Element,
    indexRoute?: boolean,
    subs?: Array<RouterType>
}
const router: Array<RouterType> = [
    {
        id: 1,
        path: '/login',
        Component: Login
    },
    {
        id: 2,
        path: '/register',
        Component: Register
    },
    {
        id: 3,
        path: '/',
        Component: PageContainer,
        subs: [
            {
                id: 1,
                indexRoute: true,
                Component: Home
            },
            {
                id: 2,
                path: ':slug',
                Component: BookDetail
            },
            {
                id: 3,
                path: ':slug/:chapter/:chapterId',
                Component: Chapter
            },
            // {
            //     id: 4,
            //     path: '/the-loai',
            //     Component: null
            // }
        ]
    }

]



export default router