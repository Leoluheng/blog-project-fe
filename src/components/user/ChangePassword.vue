<template>
  <div id="change-password" class="well clearfix">
    <h1 class="underline">修改密码</h1>
    <form id="change-password-form" class="form-horizontal" method="post" role="form">
      <!--{% csrf_token %}-->
      <div class="form-group">
        <label for="old-password" class="col-sm-2 control-label">旧密码</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="old-password"
                 placeholder="请输入密码">
        </div>
      </div>

      <div class="form-group">
        <label for="new-password-1" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="new-password-1"
                 placeholder="请输入密码">
        </div>
      </div>

      <div class="form-group">
        <label for="new-password-2" class="col-sm-2 control-label">确认密码</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="new-password-2"
                 placeholder="请再次输入密码">
        </div>
      </div>

      <button id="change-password-button" type="submit" class="btn btn-primary pull-right">
        确定
      </button>
    </form>

  </div>
</template>

<script>
  export default {
    name: "ChangePassword"
  }
</script>

<style scoped>

</style>
