<template>
  <div class="row">
    <div id="vmaig-content" class="col-md-8 col-lg-9">
      <div id="article-page" class="well">
        <ol class="breadcrumb">
          <li>
            <router-link to="/"><span class="glyphicon glyphicon-home"></span></router-link>
          </li>
          <li>
            <router-link :to="{name: 'category', params: {category: article.category}}">{{article.category}}
            </router-link>
          </li>
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
            <router-link v-for="(tag, index) in article.get_tags" :key="tag" :to="{name: 'tag', params: {tag: tag}}">
              <span :class="'label label-vmaig-' + index + 'btn'">{{tag}}</span>
            </router-link>
          </div>
          <hr/>
          <div class="article-content">
            {{article.content | trimText}}
          </div>
        </div>
      </div>

      <!--评论框 -->
      <Comment :comment-list="commentList" :user_img="user_img"></Comment>
    </div>
    <div id="vmaig-side" class="col-md-4 col-lg-3 hidden-xs">
      <TagsCloud></TagsCloud>
      <Search></Search>
      <HotestPost :hot_article_list="hottest_article"></HotestPost>
      <LattestComment :latest_comment_list="latestComment"></LattestComment>
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
    components: {Comment, LattestComment, HotestPost, Search, TagsCloud},
    data() {
      return {
        article: {},
        commentList: [],
        user_img: "",
        latestComment: [],
        hottest_article: []
      }
    },
    created() {
      this.$axios("http://localhost:8080/api/article/getArticleContentAndComment", {
        params: {
          address: this.$route.params.address
        }
      }).then(response => {
        if (response.length === 0) {
          $("#vmaig-content").html("<div><h1><b>The requested article does not exist.</b></h1></div>");
          $(".vmaig-comment").find("ul").remove(); //or use empty() so that later comments added by this user can be simply inserted
          return;
        }
        var article = response("article"); //Map<String, object>
        var commentList = response("commentList"); //List<Map<String, Object>>
        var user_img = response("user_img"); //String

        if (article === null) {
          $("#vmaig-content").html("<div><h1><b>The requested article does not exist.</b></h1></div>");
          if (commentList.length === 0) {
            $(".vmaig-comment").find("ul").remove(); //or use empty() so that later comments added by this user can be simply inserted
            var noComment = '<div class="vmaig-comment-content">Nobody left any comment yet...</div>';
            $(".vmaig-comment").find(".vmaig-comment-edit").after(noComment);
          }
        } else {
          this.article = article;
          this.commentList = commentList;
          this.user_img = user_img;
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

    },
    methods: {
      CommentQuote: function (user_name, commend_id) {
        var comment = document.getElementById('comment');
        comment.value = "@['" + user_name + "', " + commend_id + "]: ";
        comment.focus();
        comment.setSelectionRange(comment.value.length, comment.value.length);
      },
      reply: function (username, id) {
        return this.CommentQuote(username, id);
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        if (window.location.search.toString().includes("#")) {
          window.location.href = window.location.href;
          return;
        }
      })
    }
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
