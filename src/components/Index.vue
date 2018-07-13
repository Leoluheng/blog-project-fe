<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <!-- 警告框 -->
      <div class="well alert hidden-xs fade in">
        <button class="close" data-dismiss="alert" type="button">&times;</button>
        A practice blog service built by Leo Lu with reference to Vmaig_blog (the original author)
      </div>
      <div class="visible-xs">
        <div class="search">
          <form class="form-inline clearfix" role="form" method="get" action="/search">
            <input type="text" class="form-control" id="top-s" name="s">
            <button class="btn btn-vmaig">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </form>
        </div>
      </div>
      <!-- 首页文章列表 -->
      <div id="home-post-list">
        <!-- 首页轮播 -->
        <!--#include("include/carousel.html")-->
        <Carousel></Carousel>
        <!--首页文章列表 -->

        <span id="home-post">
          <!--#include("include/home_post.html")-->
          <homePost :article_list="article_list"></homePost>
        </span>
        <!--分页 -->
        #if(null != page_obj)
        <Pagination></Pagination>
        #end
      </div>
    </div>

    <!-- 右边的widgets -->
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <!--#include("widgets/tags_cloud.html")-->
      <TagsCloud></TagsCloud>
      <!--#include("widgets/search.html")-->
      <Search></Search>
      <!--#include("widgets/hotest_posts.html")-->
      <HotestPost :hot_article_list="hottest_article"></HotestPost>
      <!--#include("vmaig_comments/latest_comments.html")-->
      <LattestComment :latest_comment_list="latestComment"></LattestComment>
      <span id="vmaig-link">
        <!--#include("widgets/links.html")-->
        <Links :links="links"></Links>
      </span>
    </div>
  </div>
</template>

<script>
  import Carousel from './include/Carousel'
  import HomePost from './include/HomePost'
  import Pagination from './include/Pagination'
  import TagsCloud from './widgets/TagsCloud'
  import Search from './widgets/Search'
  import HotestPost from "./widgets/HotestPost";
  import Links from "./widgets/Links";
  import LattestComment from "./comment/LattestComment";

  export default {
    name: "Index",
    data() {
      return {
        article_list: [],
        links: [],
        latestComment: [],
        hottest_article: []
      }
    },
    components: {
      LattestComment,
      Carousel,
      HomePost,
      Pagination,
      TagsCloud,
      Search,
      Links,
      HotestPost
    },
    created() {
      this.$axios("http://localhost:8080/api/doIndex").then(response => {
        if (response.data("article_list").length === 0) {
          $("#home-post-list").html("<div class='home-post well clearfix'>\n<div class='post-title underline clearfix'>" +
            "\n<h1>There is no articles posted yet!!!!</h1></div></div>");
        }
        else {
          this.article_list = response.data("article_list");

        }
        if (response.data("links").length !== 0) {
          this.links = response.data("links");
        } else {
          $("#links").empty().html("<div class='padding10 list-group collapse in'><h1>Our blog site" +
            " has no friends...Sad</h1></div>");
        }
      }).error(error => {
        console.log(error);
      });

      this.$axios("http://localhost:8080/api/sideWidgets").then(response => {
        if (response.data("hot_article_list").length === 0) {
          $("#hotest-post-list").empty();
        } else {
          this.hottest_article = response.data("hot_article_list");
        }
        if (response.data("latest_comment_list").length === 0) {
          $("#latest-comment-list").empty();
        }
        else {
          this.latestComment = response.data("latest_comment_list");
        }
      }).error(error => {
        console.log(error);
      });

    }
  }
</script>

<style scoped>
  #tags_cloud {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    margin-bottom: 20px;
  }

  /*nav中 login弹出窗口中的样式*/
  #login-button {
    float: right;
  }

  #forgetpassword {
    float: right;
  }

  #forgetpassword a {
    color: red;
    font-size: 14px;
    line-height: 30px;
  }

  /**************************/

  /*首页右侧登陆界面样式*/
  .login-form {
    padding: 30px 20px;
  }

  .login-form .btn {
    width: 48%;
    padding: 10px;
  }

  /**************/

  /*首页右侧的 search 样式*/
  .search {
    padding: 8px;
    margin-bottom: 30px;
    border-radius: 4px;
    color: #FFF;
    background-color: #222;
    border-color: #EEE;
    box-shadow: 0px 0px 5px #C2C2C2;
  }

  .search input {
    width: 80% !important;
    float: left;
    margin-right: 5px;
  }

  /*************************/

  /*首页右侧的 热门文章面板样式*/
  .hotest-post-title {
    display: inline-block;
    overflow: hidden;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /*首页右侧的分类面板*/
  .pills-vmaig {
    padding: 10px;
    border-bottom: 1px solid #EEE;
  }

  .tab-content {
    padding: 10px;
  }

  .tab-content .label {
    display: block;
    float: left;
    margin: 5px;
  }

  .list-group-item {
    border: solid inset #EEE;
  }

  .navbar-vmaig .navbar-brand {
    font-weight: bold;
    font-size: 25px;
    margin-right: 10px;
    color: #000;
    text-shadow: 1px 2px 5px rgba(255, 255, 255, 0.1), 0px 0px 30px rgba(255, 255, 255, 0.125);
  }

  .navbar-vmaig .navbar-text {
    margin: 30px 0px 0px 0px;
    font-weight: bold;
    color: #000;
    text-shadow: 1px 2px 5px rgba(255, 255, 255, 0.1), 0px 0px 30px rgba(255, 255, 255, 0.125);
  }
</style>
