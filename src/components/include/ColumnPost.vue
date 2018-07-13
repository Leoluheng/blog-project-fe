<template>
  <div>
    <div v-for="post in article_list" class="all-post clearfix underline">
      <div class="post-title clearfix">
        <router-link :to="{name: 'category', params:{category: post.category}}">
          <div class="pre-cat">
            <div class="pre-catinner btn">
              {{post.category}}
            </div>
            <div class="pre-catarrow">
            </div>
          </div>
        </router-link>
        <h1>
          <router-link :to="{name: 'article', params: {address: post.enTitle}}">{{post.title}}</router-link>
        </h1>

        <span class="visible-xs-inline-block" style="margin-top:7px;">
           {{post.pub_time | trimDate}}
        </span>
        <div class="post-tags">

          <router-link v-for="(tag, index) in post.get_tags" :to="{name: 'tag', params:{tag: tag}}">
            <span :class="'label label-vmaig-' + index + ' btn'">{{tag}}</span>
          </router-link>
        </div>
      </div>
      <div class="post-content ">
        <div class="row">
          <div class="col-sm-4">
            <figure class="thumbnail">
              <router-link :to="{name: 'article', params: {address: post.enTitle}}">
                <img v-if="post.showImg" :src="post.img" height="400" alt="">
                <img v-else src="../../assets/img/article/default.jpg" height="400" alt="">
              </router-link>
            </figure>
          </div>
          <div class="col-sm-8">
            <p>
              {{post.summary | trimText}}
            </p>
          </div>
        </div>
      </div>
      <div class="post-info hidden-xs">
        <span>
            <span class="glyphicon glyphicon-calendar"></span>
            {{post.pub_time|trimDate}}
        </span>
        <span>
            <span class="glyphicon glyphicon-comment"></span>
            {{post.comment_num}}
        </span>
        <span>
            <span class="glyphicon glyphicon-eye-open"></span>
            {{post.view_times}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ColumnPost",
    props: ["article_list"]
  }
</script>

<style scoped>

</style>
