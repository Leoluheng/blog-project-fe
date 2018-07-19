<template>
  <div id="vmaig-auth-register">
    <div class="panel panel-vmaig-auth">
      <div class="panel-heading">
        <transition name="fade">
          <span v-if="show" v-html="alert"></span>
        </transition>
        <h3 class="panel-title">注册</h3>
      </div>
      <form id="vmaig-auth-register-form" class="form-horizontal clearfix" method="post" role="form">
        <!--{% csrf_token %}-->
        <div class="form-group">
          <label for="vmaig-auth-register-username" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-8">
            <input v-model="username" type="text" class="form-control" id="vmaig-auth-register-username"
                   placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <label for="vmaig-auth-register-email" class="col-sm-2 control-label">email</label>
          <div class="col-sm-8">
            <input v-model="email" type="email" class="form-control" id="vmaig-auth-register-email"
                   placeholder="请输入email">
          </div>
        </div>
        <div class="form-group">
          <label for="vmaig-auth-register-password2" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-8">
            <input v-model="password1" type="password" class="form-control" id="vmaig-auth-register-password1"
                   placeholder="请输入密码">
          </div>
        </div>

        <div class="form-group">
          <label for="vmaig-auth-register-password2" class="col-sm-2 control-label">确认密码</label>
          <div class="col-sm-8">
            <input v-model="password2" type="password" class="form-control" id="vmaig-auth-register-password2"
                   placeholder="请再次输入密码">
          </div>
        </div>
        <br/>

        <button @click="register" id="vmaig-auth-register-button" class="btn btn-vmaig-auth pull-right">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        password1: "",
        password2: "",
        email: "",
        show: true,
        alert: ""
      }
    },
    methods: {
      register: function () {
        this.show = false;

        this.$axios({
          method: 'post',
          url: "/api/user/doRegister",
          data: {
            username: this.username,
            email: this.email,
            password1: this.password1,
            password2: this.password2
          },
          header: {
            'csrf-token': this.$cookie.get('csrf-token')
          }
        }).then(response => {
          var errors = response["errors"];
          if (errors.length === 0) {
            // location.replace("/");
            this.$router.push("/")
          } else {
            var html = "<div class=\"alert alert-danger\">"
            for (var key in errors) {
              html += errors[key] + "<br/>";
            }
            html += "</div>";
            this.alert = html;
            this.show = true;
            // $("#vmaig-auth-register .panel-heading").after(html);
          }
        }).catch(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
        return false;
      }
      // $("#vmaig-auth-register-button").click(function () {
      //   $("#vmaig-auth-register .alert").remove();
      // });
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
