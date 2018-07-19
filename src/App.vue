<template>
  <div id="app">
    <!--<span class="glyphicon glyphicon-search" style="font-size: 50px"></span>-->
    <navList :navUser="navUser"></navList>
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
  import navList from './components/navigation/Navigation'

  export default {
    name: 'App',
    data() {
      return {
        navUser: {
          img: "",
          is_active: false,
          showImg: "false",
          user_notificationNum: 0,
          username: ""
        }
      }
    },
    components: {
      navList
    },
    created(){
      this.$axios("http://localhost:8080/api/navUser").then(response => {
        var data = response.data;
        var navUser = this.navUser;
        navUser.img = data["img"];
        navUser.showImg = data["showImg"];
        navUser.is_active = data["is_active"];
        navUser.username = data["username"];
        navUser.user_notificationNum = data["user_notificationNum"];
      }).catch(error =>{
        console.log(error);
      });
    }
  }
</script>

<!--<style>-->
  <!--/*@import '/assets/css/vmaig.css';*/-->
<!--</style>-->
