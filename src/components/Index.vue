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
      <div id="home-post-list" v-if="showHomePost">
        <!-- 首页轮播 -->
        <!--#include("include/carousel.html")-->
        <Carousel></Carousel>
        <!--首页文章列表 -->

        <span id="home-post">
          <!--#include("include/home_post.html")-->
          <homePost :article_list="article_list"></homePost>
        </span>
        <!--分页 -->
        <Pagination></Pagination>
      </div>
      <div v-else v-html="substitution"></div>
    </div>

    <!-- 右边的widgets -->
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <TagsCloud></TagsCloud>
      <Search></Search>
      <HotestPost :hot_article_list="hottest_article" :show_hot_post="showHotPost"></HotestPost>
      <LatestComment :latest_comment_list="latestComment" :show_latest_comment="showLatestComment"></LatestComment>
      <span id="vmaig-link" v-if="showLinks">
        <Links :links="links"></Links>
      </span>
      <span v-else v-html="substitutionLinks"></span>
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
  import LatestComment from "./comment/LatestComment";

  export default {
    name: "Index",
    data() {
      return {
        article_list: [],
        links: [],
        substitution: "<div class='home-post well clearfix'>\n<div class='post-title underline clearfix'>" +
        "\n<h1>There is no articles posted yet!!!!</h1></div></div>",
        showHomePost: true,
        substitutionLinks: "<div class='padding10 list-group collapse in'><h1>Our blog site" +
        " has no friends...Sad</h1></div>",
        showLinks: true,
        latestComment: [],
        hottest_article: [],
        showLatestComment: true,
        showHotPost: true
      }
    },
    components: {
      LatestComment,
      Carousel,
      HomePost,
      Pagination,
      TagsCloud,
      Search,
      Links,
      HotestPost
    },
    created() {
      this.$axios.post("http://localhost:8080/api/doIndex").then(response => {
        // console.log(this);
        if (response.data["article_list"].length === 0) {
          this.showHomePost = false;
        } else {
          this.article_list = response.data["article_list"];
        }
        if (response.data["links"].length !== 0) {
          this.links = response.data["links"];
        } else {
          this.showLinks = false;
        }
      }).catch(error => {
        console.log(error);
      });

      this.$axios.post("http://localhost:8080/api/sideWidgets").then(response => {
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
  #tags_cloud {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>
