<template>
  <div id="vmaig-latest-comments">
    <div class="panel panel-vmaig-comments">
      <div class="panel-heading">
        <h3 class="panel-title">
          <span class="glyphicon glyphicon-comment"></span>
          最新评论
          <span class="glyphicon glyphicon-remove btn panel-close pull-right" data-dismiss="alert"></span>
          <span class="glyphicon glyphicon-chevron-up btn panel-collapse pull-right" data-toggle="collapse"
                data-target="#latest-comment-list"></span>
        </h3>
      </div>
      <ul v-if="show_latest_comment" id="latest-comment-list" class="list-group collapse in">
        <li v-for="comment in latest_comment_list" class="list-group-item clearfix">
          <div class="comment-tx">
            <img v-if="comment.hasOwnImg" :src="comment.user_img" width="40" height="40" alt="">
            <img v-else src="/static/img/avatarDefault.png" width="40" height="40" alt="">
          </div>
          <div class="comment-info">
            <div class="comment-username">
              <a href="#">{{ comment.username }} 评论:</a>
            </div>
            <div class="comment-content">
              <router-link :to="{name: 'article', params:{address: comment.enTitle}}">
                {{ comment.text  }}
                <!--| App.filters.trimText-->
              </router-link>
            </div>
          </div>
        </li>
      </ul>
      <ul v-else class="list-group collapse in" v-html="substitution"></ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "LatestComment",
    props: ['latest_comment_list', 'show_latest_comment'],
    data(){
      return{
        substitution: '<li>No comments yet</li>'
      }
    }
  }
</script>

<style scoped>

</style>
