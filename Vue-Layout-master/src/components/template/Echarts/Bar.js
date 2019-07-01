import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
var handle = function(_attr, _slots, info) {
  //定义默认属性
  let attributes = {
    id:{
      type:"text",
      value:"barChart"
    },
    style:{
      type:"text",
      value:"300px"
    },
    width:{
      type:"text",
      value:"300px"
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
  /*let components = JSON.parse(JSON.stringify(_Vue.$store.state.components));
  let stringAttr = getStringTypeAttr(attributes);
  debugger;
  let body = components.find(c => c.info.id === slots.default[0].id)
  console.info(body);*/
  /*let myChart = this.$echarts.init(document.getElementById(info.id));
  // 绘制图表
  myChart.setOption({
    title: {text: '在Vue中使用echarts'},
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  });*/
  //字符串模板操作
  debugger;
  let template =`<div ${stringAttr}>
${subContent}</div>`
  return { template, attributes, slots }
}
export default handle
