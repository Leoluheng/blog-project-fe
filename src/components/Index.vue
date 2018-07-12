<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <!-- 警告框 -->
      <div class="well alert hidden-xs fade in">
        <button class="close" data-dismiss="alert" type="button">&times;</button>
        A practice blog service built by Leo Lu with reference to #(website_title) (the original author)
      </div>
      <div class="visible-xs">
        <div class="search">
          <form class="form-inline clearfix" role="form" method="get" action="/search/">
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
          <homePost :article_list="article_list"/>
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
      <HotestPost></HotestPost>
      <!--#include("vmaig_comments/latest_comments.html")-->
      <span id="vmaig-link">
        <!--#include("widgets/links.html")-->
        <Links></Links>
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

  export default {
    name: "Index",
    data() {

    },
    components: {
      Carousel,
      HomePost,
      Pagination,
      TagsCloud,
      Search,
      Links,
      HotestPost
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
