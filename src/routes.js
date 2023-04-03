import Images from "./pages/images/Images";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Registration from "./pages/registration/Registration";
import Single from "./pages/single/Single";

export const publicRoutes = [
    { path: '/images', element: Images },
    { path: '/login', element: Login },
    { path: '/registration', element: Registration },
    { path: '/images/:id', element: Single },
    // { path: '/about', element: null },
]

export const privateRoutes = [
    { path: '/images', element: Images },
    { path: '/images/:id', element: Single },
    // { path: '/profile', element: null },
    { path: '/logout', element: Logout },
]