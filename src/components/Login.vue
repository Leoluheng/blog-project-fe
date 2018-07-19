<template>
  <div id="vmaig-auth-login">
    <div class="panel panel-vmaig-auth">
      <div class="panel-heading">
        <!--<img src="/static/avatarDefault.png" width="600" height="400" v-crop:start="cropStart" />-->
        <h3 class="panel-title">请登陆</h3>
      </div>
      <!--<form id="vmaig-auth-login-form" class="clearfix" method="post" role="form">-->
      <!--{% csrf_token %}-->
      <div id="vmaig-auth-login-form" class="clearfix">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
            </div>
            <input v-model="username" id="vmaig-auth-login-username" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-lock"></span>
            </div>
            <input @keyup.enter="login" v-model="password" id="vmaig-auth-login-password" type="password"
                   class="form-control">
          </div>
        </div>
        <div id="vmaig-auth-forgetpassword">
          <router-link to="/forgetPassword">忘记密码?</router-link>
        </div>
        <button id="vmaig-auth-login-button" class="btn btn-vmaig-auth pull-left" @click="login">登录</button>
        <router-link to="/register" type="button" class="btn btn-vmaig-auth pull-right">注册</router-link>
        <!--</form>-->
      </div>
    </div>
  </div>
</template>

<script>
  // import vuecrop from 'vue-crop'

  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      login: function () {
        this.$axios.post("/api/user/doLogin", {
          username: this.username,
          password: this.password
        }, {
          header: {
            "csrf-token": this.$cookie.get('csrf-token')
          }
        }).then(response => {
          var errors = response.data["errors"];
          if (errors === null || errors.length === 0) {
            location.replace("/");
          }
          else {
            var str = "";
            for (var key in errors) {
              str += errors[key] + "\n";
            }
            alert(str);
          }
        }).catch(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
        return false;
      }
    }
  }
</script>

<!--<style scoped>-->

<!--</style>-->
