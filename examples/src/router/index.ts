import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";

// 定义每个 UI 框架的子路由信息
export const frameworkRoutes = [
  {
    path: "/:ui/designer",
    name: "designer",
    component: () => import("@/views/designer/index.vue"),
    meta: {
      title: "设计器",
    },
  },
  {
    path: "/:ui/builder",
    name: "builder",
    component: () => import("@/views/builder/index.vue"),
    meta: {
      title: "生成器",
    },
  },
];

// 所有可用的 UI 框架列表
// const frameworks = [
//   {
//     path: "/ant-designe-vue",
//     name: "antDesigneVue",
//   },
//   {
//     path: "/element-plus",
//     name: "elementPlus",
//   },
//   {
//     path: "/naive-ui",
//     name: "naiveUi",
//     meta: {
//       title: "设计器",
//     },
//   },
// ];

// 生成 UI 框架的路由信息
// export const uiRoutes = frameworks.map((item) => {
//   return {
//     path: item.path,
//     component: Layout,
//     name: item.name,
//     meta: {
//       title: item.name,
//     },
//     redirect: `/${item.path}/designer`,
//     children: frameworkRoutes.map((route) => {
//       return {
//         ...route,
//         name: item.name + route.name,
//       };
//     }),
//   };
// });

const routes = [
  {
    path: "/",
    redirect: "/ant-designe-vue/designer",
  },
  {
    path: "/:ui",
    component: Layout,
    name: "uiFrameworks",
    redirect: `/:ui/designer`,
    children: frameworkRoutes.map((route) => {
      return {
        ...route,
        name: route.name,
      };
    }),
  },
  // Resolve refresh page, route warnings
  {
    path: "/:pathMatch(.*)*",
    redirect: "/ant-designe-vue",
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
