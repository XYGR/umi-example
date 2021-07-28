import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: false,
  },
  fastRefresh: {},
  mfsu: { production: { output: '.mfsu-production' } },
  routes: routes,
  layout: {
    locale: true,
  },
});
