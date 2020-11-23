<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
// import PostList from './components/PostList'
export default {
  name: 'App',
  components: {
    Header,
    // PostList
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  background: #E1E1E1;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background: #E1E1E1; */

}
.main{
    width: 90%;
    margin: 15px auto;
}


</style>
