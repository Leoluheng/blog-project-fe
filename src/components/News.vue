<template>
  <div>
    <div class="timeline-content visible-xs">
      <span>新闻来源：</span>

      <span class="label label-success">oschina</span>
      <span class="label label-danger">chiphell</span>
      <span class="label label-primary">cnBeta</span>
      <span class="label label-warning">freebuf</span>
      <span class="label label-default">其他</span>

    </div>
    <ul class="timeline">
      <!--unknown data source: timeBlocks-->
      <li v-for="(timeblock, index) in timeblocks">
        <div class="timeline-time">
          <div v-if="index === 0" class="pull-right hidden-xs">
            <span>新闻来源：</span>

            <span class="label label-success">oschina</span>
            <span class="label label-danger">chiphell</span>
            <span class="label label-primary">cnBeta</span>
            <span class="label label-warning">freebuf</span>
            <span class="label label-default">其他</span>
          </div>

          <span>{{timeblock.pub_time}}</span>
          <!--|date:"D d M Y"-->

        </div>
        <div class="timeline-ico"></div>
        <div class="timeline-content">

          <router-link v-for="news in timeblock.news" :key="news"
                       :class="'label label-'+ news.get_news_from_display + 'label-news'">
          </router-link>
          <!--@click="return hs.htmlExpand(this, { objectType: 'iframe' ,minWidth:600,headingText:'#(news.title)'})"&ndash;&gt;-->
          <!--href="/news/#(news.pk)">#(news.title)-->
        </div>
      </li>
    </ul>

    <div class="timeline-select hidden-xs">
      <ul class="list-group">
        <li class="list-group-item #if(active == 0)active#end">
          <router-link :to="{name: 'news', params: {start: 0, end: 6}}">最近7天</router-link>
        </li>
        <li class="list-group-item #if(active == 1)active#end">
          <router-link :to="{name: 'news', params: {start: 7, end: 13}}">前一周</router-link>
        </li>
        <li class="list-group-item #if(active == 2)active#end">
          <router-link :to="{name: 'news', params: {start: 14, end: 20}}">前二周</router-link>
        </li>
        <li class="list-group-item #if(active == 3)active#end">
          <router-link :to="{name: 'news', params: {start: 21, end: 27}}">前三周</router-link>
        </li>
        <li class="list-group-item #if(active == 4)active#end">
          <router-link :to="{name: 'news', params: {start: 28, end: 34}}">前四周</router-link>
        </li>
        <li class="list-group-item #if(active == 5)active#end">
          <router-link :to="{name: 'news', params: {start: 35, end: 41}}">前五周</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "News",
    data(){
      return{
        timeblocks: []
      }
    }
  }
</script>

<style scoped>

</style>
