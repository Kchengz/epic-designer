import { defineComponent, h, watch } from "vue"
import 'element-plus/es/components/select/style/css'
import { ElSelect, ElOption } from "element-plus"

// 二次封装组件
export default defineComponent({
  emits: ["update:modelValue"],
  setup(_, { emit, attrs }) {

    function handleUpdate(e = null) {
      emit(`update:modelValue`, e);
    }

    return {
      attrs,
      handleUpdate
    };
  },
  render() {
    const props: { [propName: string]: any } = {
      ...this.attrs,
      "onUpdate:modelValue": this.handleUpdate,
    };

    console.log("选择框属性: " + JSON.stringify(props))
    if (props.hidden == "true") {
      console.log("字段隐藏")
      props['v-show'] = false
    }

    //console.log("下拉选择:" + JSON.stringify(this.attrs))
    //console.log("下拉选择:" + JSON.stringify(props))

    /*return h(ElSelect, props, {
      default: () => [
        props.record.Option?.map((option: any) =>
          h(ElOption, { label: option.label, value: option.value })
        ),

      ]
    })*/

    return h("div", {}, {
      default: () => [
        h(ElSelect, props, {
          default: () => [
            props.record.Option?.map((option: any) =>
              h(ElOption, { label: option.label, value: option.value })
            ),

          ]
        })
      ],
    });


  },
});
