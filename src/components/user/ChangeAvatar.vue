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
            <img src="" alt="" :style="cssPreview">
          </div>
        </div>
        大头像 100x100
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChangeAvatar",
    data(){
      return{
        cssPreview: ""
      }
    },
    methods: {
    //   updatePreview: function (c) {
    //     if (parseInt(c.w) > 0) {
    //       x = c.x;
    //       y = c.y;
    //       width = c.w;
    //       height = c.h;
    //       var rx = 100.0 / c.w;
    //       var ry = 100.0 / c.h;
    //
    //       console.log("rx:" + Math.round(rx * boundx) + " ry:" + ry);
    //
    //       $("#preview-pane .preview-container img").css({
    //         width: Math.round(rx * boundx) + 'px',
    //         height: Math.round(ry * boundy) + 'px',
    //         marginLeft: '-' + Math.round(rx * c.x) + 'px',
    //         marginTop: '-' + Math.round(ry * c.y) + 'px'
    //       });
    //     }
    //   }
    // },
    // created() {
    //   var jcrop_api, boundx, boundy;
    //   var image = new Image();
    //   var x, y, width, height = 0;
    //
    //   $('#tmp-tx').Jcrop({
    //       onChange: this.methods.updatePreview,
    //       onSelect: this.methods.updatePreview,
    //       aspectRatio: 1,
    //       boxWidth: 400,
    //       boxHeight: 300
    //     },
    //     function () {
    //       jcrop_api = this;
    //     });
    //
    //   $("#upload-tx").change(function () {
    //
    //     if (typeof FileReader == "undefined") {
    //       alert("Your browser does not support FileReader!");
    //     }
    //
    //     var file = this.files[0];
    //     var reader = new FileReader();
    //
    //     reader.readAsDataURL(file);
    //
    //
    //     reader.onload = function (e) {
    //       image.src = e.target.result;
    //       $("#tmp-tx").attr("src", image.src);
    //       $("#preview-pane .preview-container img").attr("src", image.src);
    //       jcrop_api.setImage(image.src);
    //       preImage(image.src, function () {
    //         boundx = this.width;
    //         boundy = this.height;
    //       });
    //
    //       console.log("boundx:" + boundx + " boundy:" + boundy);
    //     }
    //   });
    //
    //   $("#save-tx").click(function () {
    //     console.log("x:" + x + " y:" + y + " width:" + width + " height:" + height);
    //
    //     var canvas = $('<canvas width="' + width + '" height="' + height + '"></canvas>')[0],
    //       ctx = canvas.getContext('2d');
    //
    //     ctx.drawImage(image, parseInt(x), parseInt(y), parseInt(width), parseInt(height), 0, 0, parseInt(width), parseInt(height));
    //
    //     var data = canvas.toDataURL();
    //
    //     // dataURL looks like: “data:image/png;base64,****”, notice the descriptive params before ',', only the **** is useful
    //     data = data.split(',')[1];
    //     data = window.atob(data);
    //     var ia = new Uint8Array(data.length);
    //     for (var i = 0; i < data.length; i++) {
    //       ia[i] = data.charCodeAt(i);
    //     }
    //     ;
    //
    //     // canvas.toDataURL default type -> image/png
    //     var blob = new Blob([ia], {type: "image/jpg"});
    //
    //     var fd = new FormData();
    //
    //     fd.append('file', blob);
    //     //debugger;
    //     this.$axios({
    //       method: 'post',
    //       url: "/api/user/dochangetx",
    //       data: {
    //         username: this.$route.params.username,
    //         tx: canvas.toDataURL().split(',')[1]
    //       },
    //       headers: {
    //         'csrf-token': this.$cookie.get('csrf-token')
    //       }
    //     }).then(response => {
    //       top.location.reload();
    //       alert(data);
    //     }).error(XMLHttpRequest => {
    //       alert(XMLHttpRequest.responseText);
    //     })
    //   });
    //
    //   function preImage(url, callback) {
    //     var img = new Image(); //Initialize an img object for preview
    //     img.src = url;
    //
    //     if (img.complete) { //If the img exists in browser's cache, callback
    //       callback.call(img);
    //       return; // return without caring the onload event
    //     }
    //
    //     img.onload = function () { //callback evoked asynchronously when img done uploading
    //       callback.call(img);//pass in img object
    //     };
    //   }


    }
  }
</script>

<style scoped>

</style>
