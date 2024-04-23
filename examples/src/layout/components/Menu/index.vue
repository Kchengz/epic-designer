<template>
    <Menu class="h-full" :selectedKeys="[routeName]" id="dddddd" mode="inline" @click="handleClick" :items="items"></Menu>
</template>
<script lang="ts" setup>

import { Menu, type MenuProps } from 'ant-design-vue'

import { type RouteRecordRaw, useRouter,useRoute } from 'vue-router'
import { frameworkRoutes } from '@/router'
import { computed } from 'vue'


const router = useRouter()
const route = useRoute()

const items = traverseRoutes(frameworkRoutes)

const routeName = computed(() => {
    return route.name as string
})



// 修改后的递归函数用于遍历树形结构并修改数据
function traverseRoutes(routes: RouteRecordRaw[]) {
    return routes.map((route) => {
        // 创建一个新的对象来存储修改后的节点信息
        const modifiedRoute: any = {
            key: route.name,
            label: route.meta?.title,
            // 在这里您可以根据需要修改其他属性
        };

        // 如果节点有子节点，则递归调用遍历子节点
        if (route.children) {
            modifiedRoute.children = traverseRoutes(route.children);
        }

        return modifiedRoute;
    });
}

const handleClick: MenuProps['onClick'] = e => {
    router.push({ path: '/ant-designe-vue/'+e.key })
};
</script>