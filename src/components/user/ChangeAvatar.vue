<template>
  <div id="change-tx" class="well clearfix">
    <h1>头像设置</h1>

    <div>
      <div class="change-tx-left">
        <div class="screen-tx">
          <img id="tmp-tx" src="" alt="">
        </div>
        <form role="form" id="upload-tx-form">
          <div class="form-group">
            <input type="button" id="save-tx" class="btn btn-vmaig-auth" value="保存头像">
            <button type="button" class="btn btn-info">选择图片</button>
            <input type="file" id="upload-tx" name="upload-tx">
          </div>
        </form>
      </div>
      <div class="change-tx-right">
        <h4>头像预览</h4>
        <div id="preview-pane">
          <div class="preview-container" style="width:100px;height:100px;overflow:hidden;">
            <img src="#(tx)" alt="">
          </div>
        </div>
        大头像 100x100
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChangeAvatar"
  }
</script>

<style scoped>

</style>
