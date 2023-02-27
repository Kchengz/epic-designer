import { defineComponent, h, watch } from "vue";
import { ElButton } from "element-plus";
import { handleActions } from './util'
// 二次封装组件
export default defineComponent({
  //emits: ["update:modelValue"],
  setup(_, { emit, attrs }) {
    /*watch(
      () => attrs.type,
      () => {
        handleUpdate();
      }
    );*/

    function handleUpdate(e = null) {
      //emit(`update:modelValue`, e);
    }

    function handleAction(e = null) {
      console.log("点击action1:" + JSON.stringify(e))
      handleActions(attrs.record.componentProps.eventActions, 'onClick')
    }

    return {
      attrs,
      handleUpdate,
      handleAction
    };
  },
  render() {
    let cmp: any = ElButton;
    // const type = this.attrs.type;


    const props: { [propName: string]: any } = {
      ...this.attrs,
      //"onUpdate:modelValue": this.handleUpdate,
      "onClick": this.handleAction
    };

    // console.log("按钮attrs:" + JSON.stringify(this.attrs))
    // console.log("按钮props:" + JSON.stringify(props))

    return h(cmp, props, { default: () => [props.record.label] })


  },
});
