<template>
    <div class="article">
      <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
            <div class="topic_header">
                <div class="topic_title">
                    <span v-if="post.top=true">置顶 - </span>
                    <span>{{post.title}}</span>
                </div>
                <div class="article_message">
                    <ul>
                        <li> • 发布于{{post.create_at | timeFormat}} </li>
                        <li> • 作者 {{post.author.loginname}}</li>
                        <li> • {{post.visit_count}}次浏览</li>
                        <li> • 来自 {{post | postFormat}}</li>
                    </ul>
                </div>
                <div v-html='post.content' class="topic_content" id="content"></div>
            </div>

            <div class="reply_part">
                <div class="topbarCount">{{post.reply_count}} 回复</div>
                <div v-for="(reply,index) in post.replies" :key="index" class="replySec">
                    <div class="replyUp">
                        <router-link :to="{
                            name:'user_info',
                            params:{
                                name:reply.author.loginname
                            }
                        }">
                            <img :src="reply.author.avatar_url+`${Math.random()}`" alt="">
                        </router-link>
                       
                        <span>{{reply.author.loginname}}</span>
                        <span>{{index+1}}楼</span>
                        <span>•{{reply.create_at | timeFormat}} </span>
                        <span> 👍{{reply.ups}} </span>
                        <span class="authorHimself" v-if="reply.author.loginname==post.author.loginname">作者</span>
                    </div>
                    <p v-html='reply.content'></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import url from '../modules/api'
export default {
   name:"",
   data() {
      return {
        isLoading:false,
        post:[]
      }
   },
   methods:{
     getData(){
      //  this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
      //  this.$http.get(`https://52.197.183.123/api/v1/topic/${this.$route.params.id}`)
       this.$http.get(url.article+`${this.$route.params.id}`)
       .then(res=>{
         if(res.data.success==true){
          this.post = res.data.data
          this.isLoading=false
         }
       })
     }
   },
   beforeMount() {
     this.isLoading=true
     this.getData()
   },
   watch:{
     '$route'(to,from){
       this.getData()
     }
   }
}
</script>

<style lang="scss">
  @import url('../assets/markdown-github.css');
  #content{
    box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 20px;
      font-size: 16px;
  }
  .markdown-text >p>img{
    width: 70%;
    height: auto;
    margin-bottom: 5px;
  }

  @media (max-width: 767px) {
      #content {
        padding: 15px;
      }
  }
/*👆markcss*/

  
  /* .article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
  } */
  .article{
    float: left;
    width: 70%;
    .loading{
      text-align: center;
      padding-top: 300px;
    }
    div>div{
    background: #fff;
    }
    .topic_header{
      padding: 10px;
      .topic_title{
        font-size:20px;
        font-weight:bold;
        padding-top:8px;      
      }
      .article_message{
        ul{
          list-style:none;
          padding:0;
          margin: 6px 0;
          li{
            display: inline-block;
            font-size:12px;
            color: #838383
          }
        }
      }
      .topic_content{
        border-top: 1px solid #e5e5e5;
        padding: 0 10px;
      }
    }
    .reply_part{
      margin-top: 15px;
      .topbarCount{
        padding: 8px;
        background: #f6f6f6;
        height: 16px;
        line-height: 14px;
        font-size: 14px;
        margin-top: 10px;
      }
       .replySec{
        border-bottom: 1px solid #e5e5e5;
        padding: 0 10px 15px 0;
        .replyUp{
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          line-height: 1.5;
          img{
            margin-left:5px;
            width: 30px;
            height: 30px;
            position: relative;
            bottom: -9px;
          }
          span{
            font-size:13px;
            color:#666;
            text-decoration: none;
            &:nth-child(2){
              margin: 0 5px 0 8px;
            }
            &:nth-child(3){
              color:#005580
            }
            &:nth-child(4){
              color:#005580
            }
          }
          .authorHimself{
            background-color: #6BA44E;
            color: #fff !important;
            padding: 1px;
            line-height: 1em;
            margin-left: 5px;
          }
        }
        p{
          padding-left: 43px;
          font-size: 15px
        }
      }
    }
  }
 
  
  
 
  

  
</style>
