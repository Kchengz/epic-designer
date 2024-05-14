import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import BaseLayout from "@/layout/baseLayout.vue";

// 定义每个 UI 框架的子路由信息
export const frameworkRoutes = [
  {
    path: "/designer",
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
          title: "数据回显",
        },
      },
    ],
  },
  {
    path: "/builder",
    name: "builder",
    component: BaseLayout,
    meta: {
      title: "生成器",
    },
    children: [
      {
        path: "/:ui/builderBasic",
        name: "builderBasic",
        component: () => import("@/views/builder/basic/index.vue"),
        meta: {
          title: "基础用法",
        },
      },
      {
        path: "/:ui/builderLoadData",
        name: "builderLoadData",
        component: () => import("@/views/builder/loadData/index.vue"),
        meta: {
          title: "数据回显",
        },
      },
      {
        path: "/:ui/disableDisplay",
        name: "disableDisplay",
        component: () => import("@/views/builder/disableDisplay/index.vue"),
        meta: {
          title: "禁用隐藏",
        },
      },
      {
        path: "/:ui/sum",
        name: "sum",
        component: () => import("@/views/builder/sum/index.vue"),
        meta: {
          title: "计算求和",
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
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
