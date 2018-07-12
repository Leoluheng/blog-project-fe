<template>
  <div id="app">
    <!--<span class="glyphicon glyphicon-search" style="font-size: 50px"></span>-->
    <navList/>
    <div id="vmaig-main">
      <div id="vmaig-content" class="container">
        <!--this is where all the components will be injected-->
        <router-view/>
      </div>
      <footer>
        <div class="container">
          <p class="text-center">Base on JFinal 3.1,Bootsratp3, <a href="/sitemap.xml">website map</a></p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import navList from './components/navigation/Nav'

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      navList
    }
  }
</script>

<style>
  @import '/assets/css/vmaig.css';
</style>
