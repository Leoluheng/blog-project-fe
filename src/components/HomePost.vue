
<template>
  <div>
    <div v-for="(post, index) in article_list" class="home-post well clearfix">
      <div class="post-title underline clearfix">
        <a :href="'/category/?category=' + post.category">
          <div class="pre-cat">
            <div class="pre-catinner btn">
              {{post.category}}
            </div>
            <div class="pre-catarrow">
            </div>
          </div>
        </a>
        <h1>
          <a :href="'/article/?address=' + post.enTitle">{{post.title}}</a>
        </h1>
        <div class="post-info">
            <span>
                <span class="glyphicon glyphicon-calendar"></span>
              <!--{{post.pub_time|date:"Y-m-d" }}-->
              <!--#&#45;&#45; #date(post.pub_time, "yyyy-MM-dd") &#45;&#45;#-->
                {{post.pub_time | trimDate}}
            </span>
          <span>
                <span class="glyphicon glyphicon-comment"></span>
                {{post.comment_num}}
            </span>
          <span>
                <span class="glyphicon glyphicon-eye-open"></span>
                {{post.view_times}}
            </span>
          <div v-for="(tag, num) in post.get_tags" class="post-tags">
            <a :href="'/tag/?tag=' + tag" :class="{'hidden-xs' : post.showTag}">
              <span :class="'label label-vmaig-' + num + ' btn'">{{tag}}</span>
            </a>
            <a class="visible-xs-inline-block">
              <span class="label label-vmaig-2 btn ">...</span>
            </a>
          </div>

        </div>
      </div>
      <div class="post-content">
        <div class="row">
          <div class="col-sm-4">
            <figure class="thumbnail">
              <a :href="'/article/?address=' + post.enTitle">
                <img v-if="post.showImg" :src="post.img" height="300" alt="">
                <img v-else src="/static/img/article/default.jpg" height="300" alt="">

              </a>
            </figure>
          </div>
          <div class="col-sm-8">
            <p>{{post.summary | trimText}}</p>
            <a type="button" class="btn btn-vmaig pull-right hidden-xs"
               :href="'/article/?address=' + post.enTitle">阅读全文</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePost.vue",
    data() {
      return {
        "links": [{"color": "primary", "title": "某弹幕网", "url": "https://www.bilibili.com/"}, {
          "color": "warning",
          "title": "Baidu",
          "url": "https://www.baidu.com/"
        }],
        "article_list": [{
          "summary": "一个测试用的文本",
          "comment_num": 5,
          "img": "",
          "enTitle": "test.html",
          "view_times": 3,
          "showTag": true,
          "pub_time": "2018-06-08 14:46:29",
          "page_obj": null,
          "getTags": ["测试", "其他"],
          "category": "其他",
          "title": "测试测试",
          "showImg": false
        }]
      }

    }
  }
</script>

<style scoped>
  /* home post块内容 */
  .home-post {
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 20px;
    display: block;
  }

  .home-post .post-title {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .home-post .post-title > h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 3px;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .home-post .post-tag {
    text-align: center;
    line-height: 24px;
    margin: 20px;
  }

  .home-post .post-content {
    padding: 0px 0px;
    font-size: 14px;
  }

  .home-post .post-content .thumbnail {
    border: 1px solid #ED9C29;
    padding: 0px;
  }

  .home-post .post-info {
    margin-top: 15px;
  }

  .home-post .post-info > span {
    margin-right: 5px;
  }

  .home-post .post-info .post-tags {
    float: right;
  }

  .home-post .post-content .row .col-sm-4 {
    padding-right: 5px;
    padding-left: 5px;
  }

  .home-post .post-content .row .col-sm-8 {
    padding-right: 5px;
    padding-left: 5px;
  }
</style>
