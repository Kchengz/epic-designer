import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import BaseLayout from "@/layout/baseLayout.vue";

// 定义每个 UI 框架的子路由信息
export const frameworkRoutes = [
  {
    path: "/:ui/designer",
    name: "designer",
    component: BaseLayout,
    meta: {
      title: "设计器",
    },
    children: [
      {
        path: "/:ui/basic",
        name: "basic",
        component: () => import("@/views/designer/basic/index.vue"),
        meta: {
          title: "基础用法",
        },
      },
      {
        path: "/:ui/loadData",
        name: "loadData",
        component: () => import("@/views/designer/loadData/index.vue"),
        meta: {
          title: "加载数据",
        },
      },
    ],
  },
  {
    path: "/:ui/builder",
    name: "builder",
    component: BaseLayout,
    meta: {
      title: "生成器",
    },
    children: [
      {
        path: "/:ui/builder",
        name: "builder",
        component: () => import("@/views/builder/basic/index.vue"),
        meta: {
          title: "基础用法",
        },
      },
    ],
  },
];

const routes = [
  {
    path: "/",
    component: Layout,
    name: "uiFrameworks",
    redirect: "/ant-designe-vue/basic",
    children: frameworkRoutes,
  },
  // Resolve refresh page, route warnings
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
