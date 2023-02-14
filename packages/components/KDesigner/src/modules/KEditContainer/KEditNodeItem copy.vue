
<script lang="ts" >
import { defineComponent, h, computed, watch, toRaw, PropType, inject, ref } from 'vue'
import draggable from 'vuedraggable'
import KNodeItem from './KNodeItem.vue'
import { getUUID, deepClone, nodeSchema } from '../../../../../utils/index'
import KNode from '../../../../KNode'
import { NodeItem, Designer } from '../../../../../types/kDesigner'
export default defineComponent({
  name: 'KEditNodeItem',
  emits: ['update:schemas'],
  props: {
    schemas: {
      type: Array as PropType<NodeItem[]>
    }
  },
  setup (props, { emit }) {
    const designer = inject('designer') as Designer

    const firstNodeId = ref('')

    const schemas = computed({
      get () {
        // 判断props.schemas是否存在值
        return props.schemas
      },
      set (e) {
        emit('update:schemas', e)
      }
    })

    watch(schemas, (e) => {
      // 判断props.schemas是否存在值
      if (e?.length) {
        // 读取第一个节点id 如果节点id等于root 则判定该节点为根节点
        firstNodeId.value = e[0].id ?? ''
      }
    }, {
      immediate: true
    })

    /**
     * 选中点击节点元素
     * @param index
     */
    function handleSelect (index: number) {
      designer.setCheckedNode(schemas.value![index])
    }

    function handleEnd () {
      designer.setDisableHover()
    }

    /**
     * 复制选中节点元素
     * @param schemas
     * @param schema
     * @param index
     */
    function handleCopy (schemas: NodeItem[], schema: NodeItem, index: number) {
      const node = deepClone({
        ...toRaw(schema),
        id: getUUID()
      })
      schemas.splice(index + 1, 0, node)
      const nodeArray = node.children ? [...node.children] : []
      // 存在子节点时，需要遍历修改子节点id
      while (nodeArray.length > 0) {
        const item = nodeArray.pop()
        item.id = getUUID()
        if (item.children?.length > 0) {
          nodeArray.push(...item.children)
        }
      }
      designer.setCheckedNode(node)
    }

    /**
     * 删除元素
     * @param schemas
     * @param schema
     * @param index
     */
    function handleDelete (schemas: NodeItem[], schema: NodeItem, index: number) {
      schemas = schemas.filter((item, i) => index !== i)
      emit('update:schemas', schemas)
      if (index === schemas.length) {
        index--
      }

      designer.setCheckedNode(schemas[index])
    }

    return () => {
      return h(draggable, {
        modelValue: schemas.value,
        onUpdateModelValue: item => { console.log(item) },

        group: firstNodeId.value === 'root' || 'edit-draggable',
        ghostClass: 'moveing',
        componentData: { name: 'draggable-range' }
      }, {
        item: ({ element }) => {
          // console.log(element, 'data-----------')
          return h(KNodeItem, {
            element
          })
        }
      })
    }
  }
})
</script>
