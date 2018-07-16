<template>
  <div id="vmaig-auth-forgetpassword">
    <div class="panel panel-vmaig-auth">
      <div class="panel-heading">
        <h3 class="panel-title">忘记密码</h3>
      </div>
      <form id="vmaig-auth-forgetpassword-form" class="form-horizontal clearfix" method="post" role="form">
        <!--{% csrf_token %}-->
        <div class="form-group">
          <label for="vmaig-auth-forgetpassword-username" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="vmaig-auth-forgetpassword-username"
                   placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <label for="vmaig-auth-forgetpassword-email" class="col-sm-2 control-label">email</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="vmaig-auth-forgetpassword-email"
                   placeholder="请输入email">
          </div>
        </div>
        <br/>

        <button id="vmaig-auth-forgetpassword-button" type="submit" class="btn btn-vmaig-auth pull-right">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ForgetPassword",
    created() {
      $('#vmaig-auth-forgetpassword-form').submit(function () {
        this.$axios.post('fixforgetPassword', {
          username: $("#vmaig-auth-forgetpassword-username").val(),
          email: $("#vmaig-auth-forgetpassword-email").val()
        }).then(response => {
          let errors = response["errors"];
          if (errors.length === 0) {
            alert("密码重置成功!\n" +
              "我们将会把重置密码的连接发到你的邮箱中。 你很快将会收到.\n" +
              "如果你没有收到邮件, 请确保您所输入的地址是正确的, 并检查您的垃圾邮件文件夹.\n");
            location.replace("/");
          }
          else {
            //alert(errors);
            var html = "<div class=\"alert alert-danger\">"
            for (var key in errors) {
              html += errors[key] + "<br/>";
            }
            html += "</div>";
            $("#vmaig-auth-forgetpassword .panel-heading").after(html);
          }
        }).error(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });

        return false;
      });

      $("#vmaig-auth-forgetpassword-button").click(function () {
        $("#vmaig-auth-forgetpassword .alert").remove();
      });
    }
  }
</script>

<style scoped>

</style>
