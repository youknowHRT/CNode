<template>
    <div class="header">
      <a href=""><img src="../assets/cnodejs_light.svg" alt=""></a>
      <ul>
        <li v-for='item in menu' :key=item.index><a href="">{{item}}</a></li>
      </ul>
    </div>
</template>

<script>
export default {
   name:"Header",
   data() {
      return {
        menu:['首页']
        // menu:['首页','新手入门','API','关于','登录','注册']
      }
   },
}
</script>

<style scoped lang="scss">
  .header{
    background: #444;
    max-height: 400px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    >a{
      margin-left: 5%;
      padding: 2px 20px;
      img{
        width: 120px;
      }
    }
    ul{
      list-style:none;
      margin-right:60px;
      display: flex;
      flex-wrap: wrap;
      li{
        padding: 10px 15px;
        a{
          text-decoration: none;
          color: #ccc;
          font-size:13px;
          line-height: 20px;
          text-shadow:none;
          white-space: nowrap;
          &:hover{
            color: white;
          }
        }
      }
    }
  }
  
  
  
 
</style>
