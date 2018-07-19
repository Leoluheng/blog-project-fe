<template>
  <div id="change-password" class="well clearfix">
    <h1 class="underline">修改密码</h1>
    <span v-show="showAlert" v-html="alert"></span>
    <div id="change-password-form" class="form-horizontal">
      <!--{% csrf_token %}-->
      <div class="form-group">
        <label for="old-password" class="col-sm-2 control-label">旧密码</label>
        <div class="col-sm-6">
          <input v-model="oldPassword" type="password" class="form-control" id="old-password"
                 placeholder="请输入密码">
        </div>
      </div>

      <div class="form-group">
        <label for="new-password-1" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-6">
          <input v-model="newPassword1" type="password" class="form-control" id="new-password-1"
                 placeholder="请输入密码">
        </div>
      </div>

      <div class="form-group">
        <label for="new-password-2" class="col-sm-2 control-label">确认密码</label>
        <div class="col-sm-6">
          <input v-model="newPassword2" type="password" class="form-control" id="new-password-2"
                 placeholder="请再次输入密码">
        </div>
      </div>

      <button @click="register" id="change-password-button" class="btn btn-primary pull-right">
        确定
      </button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ChangePassword",
    data() {
      return {
        oldPassword: "",
        newPassword1: "",
        newPassword2: "",
        alert: "",
        showAlert: false
      }
    },
    methods: {
      register: function () {
        this.showAlert = false;
        this.$axios.post("/api/user/doChangePassword", {
          old_password: this.oldPassword,
          new_password1: this.newPassword1,
          new_password2: this.newPassword2,
          username: this.$route.params.username
        }, {
          headers: {
            'csrf-token': this.$cookie.get('csrf-token')
          }
        }).then(response => {
          var errors = response.data["errors"];
          if (errors.length === 0) {
            location.replace("/login");
          } else {
            var html = "<div class=\"alert alert-danger\">"
            for (var key in errors) {
              html += errors[key] + "<br/>";
            }
            html += "</div>";
            this.alert = html;
            this.showAlert = true;
          }
        }).catch(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
      }
    }
  }
</script>

<style scoped>

</style>
