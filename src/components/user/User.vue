<template>
 <div>
   <div style="height:80px;"></div>
   <div class="row">
     <div class="col-md-2">
       <a class="list-group-item">
         <img v-if="user_img != ''" :src="user_img" alt="" width="40">
         <img v-else src="../../assets/img/avatarDefault.png" alt="" width="40">
         &nbsp; {{username}}
       </a>
       <router-link to="/user/changetx" class="list-group-item active">
         修改头像
         <span class="glyphicon glyphicon-chevron-right pull-right"></span>
       </router-link>

       <router-link to="/user/changepassword" class="list-group-item">
         修改密码
         <span class="glyphicon glyphicon-chevron-right pull-right"></span>
       </router-link>
       <router-link to="/user/notification" class="list-group-item">
         消息
         <span class="glyphicon glyphicon-chevron-right pull-right"></span>
       </router-link>
       <router-link to="/user/register" class="list-group-item">
         注册新用户
         <span class="glyphicon glyphicon-chevron-right pull-right"></span>
       </router-link>
       <router-link to="/user/login" class="list-group-item">
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
    name: "User"
  }
</script>

<style scoped>

</style>
