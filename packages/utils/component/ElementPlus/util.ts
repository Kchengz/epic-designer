
import { ref, inject } from "vue"
import { enrichButtonActions } from "@/utils/buttonActions";
import ContextStore from '@/stores/modules/context'

export const getContext = () => {
    const store = ContextStore()

    const modelId = inject('modelId')
    const jsonId = inject('jsonId')

    const formData = ref()
    formData.value = store[modelId]

    const formJson = ref()
    formJson.value = store[jsonId]
    return { formData: formData.value, formJson: formJson.value, modelId, jsonId }
}


export const handleAction = async (actions: any) => {
    const context = getContext()
    const fn = enrichButtonActions(JSON.parse(actions), { ...context })

    await fn()
}

export const handleActions = async (params: any, actionType: string = 'onClick') => {
    console.log("按钮配置的动作列表:" + (typeof params) + ":" + JSON.stringify(params))

    let eventActions = JSON.parse(JSON.stringify(params))

    if (!eventActions.some(eventAction => eventAction.type == actionType && eventAction.actions?.length > 0)) return
    const eventAction = eventActions.find(ea => ea.type == actionType)
    console.log("其中onClick点击的动作:" + eventAction)

    const context = getContext()

    const fn = enrichButtonActions(JSON.parse(eventAction.actions), { ...context })
    await fn()
}

export const handleRowClickAction = async (actions, row, widget = '') => {
    console.log('行点击:' + actions)
    console.log("行参数:" + JSON.stringify(row))

    const context = ContextStore()
    context['CurrentRow'] = row

    if (widget) {
        context['widgets'][widget]['clickedRow'] = row
    }

    const fn = enrichButtonActions(JSON.parse(actions), { ...context })
    await fn()
}