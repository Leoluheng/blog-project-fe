<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="all-post-list" class="well">
        <CategoryPost :article_list="article_list"></CategoryPost>
      </div>
      <!--分页 -->
      #if(page_obj??) //////////////////
      <Pagination></Pagination>
      #end
    </div>
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <TagsCloud></TagsCloud>
      <Search></Search>
      <HotestPost :hot_article_list="hottest_article"></HotestPost>
      <LattestComment :latest_comment_list="latestComment"></LattestComment>
    </div>
    <!--<script type="text/javascript" src="/static/module/base/base.js"></script>-->
    <!--<script type="text/javascript" src="/static/module/categroy/category.js"></script>-->
    <!--////tags_cloud-->
    <!--<script src="/static/lib/d3/d3.js"></script>-->
    <!--<script src="/static/js/d3.layout.cloud.js"></script>-->
    <!--<script src="/static/module/tagsCloud/tagsCloud.js"></script>-->
  </div>
</template>

<script>
  import CategoryPost from "./include/CategoryPost";
  import Pagination from "./include/Pagination";
  import TagsCloud from "./widgets/TagsCloud";
  import Search from "./widgets/Search";
  import HotestPost from "./widgets/HotestPost";
  import LattestComment from "./comment/LattestComment";

  export default {
    name: "Category",
    data() {
      return {
        article_list: [],
        hottest_article: [],
        latestComment: []
      }
    },
    components: {
      LattestComment,
      HotestPost,
      Search,
      TagsCloud,
      Pagination,
      CategoryPost
    },
    created() {
      this.$axios.post("http://localhost:8080/api/category/doCategoryArticle", {
        category: this.$route.params.category
      }).then(response => {
        if (response.data("article_list") === 0) {
          $("#all-post-list").empty().html("<div class='home-post well clearfix'>\n<div " +
            "class='post-title underline clearfix'>" +
            "\n<h1>There is no articles posted yet!!!!</h1></div></div>");
        } else {
          this.article_list = response.data("article_list");
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
</style>
