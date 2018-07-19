<template>
  <div>
    <div v-show="showResult" v-for="post in article_list" class="all-post clearfix underline">
      <div class="post-title clearfix">
        <router-link :to="{name: 'category', params:{category: post.category}}">
          <div class="pre-cat">
            <div class="pre-catinner btn">
              {{post.category}}
            </div>
            <div class="pre-catarrow">
            </div>
          </div>
        </router-link>
        <h1>
          <router-link :to="{name: 'article', params: {address : post.enTitle}}">{{post.title}}</router-link>
        </h1>

        <span class="visible-xs-inline-block" style="margin-top:7px;">
            {{post.pub_time}}
        </span>
        <div class="post-tags">
          <router-link v-for="(tag, index) in post.get_tags" :key="tag" :to="{name: 'tag', params: {tag : tag}}">
            <span :class="'label label-vmaig-' + index + 'btn'">{{tag}}</span>
          </router-link>
        </div>
      </div>
      <div class="post-content ">
        <div class="row">
          <div class="col-sm-4">
            <figure class="thumbnail">
              <router-link :to="{name: 'article', params: {address: post.enTitle}}">
                <img v-if="post.showImg" :src="post.img" height="400" alt="">
                <img v-else src="/static/img/article/default.jpg" height="400" alt="">
              </router-link>
            </figure>
          </div>
          <div class="col-sm-8">
            <p>
              {{ post.summary | trimText}}
            </p>
          </div>
        </div>
      </div>
      <div class="post-info hidden-xs">
        <span>
            <span class="glyphicon glyphicon-calendar"></span>
            {{ post.pub_time | trimDate}}
        </span>
        <span>
            <span class="glyphicon glyphicon-comment"></span>
            {{post.commentNum}}
        </span>
        <span>
            <span class="glyphicon glyphicon-eye-open"></span>
            {{post.view_times}}
        </span>
      </div>
    </div>
    <div v-show="!showResult"  class="all-post clearfix underline" v-html="substitution">
    </div>


  </div>
</template>

<script>
  export default {
    name: "SearchPost",
    props: ["keyword"],
    data(){
      return{
        article_list: [],
        showResult: true,
      }
    },
    computed:{
      substitution:function(){
        return '<div class="post-content"><i>No posts related to "' +
        this.keyword + '" is found</i></div>'
      }
    },
    filters:{
      trimText: function (text) {
        if (text.length > 200) {
          return text.substring(0, 200) + "...";
        } else {
          return text;
        }
      },
      trimDate: function (date) {
        if (date.length > 10) {
          return date.substring(0, 10);
        } else {
          return date;
        }
      }
    },
    created(){
      this.$axios.post("/api/search/getResult", {
        keyword: this.keyword
      }).then(response => {
        if (response.data["articleList"].length === 0) {
          this.showResult = false;
        } else {
          this.article_list = response.data["articleList"];
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
</script>

<style scoped>

</style>
