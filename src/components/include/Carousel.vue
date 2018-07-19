<template>
  <div id="myCarousel" class="carousel slide clearfix">
    <ol class="carousel-indicators">
      <li v-for="(carouselPage, index) in carouselList"
          data-target="#myCarousel" :data-slide-to="index" :class="{active : index == 0}"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div v-for="(carouselPage, index) in carouselList" :class="{item : true ,active : index == 0}">
        <!--<a :href="'/article/?address=' + carouselPage.article_en_title">-->
        <router-link :to="{name: 'article', params: {address: carouselPage.article_en_title}}">
          <img :src="carouselPage.img" :alt="carouselPage.title">
          <div class="carousel-caption">
            <h4>{{ carouselPage.title }}</h4>
            {{ carouselPage.summary }}
          </div>
        </router-link>
        <!--</a>-->
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        carouselList: []
      }
    },
    created() {
      this.$axios("http://localhost:8080/api/carousel").then(response => {
        if (response.data.length === 0) {
          this.carouselList = [{
            "carousel_list": [{
              "summary": "ahahahha",
              "article_en_title": "test.html",
              "img": "static/img/carousel/default.jpg",
              "title": "Hello"
            }, {
              "summary": "hello, this is the second carousel page",
              "article_en_title": "test.html",
              "img": "static/img/carousel/default.jpg",
              "title": "Second post"
            }]
          }];
        }else{
          this.carouselList = response.data["carousel_list"];
        }
      }).catch(error => {
        console.log(error);
      })
    }

  }
</script>

<style scoped>

</style>
