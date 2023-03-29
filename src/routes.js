import Images from "./pages/images/Images";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Registration from "./pages/registration/Registration";

export const publicRoutes = [
    { path: '/images', element: Images },
    { path: '/login', element: Login },
    { path: '/registration', element: Registration },
    // { path: '/about', element: null },
    // { path: '/images/:id', element: null },
]

export const privateRoutes = [
    { path: '/images', element: Images },
    { path: '/logout', element: Logout },
    // { path: '/profile', element: null },
]