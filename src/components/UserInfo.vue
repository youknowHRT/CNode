<template>
  <div class>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>
    <div class="userInformation" v-else>
      <section >
        <div class="topMsg">
          <img :src="userinfo.avatar_url" />
          <span>{{userinfo.loginname}}</span>
        </div>
        <div class="subMsg">
          <p>{{userinfo.score}}积分</p>
          <p>注册时间:{{userinfo.create_at | timeFormat}}</p>
        </div>
      </section>
      <div class="reply_count">
        <p>最近回复的主题</p>
        <ul v-if="topicShow">
          <li v-for="item in userinfo.recent_replies" :key="item.index">
            <router-link
              :to="{
                name:'post_content',
                params:{
                  id:item.id
                }
              }"
            >{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="topic_count">
        <p>最近创建的主题</p>
        <ul v-if="topicShow">
          <li v-for="item in userinfo.recent_topics" :key="item.index">
            <router-link
              :to="{
                name:'post_content',
                params:{
                    id:item.id
              }
            }"
            >{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import url from '../modules/api'
export default {
  name: "",
  data() {
    return {
      isLoading: false,
      userinfo: {},
      topicShow:false
    };
  },
  methods: {
    getData() {
      // this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      this.$http.get(url.userinfo+`${this.$route.params.name}`)
        .then((res) => {
          this.topicShow=true
          this.userinfo = res.data.data;
          this.isLoading = false;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  beforeMount() {
    this.isLoading = true;
    this.getData();
  },
};
</script>

<style scoped lang="scss">
.userInformation {
  background: white;
  width: 75%;
  margin: 10px auto;
  list-style: none;
  section {
    padding: 12px;
    color: #778087;
    font-size: 14px;
    .topMsg {
      display: flex;
      align-items: flex-start;
      span {
        margin-top: 5px;
      }
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    }
    .subMsg > p:first-child {
      color: black;
      margin: 5px 0 10px 0;
    }
  }
  >div{
    font-size: 16px;
    border-top: 15px #dddddd solid;
    p {
      padding: 12px 0 12px 12px;
      background-color: rgba(212, 205, 205, 0.17);
      font-size: 0.75rem;
      margin: 0;
    }
    ul>li{
      padding: 4px 0 4px 12px;
      white-space: nowrap;
      font-size: 0.72rem;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 30px;
      vertical-align: middle;
      a {
        text-decoration: none;
        color: #094e99;
      }
    }
  }
}
</style>
