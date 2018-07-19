<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="tool" class="well clearfix">
        <div class="tags">
          <div class="tag-list" style="float:left">
            <label class="active">
              全部
              <input type="radio" name="category" value="all" style="display:none"/>
            </label>
            <label v-if="showCategory" v-for="category in category_list">
              {{category.name}}
              <input type="radio" name="category" :value="category.name" style="display:none"/>
            </label>
          </div>
        </div>
      </div>

      <div class="well">
        <div class="sort">
          <label>
            <input type="radio" name="sort" value="time" checked="checked"> 按时间排序
          </label>
          <label>
            <input type="radio" name="sort" value="recommend"> 按热度排序
          </label>
          <label>
            <input type="radio" name="sort" value="comment"> 按评论排序
          </label>
        </div>

        <div id="all-post-list" v-if="showArticle">
          <AllPost :article_list="article_list"></AllPost>
        </div>
        <div v-else v-html="substitution"></div>
        <div id="loading" style="height:100px;line-height:100px;text-align:center;display:none;">
          <img src="http://vmaig.qiniudn.com/loading.gif" alt="">
        </div>


      </div>
      <button id="all-post-more" type="button" class="btn btn-vmaig" value="all" style="width:100%">
        加载更多
        <span class="glyphicon glyphicon-menu-down"></span>
      </button>

    </div>
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <TagsCloud></TagsCloud>
      <Search></Search>
      <HotestPost :hot_article_list="hottest_article" :show_hot_post="showHotPost"></HotestPost>
      <LattestComment :latest_comment_list="latestComment" :show_latest_comment="showLatestComment"></LattestComment>
    </div>

  </div>
</template>

<script>
  import AllPost from './include/AllPost'
  import TagsCloud from "./widgets/TagsCloud";
  import Search from "./widgets/Search";
  import HotestPost from "./widgets/HotestPost";
  import LattestComment from "./comment/LatestComment";

  export default {
    name: "All",
    data() {
      return {
        category_list: [],
        showCategory: true,
        showArticle: true,
        substitution: "<div class='home-post well clearfix'>\n<div class='post-title " +
        "underline clearfix'><h1>There is no articles posted yet!!!!</h1></div></div>",
        article_list: [],
        latestComment: [],
        hottest_article: [],
        showHotPost: true,
        showLatestComment: true
      }
    },
    components: {
      LattestComment,
      HotestPost,
      Search,
      TagsCloud,
      AllPost
    },
    created() {
      this.$axios("http://localhost:8080/api/all/doIndex").then(response => {
        if (response.data["category_list"].length === 0) {
          this.showCategory = false;
        } else {
          this.category_list = response.data["category_list"];
        }

        if (response.data["article_list"] === 0) {
          this.showArticle = false;
        } else {
          this.article_list = response.data["article_list"];
        }
      }).catch(error => {
        console.log(error);
      });

      this.$axios("http://localhost:8080/api/sideWidgets").then(response => {
        if (response.data["hot_article_list"].length === 0) {
          this.showHotPost = false;
        } else {
          this.hottest_article = response.data["hot_article_list"];
        }
        if (response.data["latest_comment_list"].length === 0) {
          this.showLatestComment = false;
        }
        else {
          this.latestComment = response.data["latest_comment_list"];
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
</script>

<style scoped>

</style>
