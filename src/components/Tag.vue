<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="all-post-list" class="well">
        <TagPost></TagPost>
      </div>

      <!--分页 -->
      #if(page_obj??)
      <Pagination></Pagination>
      #end
    </div>
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <TagsCloud></TagsCloud>
      <Search></Search>
      <HotestPost></HotestPost>
      <LattestComment></LattestComment>
    </div>
    <!--<script type="text/javascript" src="/static/module/base/base.js"></script>-->
    <!--<script type="text/javascript" src="/static/module/tag/tag.js"></script>-->
  </div>
</template>

<script>
  import Pagination from "./include/Pagination";
  import TagsCloud from "./widgets/TagsCloud";
  import Search from "./widgets/Search";
  import HotestPost from "./widgets/HotestPost";
  import LattestComment from "./comment/LattestComment";
  import TagPost from "./include/TagPost";

  export default {
    name: "Tag",
    components: {TagPost, LattestComment, HotestPost, Search, TagsCloud, Pagination}
  }
</script>

<style scoped>

</style>
