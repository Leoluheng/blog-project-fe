<template>
  <div id="vmaig-hotest-posts">
    <div class="panel panel-vmaig">
      <div class="panel-heading">
        <h3 class="panel-title">
          <span class="glyphicon glyphicon-flag"></span>
          热门文章
          <span class="glyphicon glyphicon-remove btn panel-close pull-right"></span>
          <span class="glyphicon glyphicon-chevron-up btn panel-collapse pull-right" data-toggle="collapse"
                data-target="#hotest-post-list"></span>
        </h3>
      </div>
      <ul v-if="show_hot_post" id="hotest-post-list" class="list-group collapse in">
        <li v-for="article in hot_article_list" class="list-group-item">
          <span class="hotest-post-title">
            <!--<a :href="'/article/?address=' + article.enTitle">{{article.title}}</a>-->
            <router-link :to="{name: 'article', params: {address: article.enTitle}}">{{article.title}}</router-link>
          </span>
          <span class="badge">{{article.view_times}}</span>
        </li>
      </ul>
      <ul v-else class="list-group collapse in" v-html="substitution">
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "HotestPost",
    props: ["hot_article_list", "show_hot_post"],
    data() {
      return {
        substitution: '<li class="list-group-item" > No any post yet.</li>'
      }
    }
  }
</script>

<style scoped>

</style>
