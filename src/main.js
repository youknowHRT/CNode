import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import url from './modules/api.js'
import BuliUi from 'buli-ui'  
import 'buli-ui/dist/buli-ui.css'  
Vue.use(BuliUi)  
// import * as filters from './filter/index.js'

Vue.prototype.$http=axios

Vue.config.productionTip = false

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.filter('postFormat',(post)=>{
  if(post.top==true){
    return '置顶'
  }else if(post.good==true){
    return '精华'
  }else if(post.tab=='share'){
    return '分享'
  }else if(post.tab=='ask'){
    return '问答'
  }else{
    return '招聘'
  }
})

Vue.filter('timeFormat',(str)=>{
  if(!str) return ''
  let replyTime =new Date(str)
  let time =new Date().getTime()-replyTime.getTime()
  if(time<0){
    return ''
  }else if((time/1000)<30){
    return '刚刚'
  }else if((time/1000)<60){
    return parseInt(time/1000)+'秒前'
  }else if((time/60000)<60){
    return parseInt(time/60000)+'分钟前'
  }else if((time/3600000)<24){
    return parseInt(time/3600000)+'小时前'
  }else if((time/86400000)<31){
    return parseInt(time/86400000)+'天前'
  }else if((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '个月前'
  }else{
    return parseInt(time / 31536000000) + '年前'
  }
})


new Vue({
  render: h => h(App),
  router,url
}).$mount('#app')