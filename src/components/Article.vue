<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="article-page" class="well">
        <ol class="breadcrumb">
          <li><a href="/"><span class="glyphicon glyphicon-home"></span></a></li>
          <li><a :href="'/category/?category=' + article.category">{{article.category}}</a></li>
          <li class="hidden-xs"><a><span class="glyphicon glyphicon-calendar"></span> {{article.pub_time }}</a>
          </li>
          <li><a>
            <span class="glyphicon glyphicon-eye-open"></span>
            {{article.view_times}}
          </a></li>
          <li class="pull-right"><a>
            <span class="glyphicon glyphicon-user"></span> {{article.author}}
          </a></li>
        </ol>

        <div id="article">
          <div class="article-title">
            <h1>{{article.title}}</h1>
          </div>
          <div class="article-tags">
            <a v-for="(tag, index) in article.get_tags" :href="'/tag/?tag=' + tag">
              <span :class="'label label-vmaig-' + index + 'btn'">{{tag}}</span>
            </a>
          </div>
          <hr/>
          <div class="article-content">
            {{article.content | trimText}}
          </div>
        </div>
      </div>

      <!--评论框 -->
      <Comment></Comment>


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
  import TagsCloud from "./widgets/TagsCloud";
  import Search from "./widgets/Search";
  import HotestPost from "./widgets/HotestPost";
  import LattestComment from "./comment/LattestComment";
  import Comment from "./include/Comment";

  export default {
    name: "Article",
    components: {Comment, LattestComment, HotestPost, Search, TagsCloud}
  }
</script>

<style scoped>
  #article {
    font-size: 14px;
    color: #000;
  }

  blockquote {
    font-size: 14px;
  }

  #tags_cloud {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    margin-bottom: 20px;
  }
</style>
