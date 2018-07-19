<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="all-post-list" class="well">
        <SearchPost :keyword="$route.params.keyword"></SearchPost>
      </div>
    </div>
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <TagsCloud></TagsCloud>
      <Search></Search>
      <HotestPost :hot_article_list="hottest_article" :show_hot_post="showHotPost"></HotestPost>
      <LatestComment :latest_comment_list="latestComment" :show_latest_comment="showLatestComment"></LatestComment>
    </div>
  </div>
</template>

<script>
  import TagsCloud from "./widgets/TagsCloud";
  import HotestPost from "./widgets/HotestPost";
  import LatestComment from "./comment/LatestComment";
  import SearchPost from "./include/SearchPost";
  import Search from "./widgets/Search";

  export default {
    name: "SearchPage",
    components: {Search, SearchPost, LatestComment, HotestPost, TagsCloud},
    data() {
      return {
        latestComment: [],
        hottest_article: [],
        showHotPost: true,
        showLatestComment: true,
      }
    },
    created() {

      this.$axios("/api/sideWidgets").then(response => {
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
