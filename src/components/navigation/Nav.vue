<template>
  <div>
    <header id="vmaig-header" class="navbar navbar-inverse navbar-fixed-top navbar-vmaig">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#vmaig-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand">leoluheng</div>
        </div>
        <div class="collapse navbar-collapse" id="vmaig-navbar-collapse">
          <ul id="nav-base" class="nav navbar-nav">
            <li class="">
              <a href="/">
                <span class="glyphicon glyphicon-home"></span>
                Home
              </a>
            </li>
            <li>
              <a href="/all/">
                <span class="glyphicon glyphicon-globe"></span>
                Articles
              </a>
            </li>
            <li>
              <a href="/news/">
                <span class="glyphicon glyphicon-star-empty"></span>
                News
              </a>
            </li>
            <li v-for="nav in column_list">
              <a :href="'/column/?column=' + nav">
                {{nav}}
              </a>
            </li>

          </ul>
          <ul v-if="!is_active" id="before-login" class="nav navbar-nav navbar-right">
            <li>
              <a id="nav-login" data-toggle="modal" data-target="#login-modal"
                 style="padding-right:0px;cursor:pointer;">
                Login
              </a>
            </li>
            <li>
              <a id="nav-register" data-toggle="modal" data-target="#register-modal"
                 style="padding-right:0px;cursor:pointer">
                Register
              </a>
            </li>
          </ul>

          <ul v-else id="after-login" class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="javascript:;" style="padding:5px;" data-toggle="dropdown">
                <img v-if="showImg" :src="img" alt="" width="40">
                <img v-else src="/static/img/origin.jpg" alt="" width="40">
                &nbsp;{{username}}
                <span class="badge" style="background-color: #D94600;">{{user_notificationNum}}</span>
              </a>
              <ul class="dropdown-menu navbar-right">
                <li>
                  <a href="/user/changetx">
                    <span class="glyphicon glyphicon-user"></span>
                    Edit avatar
                  </a>
                </li>
                <li>
                  <a href="/user/changepassword">
                    <span class="glyphicon glyphicon-lock"></span>
                    Edit password
                  </a>
                </li>
                <li>
                  <a href="/user/notification">
                    <span class="glyphicon glyphicon-envelope"></span>
                    Notification
                    <span class="badge" style="background-color: #D94600;">{{user_notificationNum}}</span>
                  </a>
                </li>
                <li>
                  <a id="logout" href="javascript:;" onclick="logout()">
                    <span class="glyphicon glyphicon-log-out"></span>
                    Sign out
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <!--
          <span class="navbar-text navbar-right">----分享Geek生活</span>
          -->
        </div>
      </div>
    </header>

    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close"
                    data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              Login Here
            </h4>
          </div>
          <div class="modal-body clearfix">
            <form id="login-form" class="form-horizontal" method="post" role="form">
              <!--{% csrf_token %}-->
              <div class="form-group">
                <label for="login-username" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="login-username"
                         placeholder="Input your username">
                </div>
              </div>
              <div class="form-group">
                <label for="login-password" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-6">
                  <input type="password" class="form-control" id="login-password"
                         placeholder="Input your password">
                </div>
              </div>
              <button id="login-button" type="submit" class="btn btn-primary">
                Login
              </button>
              <div id="forgetpassword">
                <a href="/forgetpassword/">forget password?&nbsp&nbsp</a>
              </div>
            </form>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

    <div class="modal fade" id="register-modal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close"
                    data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              Register
            </h4>
          </div>

          <div class="modal-body clearfix">
            <form id="register-form" class="form-horizontal" method="post" role="form">
              <!--{% csrf_token %}-->
              <div class="form-group">
                <label for="register-username" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="register-username"
                         placeholder="Please choose an username">
                </div>
              </div>
              <div class="form-group">
                <label for="register-email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="register-email"
                         placeholder="Your email">
                </div>
              </div>
              <div class="form-group">
                <label for="register-password-1" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-6">
                  <input type="password" class="form-control" id="register-password-1"
                         placeholder="Set your password">
                </div>
              </div>

              <div class="form-group">
                <label for="register-password-2" class="col-sm-2 control-label">Confirm password</label>
                <div class="col-sm-6">
                  <input type="password" class="form-control" id="register-password-2"
                         placeholder="Repeat your password">
                </div>
              </div>


              <button id="register-button" type="submit" class="btn btn-primary pull-right">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav.vue",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .vmaig-header.navbar {
    font-size: 14px;
  }

  .navbar-vmaig .navbar-brand {
    font-weight: bold;
    font-size: 25px;
    margin-right: 10px;
    color: #000;
    text-shadow: 1px 2px 5px rgba(255, 255, 255, 0.1), 0px 0px 30px rgba(255, 255, 255, 0.125);
  }

  .navbar-vmaig .navbar-text {
    margin: 30px 0px 0px 0px;
    font-weight: bold;
    color: #000;
    text-shadow: 1px 2px 5px rgba(255, 255, 255, 0.1), 0px 0px 30px rgba(255, 255, 255, 0.125);
  }

  .navbar-inverse {
    background-color: #222;
    border-color: #080808;
  }
</style>
