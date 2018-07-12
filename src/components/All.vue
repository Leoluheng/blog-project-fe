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
            <label v-for="category in category_list">
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

        <div id="all-post-list">
          <AllPost></AllPost>

        </div>
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
      <HotestPost></HotestPost>
      <LattestComment></LattestComment>
    </div>

  </div>
</template>

<script>
  import AllPost from './include/AllPost'
  import TagsCloud from "./widgets/TagsCloud";
  import Search from "./widgets/Search";
  import HotestPost from "./widgets/HotestPost";
  import LattestComment from "./comment/LattestComment";

  export default {
    name: "All",
    data() {
      return {
        category_list: []
      }
    },
    components: {
      LattestComment,
      HotestPost,
      Search,
      TagsCloud,
      AllPost
    }
  }
</script>

<style scoped>

</style>
