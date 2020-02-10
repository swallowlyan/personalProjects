import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
var handle = function(_attr, _slots, info) {
  //定义默认属性
  let attributes = {
    style:{
      type:"text",
      value:"width:300px;height:300px"
    },
    title:{
      type:"text",
      value:"bar"
    },
    xData:{
      type:"Array",
      value:["test1"]
    }
  },
    slots = {
      left: [],
      right: [],
      default: []
    }
    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

  //根据组件不同需要做的不同操作

//获取插槽模板内容
  var subContent = getSlotContent(slots);
  //设置当前组件的slot
  if (attributes.slot && attributes.slot !== 'default') {
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
  let stringAttr = getStringTypeAttr(attributes);
  //字符串模板操作
  let template =`<div ${stringAttr}>
${subContent}</div>`
  return { template, attributes, slots }
}
export default handle
