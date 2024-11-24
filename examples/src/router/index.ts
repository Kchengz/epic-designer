import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import BaseLayout from "@/layout/baseLayout.vue";
import BuilderLayout from "@/layout/builderLayout.vue";

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
        path: "basic",
        name: "basic",
        component: () => import("@/views/designer/basic/index.vue"),
        meta: {
          title: "基础用法",
        },
      },
      {
        path: "loadData",
        name: "loadData",
        component: () => import("@/views/designer/loadData/index.vue"),
        meta: {
          title: "数据回显",
        },
      },
      {
        path: "formMode",
        name: "formMode",
        component: () => import("@/views/designer/formMode/index.vue"),
        meta: {
          title: "表单模式",
        },
      },
    ],
  },
  {
    path: "/:ui/builder",
    name: "builder",
    component: BuilderLayout,
    meta: {
      title: "生成器",
    },
    children: [
      {
        path: "basic",
        name: "builderBasic",
        component: () => import("@/views/builder/basic/index.vue"),
        meta: {
          title: "基础用法",
        },
      },
      {
        path: "loadData",
        name: "builderLoadData",
        component: () => import("@/views/builder/loadData/index.vue"),
        meta: {
          title: "数据回显",
        },
      },
      {
        path: "loadFormData",
        name: "builderLoadFormData",
        component: () => import("@/views/builder/loadFormData/index.vue"),
        meta: {
          title: "数据回显2",
        },
      },
      {
        path: "disableDisplay",
        name: "disableDisplay",
        component: () => import("@/views/builder/disableDisplay/index.vue"),
        meta: {
          title: "禁用隐藏",
        },
      },
      {
        path: "sum",
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
    redirect: "/ant-designe-vue/designer/basic",
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
