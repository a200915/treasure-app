import type { RouteRecordRaw } from 'vue-router';
const novel: RouteRecordRaw[] = [
  {
    path: '/novel',
    name: 'novel',
    component: () => import('@/views/novel-page/index.vue'),
    children: [
      {
        path: 'recommend',
        name: 'recommend',
        component: () => import('@/views/novel-page/RecommendPage.vue'),
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/novel-page//CategoryPage.vue'),
      },
      {
        path: 'bookshelf',
        name: 'bookshelf',
        component: () => import('@/views/novel-page/BookselfPage.vue'),
      },
      {
        path: 'collect',
        name: 'collect',
        component: () => import('@/views/novel-page/CollectPage.vue'),
      },
    ],
  },
];
export default novel;
