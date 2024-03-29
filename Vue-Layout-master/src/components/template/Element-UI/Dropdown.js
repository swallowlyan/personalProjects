import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
var handle = function(_attr, _slots, info) {
  //定义默认属性
  let attributes = {
    type:{
      type:"text",
      value:""
    },
    size:{
      type:"text",
      value:"medium"
    },
    splitButton:{
      type:"boolean",
      value:true
    },
  trigger:{
      type:"text",
      value:"medium"
    },
  hideOnClick:{
      type:"boolean",
      value:true
    },
  showTimeout:{
      type:"number",
      value:1
    },
  hideTimeout:{
      type:"text",
      value:"medium"
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
  //字符串模板操作
  let stringAttr = getStringTypeAttr(attributes)
  let template = `<el-dropdown  
                    ${stringAttr}>
                    ${subContent}
                </el-dropdown >`

  return { template, attributes, slots }
}
export default handle
