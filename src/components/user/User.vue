<template>
  <div>
    <div style="height:80px;"></div>
    <div class="row">
      <div class="col-md-2">
        <a class="list-group-item">
          <img v-if="img != ''" :src="img" alt="" width="40">
          <img v-else src="/static/img/avatarDefault.png" alt="" width="40">
          &nbsp; {{username}}
        </a>
        <router-link :to="{name: 'changeAvatar', params: {username: username}}" class="list-group-item">
          修改头像
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
        </router-link>

        <router-link :to="{name: 'changePassword', params: {username: username}}"
                     class="list-group-item">
          修改密码
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
        </router-link>
        <router-link :to="{name: 'notification', params: {username: username}}" class="list-group-item">
          消息
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
        </router-link>
        <router-link to="/register" class="list-group-item">
          注册新用户
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
        </router-link>
        <router-link to="/login" class="list-group-item">
          重新登陆
          <span class="glyphicon glyphicon-chevron-right pull-right"></span>
        </router-link>
      </div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    data(){
      return{
        username: "",
        img: ""
      }
    },
    created(){
      this.$axios.post("/api/navUser").then(response => {
        this.username = response.data["username"];
        this.img = response.data["img"];
      }).catch(error => {
        console.log(error);
      })
  }
  }
</script>

<style scoped>

</style>
