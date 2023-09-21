import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '登录',
    component: () => import('*/login/index.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
