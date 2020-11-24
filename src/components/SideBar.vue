<template>
  <div class="sidebar" v-if="isLoading">
    <div class="topBar" >
      <span>作者</span>
      <div class="topbarPartTwo">
        <router-link
          :to="{
      name: 'user_info',
      params:{
        name:userinfo.loginname
      }
      }"
        >
          <img :src="userinfo.avatar_url" alt />
          <span>{{userinfo.loginname}}</span>
        </router-link>
      </div>
      <div class="topbarPartThree">
        <p>{{userinfo.score}}积分</p>
      </div>
    </div>
    <div class="topBar">
      <span>最近主题</span>
      <ul>
        <li v-for="item in topicLimit5" :key="item.index">
          <router-link
            :to="{
                        name:'post_content',
                        params:{
                            id:item.id,
                            name:item.author.loginname
                        }
                    }"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="topBar">
      <span>最近回复</span>
      <ul>
        <li v-for="item in replyLimit5" :key="item.index">
          <router-link
            :to="{
                        name:'post_content',
                        params:{
                            id:item.id,
                            name:item.author.loginname
                        }
                    }"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import url from '../modules/api'
export default {
  name: "SideBar",
  data() {
    return {
      isLoading: false,
      userinfo: {},
    };
  },
  methods: {
    getData() {
      // this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      this.$http.get(url.userinfo+`${this.$route.params.name}`)
      .then((res) => {
        this.userinfo = res.data.data;
        this.isLoading = true;
      })
      .catch(function (err) {
        console.log(err);
      });
    },
  },
  computed: {
    topicLimit5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      } else {
        return "";
      }
    },
    replyLimit5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      } else {
        return "";
      }
    },
  },
  beforeMount() {
    // this.isLoading=true
    this.getData();
  },
};
</script>

<style scoped lang="scss">
  .sidebar {
    width: 28%;
    float: right;
    .topBar{
      margin-bottom: 15px;
      background-color: #fff;
      font-size: 14px;
      .topbarPartTwo {
        a{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 10px;
          text-decoration: none;
          color: #778087;
          font-size: 16px;
          img {
            height: 48px;
            width: 48px;
            border-radius: 3px;
            margin-right: 10px;
          }
        }
      }
      .topbarPartThree{
        display: inline-block;
        margin-left: 10px;
        line-height: 2em;
      }
      >span{
        display: block;
        padding: 10px;
        background: #f6f6f6;
        height: 16px;
        font-size: 13px;
        color: #444;
      }
      ul {
        list-style: none;
        margin-top: 0;
        margin-bottom: 0;
        padding: 10px;
        li {
          line-height: 30px;
          a {
            text-decoration: none;
            color: #778087;
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 100%;
            vertical-align: middle;
          }
        }
      }
    }
  }

</style>
