<template>
  <div id="vmaig-auth-register">
    <div class="panel panel-vmaig-auth">
      <div class="panel-heading">
        <h3 class="panel-title">注册</h3>
      </div>
      <form id="vmaig-auth-register-form" class="form-horizontal clearfix" method="post" role="form">
        <!--{% csrf_token %}-->
        <div class="form-group">
          <label for="vmaig-auth-register-username" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="vmaig-auth-register-username"
                   placeholder="请输入用户名">
          </div>
        </div>
        <div class="form-group">
          <label for="vmaig-auth-register-email" class="col-sm-2 control-label">email</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="vmaig-auth-register-email"
                   placeholder="请输入email">
          </div>
        </div>
        <div class="form-group">
          <label for="vmaig-auth-register-password2" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="vmaig-auth-register-password1"
                   placeholder="请输入密码">
          </div>
        </div>

        <div class="form-group">
          <label for="vmaig-auth-register-password2" class="col-sm-2 control-label">确认密码</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="vmaig-auth-register-password2"
                   placeholder="请再次输入密码">
          </div>
        </div>
        <br/>

        <button id="vmaig-auth-register-button" type="submit" class="btn btn-vmaig-auth pull-right">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

</style>
