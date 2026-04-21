<script lang="ts" setup>
import { computed } from 'vue';

import { EpicIcon, EpicTree } from '@epic-designer/base-ui';
import { useDesignerContext } from '@epic-designer/hooks';
import { pluginManager } from '@epic-designer/manager';
import { findSchemaInfoById, generateNewSchema } from '@epic-designer/utils';

const designer = useDesignerContext();
const pageSchema = designer.pageSchema;

// 计算选中节点值
const selectedKeys = computed(() => {
  const id = designer.state.selectedNode?.id;
  return id ? [id] : [];
});

// 设置选中节点
function handleNodeClick(e: any) {
  designer.setSelectedNode(e.componentSchema);
}

function handleShow(schema) {
  schema.props || (schema.props = {});
  schema.props.hidden = !schema.props.hidden;
}

function handleLock(schema) {
  schema.status || (schema.status = { lock: false });
  schema.status.lock = !schema.status.lock;
}

/**
 * 复制选中节点元素
 */
function handleCopy(schema) {
  if (!schema) return;
  const data = findSchemaInfoById(pageSchema.schemas, schema.id);
  if (!data) {
    return false;
  }
  const { index, schema: newSchema, list } = data;
  const node = generateNewSchema(newSchema, pageSchema.schemas);
  list.splice(index + 1, 0, node);
  designer.setSelectedNode(node);

  designer.revoke.push('复制组件');
}

/**
 * 删除元素
 */
function handleDelete(schema) {
  if (!schema) return;
  const data = findSchemaInfoById(pageSchema.schemas, schema.id);
  if (!data) {
    return false;
  }
  let { index, list } = data;
  list.splice(index, 1);
  if (index === list.length) {
    index--;
  }
  designer.setSelectedNode(list[index]);
  designer.revoke.push('删除组件');
}
</script>
<template>
  <div class="epic-outline">
    <EpicTree
      :options="pageSchema.schemas"
      draggable
      :selected-keys="selectedKeys"
      :hover-key="designer.state.hoverNode?.id ?? ''"
      @node-click="handleNodeClick"
    >
      <template #tree-node="{ schema }">
        <div
          class="ep-outline-item epic-text-padding flex"
          :class="{ hidden: schema.props?.hidden }"
          @mouseenter.stop="designer.setHoverNode(schema)"
          @mouseleave.stop="designer.setHoverNode(null)"
        >
          <span class="max-w-full truncate">
            <EpicIcon
              class="epic-component-icon translate-y-2px"
              :name="pluginManager.component.getIcon(schema.type)"
            />
            {{ schema.label ?? pluginManager.component.getLabel(schema.type) }}
          </span>
          <span class="epic-node-type-text w-0 flex-1 truncate">
            {{ schema.id }}
          </span>

          <!-- 组件操作 start -->
          <div
            v-if="
              !pluginManager.component.getLocked(schema) &&
              schema.id !== designer.pageSchema.schemas[0].id
            "
            class="ep-tree-action"
            :class="{
              active: schema.props?.hidden || schema.status?.lock,
            }"
          >
            <EpicIcon
              v-if="!schema.props?.hidden"
              class="mr-2"
              :class="{ active: schema.status?.lock }"
              :name="
                schema.status?.lock
                  ? 'icon--epic--lock-outline'
                  : 'icon--epic--lock-open-outline'
              "
              @click="handleLock(schema)"
            />
            <EpicIcon
              v-if="!schema.status?.lock"
              class="mr-2"
              :class="{ active: schema.props?.hidden }"
              :name="
                schema.props?.hidden
                  ? 'icon--epic--visibility-off-outline-rounded'
                  : 'icon--epic--visibility-outline-rounded'
              "
              @click="handleShow(schema)"
            />
            <EpicIcon
              v-if="!schema.status?.lock && !schema.props?.hidden"
              class="mr-2"
              name="icon--epic--copy-all-outline-rounded"
              @click="handleCopy(schema)"
            />
            <EpicIcon
              v-if="!schema.status?.lock && !schema.props?.hidden"
              class="mr-2"
              name="icon--epic--delete-outline-rounded"
              @click="handleDelete(schema)"
            />
          </div>
          <!-- 组件操作 end -->
        </div>
      </template>
    </EpicTree>
  </div>
</template>
