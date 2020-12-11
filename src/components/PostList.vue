<template>
  <div class="postlist">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>
    <div class="posts" v-else>
      <div class="topbar">
        <ul>
          <li v-for="item in topbarMsg" :key="item.index">
            <a href="">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="postbar">
        <ul>
          <li v-for="post in posts" :key="post.index">
            <span class="postAvatar"
              ><img :src="post.author.avatar_url+`${Math.random()}`" alt="头像"
            /></span>
            <span class="all_count">
              <span class="reply_count">{{ post.reply_count }}</span>
              <span>/</span>
              <span class="visit_count">{{ post.visit_count }}</span>
            </span>
            <span
              :class="[
                {
                  put_good: post.good == true,
                  put_top: post.top == true,
                  'topiclist-tab': post.good != true && post.top != true,
                },
              ]"
              >{{ post | postFormat }}</span
            >
            <router-link
              :to="{
                name: 'post_content',
                params: {
                  id: post.id,
                  name: post.author.loginname,
                },
              }"
            >
              <span class="post_title">{{ post.title }}</span>
            </router-link>
            <span class="last_reply">{{
              post.last_reply_at | timeFormat
            }}</span>
          </li>
          <!-- <li><pagination @transPostpage='renderPost'></pagination></li> -->
          <div class="paginationForUse">
            <bu-pagination :totalPage="50" :currentPage.sync="postPage" hideIfOnePage></bu-pagination>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import url from '../modules/api'
export default {
  name: "",
  data () {
    return {
      isLoading: false,
      topbarMsg: ['全部', '精华', '分享', '问答', '招聘'],
      posts: [],
      postPage: 1
    }
  },
  methods: {
    getData () {
      this.$http.get(url.topics, {
        params: {
          page: this.postPage,
          limit: 20,
          tab:this.$route.params.tab
        }
      })
        .then((res) => {
          this.posts = res.data.data
          this.isLoading = false
          // console.log(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        })
    },
  },
  beforeMount () {
    this.isLoading = true
    this.getData()
  },
  watch:{
    postPage(){
      this.getData()
    }
  }
}
</script>

<style  scoped lang="scss" >
.postlist {
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    text-align: center;
    padding: 30px 0;
    height: 100vh;
  }
  .posts {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    .topbar {
      line-height: 20px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      ul {
        display: flex;
        list-style: none;
        padding: 10px;
        flex-wrap: wrap;
        li {
          a {
            font-size: 14px;
            color: #80bd01;
            margin: 0 10px;
            cursor: pointer;
            text-decoration: none;
            &:hover {
              color: #005580;
            }
          }
        }
      }
    }
    .postbar {
      background-color: #fff;
      ul {
        list-style: none;
        li {
          padding: 9px;
          font-size: 16px;
          font-weight: 400;
          background-color: white;
          color: #333;
          border-top: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          &:hover {
            background: #f5f5f5;
          }
          .postAvatar {
            img {
              height: 30px;
              width: 30px;
              vertical-align: middle;
            }
          }
          a {
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-decoration: none;
            overflow: hidden;
            color: black;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

/*文章列表的CSS部分*/
.all_count {
  width: 70px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.reply_count {
  color: #9e78c0;
  font-size: 14px;
}
.visit_count {
  color: #b4b4b4;
  font-size: 10px;
}
//使用继承
%sortbox {
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;
  margin-right: 10px;
}
.put_good,
.put_top {
  background: #80bd01;
  color: #fff;
  @extend %sortbox;
}
.topiclist-tab {
  background: #e5e5e5;
  color: #999;
  @extend %sortbox;
}
.last_reply {
  text-align: right;
  min-width: 50px;
  white-space: nowrap;
  color: #778087;
  font-size: 12px;
  flex: 1;
}
.paginationForUse {
  height: 50px;
  display: flex;
  margin:5px 5px 20px;
  padding: 0 5px;
  align-items: center;
  border: 1px solid rgb(233, 227, 227);
  border-radius: 5px;
}
</style>
