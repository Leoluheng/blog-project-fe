<template>
  <div id="vmaig-auth-login">
    <div class="panel panel-vmaig-auth">
      <div class="panel-heading">
        <h3 class="panel-title">请登陆</h3>
      </div>
      <form id="vmaig-auth-login-form" class="clearfix" method="post" role="form">
        <!--{% csrf_token %}-->
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
            </div>
            <input id="vmaig-auth-login-username" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-lock"></span>
            </div>
            <input id="vmaig-auth-login-password" type="password" class="form-control">
          </div>
        </div>
        <div id="vmaig-auth-forgetpassword">
          <router-link to="/user/forgetPassword">忘记密码?</router-link>
        </div>
        <button id="vmaig-auth-login-button" type="submit" class="btn btn-vmaig-auth pull-left">登录</button>
        <router-link to="/user/register" type="button" class="btn btn-vmaig-auth pull-right">注册</router-link>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    created() {
      $('#vmaig-auth-login-form').submit(function () {
        this.$axios.post("/api/user/doLogin", {
          username: $("#vmaig-auth-login-username").val(),
          password: $("#vmaig-auth-login-password").val()
        }).then(response => {
          var errors = response["errors"];
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
        }).error(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
        return false;
      });
    }
  }
</script>

<style scoped>

</style>
