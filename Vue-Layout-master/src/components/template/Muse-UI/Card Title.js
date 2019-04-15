import { getTemplate, getSlotContent , getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'

var handle = function(_attr, _slots, _info) {
    //定义默认属性
    let attributes = {
            title: {
                type: 'text',
                value: 'Title'
            },
            titleClass:{
                type:'text',
                value:''
            },
            subTitle:{
                type:'text',
                value:'subTitle'
            },
            subTitleClass:{
                type:'text',
                value:''
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots)

    //设置当前组件的slot
    if (attributes.slot && attributes.slot!=='default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<mu-card-title 
                    ${stringAttr} />`

    return { template, attributes, slots }
}
export default handle
