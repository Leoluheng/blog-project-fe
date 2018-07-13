<template>
  <div id="vmaig-links">
    <div class="panel panel-vmaig">
      <div class="panel-heading">
        <h3 class="panel-title">
          <span class="glyphicon glyphicon-link"></span>
          友情链接
          <span class="glyphicon glyphicon-remove btn panel-close pull-right"></span>
          <span class="glyphicon glyphicon-chevron-up btn panel-collapse pull-right" data-toggle="collapse"
                data-target="#links"></span>
        </h3>
      </div>
      <div id="links" class="padding10 list-group collapse in">
        <div v-for="link in links">
          <!--<a  :title="link.title" target="_blank" :href="link.url"-->
          <!--:class="'btn btn-xs btn-' + link.color">{{link.title}}</a>-->
          <router-link :title="link.title" target="_blank" :class="'btn btn-xs btn-' + link.color"
                       :to="link.url">{{link.title}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Links",
    props: {
      links: {
        type: Array
        // default: function(){
        //   return [{color: "primary", title: "某弹幕网", url: "https://www.bilibili.com/"},
        //     {color: "warning", title: "Baidu", url: "https://www.baidu.com/"}];
        // }
      }
    }
    // created(){
    //   this.$axios('').then(response => {
    //     this.links = response.data;
    //   }).error(error => {
    //     console.log(error);
    //   })
    // }
  }
</script>

<style scoped>

</style>
