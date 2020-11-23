export function postFormat(post){
  switch(true){
    case post.top==true:
      return '置顶';
    case post.good==true:
      return '精华';
    case post.tab=='share':
      return '分享'
    case post.tab=='ask':
      return '问答'
    default:
      return '招聘'
  }
}

export function timeFormat (str){
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
}