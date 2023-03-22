import Images from "./pages/images/Images";

export const publicRoutes = [
    { path: '/images', element: Images },
    // { path: '/about', element: null },
    // { path: '/images/:id', element: null },
]

export const privateRoutes = [
    ...publicRoutes,
    { path: '/profile', element: null },
]