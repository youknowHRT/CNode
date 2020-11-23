// let host = 'http://mock.hunger-valley.com/cnode/api/v1'
// let host = ' https://52.197.183.123/api/v1'
// let host = 'https://www.easy-mock.com/mock/5fb8db183f90e10d966465a6/api/v1'
let host= 'http://rap2api.taobao.org/app/mock/271351/api/v1'
// https://api.prodless.com/avatar.png
// http://www.splitbrain.org/_static/monsterid/monsterid.php

let url = {
  topics: '/topics',
  article:'/topic/',
  userinfo:'/user/'
}

for (const key in url) {
  if (Object.prototype.hasOwnProperty.call(url,key)) {
    url[key] = host + url[key]
  }
}

export default url


