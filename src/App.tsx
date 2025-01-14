import React, { Suspense } from "react";
import { RouteObject, createHashRouter, RouterProvider } from 'react-router-dom';
import KeepAlive from "@/components/keepalive";
import RootBoundary from "@/components/rootBoundary";

const Home = React.lazy(() => import('@/pages/home/index'));
const My = React.lazy(() => import('@/pages/my/index'));


// 路由映射表
const routes: RouteObject[] = [
    {
        path: '/',
        element: <KeepAlive />,
        children: [
            {
                path: '/home',
                element: <Home />,
                errorElement: <RootBoundary />,
            }
        ]
    },
    {
        path: '/my',
        element: <My />
    },

    // 路由重定向
    {
        path: '/',
        element: <Home />,
        errorElement: <RootBoundary />
    }
];

const router = createHashRouter(routes);


function App() {
    return (
        <Suspense fallback={<div />} >
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;

