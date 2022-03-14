import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// sample page routing
const HappifierList = Loadable(lazy(() => import('views/happifier-list')));
const HappifierEdit = Loadable(lazy(() => import('views/happifier-edit')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <HappifierList />
        },
        {
            path: '/happifier/list',
            element: <HappifierList />
        },
        {
            path: '/happifier/edit/:id',
            element: <HappifierEdit />
        }
    ]
};

export default MainRoutes;
