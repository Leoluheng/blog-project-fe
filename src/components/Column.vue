<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="column-summary" class="well">
        #(column_summary)
      </div>

      <div id="column-post" class="well">
        <ColumnPost></ColumnPost>
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
    <!--<script type="text/javascript" src="/static/module/column/column.js"></script>-->
    <!--////tags_cloud-->
    <!--<script src="/static/lib/d3/d3.js"></script>-->
    <!--<script src="/static/js/d3.layout.cloud.js"></script>-->
    <!--<script src="/static/module/tagsCloud/tagsCloud.js"></script>-->
  </div>
</template>

<script>
  import Pagination from "./include/Pagination";
  import TagsCloud from "./widgets/TagsCloud";
  import Search from "./widgets/Search";
  import HotestPost from "./widgets/HotestPost";
  import LattestComment from "./comment/LattestComment";
  import ColumnPost from "./include/ColumnPost";

  export default {
    name: "Column",
    components: {ColumnPost, LattestComment, HotestPost, Search, TagsCloud, Pagination}
  }
</script>

<style scoped>
  #tags_cloud {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>
