import { IBestAFSRoute } from '@umijs/plugin-layout';

const routers: IBestAFSRoute[] = [
  {
    exact: true,
    path: '/',
    component: '@/pages/index',
    access: 'normalRouteFilter',
  },
  {
    exact: true,
    path: '/user',
    component: '@/pages/user',
    name: 'user',
    access: 'normalRouteFilter',
  },
  {
    exact: true,
    path: '/admin',
    component: '@/pages/admin',
    name: 'admin',
    access: 'adminRouteFilter',
  },
  {
    exact: true,
    path: '/curriculum',
    component: '@/layout/index',
    name: 'curriculum',
    access: 'normalRouteFilter',
    routes: [
      {
        exact: true,
        path: '/curriculum/index',
        component: '@/pages/curriculum',
        name: 'index',
      },
    ],
  },
];

export default routers;
