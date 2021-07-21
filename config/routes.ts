import { IBestAFSRoute } from '@umijs/plugin-layout'

const routers: IBestAFSRoute[] = [
  { exact: true, path: '/', component: '@/pages/index', access: 'normalRouteFilter' },
  { exact: true, path: '/user', component: '@/pages/user', name: 'user', access: 'normalRouteFilter' },
  { exact: true, path: '/admin', component: '@/pages/admin', name: '管理', access: 'adminRouteFilter' },
];


export default routers