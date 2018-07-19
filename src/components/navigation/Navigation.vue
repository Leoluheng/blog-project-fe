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
              <!--<a href="/">-->
              <router-link to="/">
                <span class="glyphicon glyphicon-home"></span>
                Home
                <!--</a>-->
              </router-link>
            </li>
            <li>
              <!--<a href="/all/">-->
              <router-link to="/all">
                <span class="glyphicon glyphicon-globe"></span>
                Articles
                <!--</a>-->
              </router-link>
            </li>
            <li>
              <!--<a href="/news/">-->
              <router-link to="/news">
                <span class="glyphicon glyphicon-star-empty"></span>
                News
              </router-link>
              <!--</a>-->
            </li>
            <li v-for="nav in column_list">
              <!--<a :href="'/column/?column=' + nav">-->
              <router-link :to="{name: 'column', params: {column: nav}}">
                {{nav}}
                <!--</a>-->
              </router-link>
            </li>

          </ul>
          <ul v-if="!navUser.is_active" id="before-login" class="nav navbar-nav navbar-right">
            <li>
              <a @click="toggleLogin" id="nav-login" data-toggle="modal" data-target="#login-modal"
                 style="padding-right:0px;cursor:pointer;">
                Login
              </a>
            </li>
            <li>
              <a @click="toggleRegister" id="nav-register" data-toggle="modal" data-target="#register-modal"
                 style="padding-right:0px;cursor:pointer">
                Register
              </a>
            </li>
          </ul>

          <ul v-else id="after-login" class="nav navbar-nav navbar-right" @click="showAfterLogin">
            <li :class="'dropdown '+ dropdown">
              <a href="javascript:;" style="padding:5px;" data-toggle="dropdown">
                <img v-if="navUser.showImg" :src="navUser.img" alt="" width="40">
                <img v-else src="/static/img/avatarDefault.png" alt="" width="40">
                &nbsp;{{navUser.username}}
                <span class="badge" style="background-color: #D94600;">{{navUser.user_notificationNum}}</span>
              </a>
              <ul class="dropdown-menu navbar-right">
                <li>
                  <!--<a href="/user/changetx">-->
                  <router-link :to="{name: 'changeAvatar', params:{username: navUser.username}}">
                    <span class="glyphicon glyphicon-user"></span>
                    Edit avatar
                    <!--</a>-->
                  </router-link>
                </li>
                <li>
                  <!--<a href="/user/changepassword">-->
                  <router-link
                    :to="{name:'changePassword', params:{username: navUser.username}}">
                    <span class="glyphicon glyphicon-lock"></span>
                    Edit password
                  </router-link>
                  <!--</a>-->
                </li>
                <li>
                  <!--<a href="/user/notification">-->
                  <router-link :to="{name: 'notification', params:{username: navUser.username}}">
                    <span class="glyphicon glyphicon-envelope"></span>
                    Notification
                    <span class="badge" style="background-color: #D94600;">{{navUser.user_notificationNum}}</span>
                    <!--</a>-->
                  </router-link>
                </li>
                <li>
                  <a @click="logout" id="logout" href="javascript:;">
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

    <div :class="'modal fade '+fadeL" id="login-modal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" :aria-hidden="showLogin" :style="'display: '+ displayL">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <transition name="fade">
              <span v-if="show" v-html="alert"></span>
            </transition>
            <button @click="toggleLogin" type="button" class="close"
                    data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              Login Here
            </h4>
          </div>
          <div class="modal-body clearfix">
            <div id="login-form" class="form-horizontal">
              <!--{% csrf_token %}-->
              <div class="form-group">
                <label for="login-username" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-6">
                  <input v-model="username" type="text" class="form-control" id="login-username"
                         placeholder="Input your username">
                </div>
              </div>
              <div class="form-group">
                <label for="login-password" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-6">
                  <input @keyup.enter="login" v-model="password" type="password" class="form-control"
                         id="login-password"
                         placeholder="Input your password">
                </div>
              </div>
              <button @click="login" id="login-button" class="btn btn-primary">
                Login
              </button>
              <div id="forgetpassword">
                <router-link to="/forgetPassword">forget password?&nbsp&nbsp</router-link>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

    <div :class="'modal fade '+fadeR" id="register-modal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" :aria-hidden="!showRegister" :style="'display: '+displayR">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <transition name="fade">
              <span v-if="show" v-html="alert"></span>
            </transition>
            <button @click="toggleRegister" type="button" class="close"
                    data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              Register
            </h4>
          </div>

          <div class="modal-body clearfix">
            <div id="register-form" class="form-horizontal">
              <!--{% csrf_token %}-->
              <div class="form-group">
                <label for="register-username" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-6">
                  <input v-model="username" type="text" class="form-control" id="register-username"
                         placeholder="Please choose an username">
                </div>
              </div>
              <div class="form-group">
                <label for="register-email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-6">
                  <input v-model="email" type="text" class="form-control" id="register-email"
                         placeholder="Your email">
                </div>
              </div>
              <div class="form-group">
                <label for="register-password-1" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-6">
                  <input v-model="password1" type="password" class="form-control" id="register-password-1"
                         placeholder="Set your password">
                </div>
              </div>

              <div class="form-group">
                <label for="register-password-2" class="col-sm-2 control-label">Confirm password</label>
                <div class="col-sm-6">
                  <input @keyup.enter="register" v-model="password2" type="password" class="form-control"
                         id="register-password-2"
                         placeholder="Repeat your password">
                </div>
              </div>


              <button @click="register" id="register-button" class="btn btn-primary pull-right">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data() {
      return {
        column_list: [],
        username: "",
        email: "",
        password: "",
        password1: "",
        password2: "",
        alert: "",
        show: true,
        showLogin: true,
        showRegister: true,
        fadeL: "",
        displayL: "",
        fadeR: "",
        displayR: "",
        dropdown: ""
      }
    },
    props: [
      "navUser"
    ],
    methods: {
      showAfterLogin: function () {
        if (this.dropdown === "open") {
          this.dropdown = "";
        } else {
          this.dropdown = "open";
        }
      },
      toggleLogin: function () {
        this.showLogin = !this.showLogin;
        if (!this.showLogin) {
          this.displayL = "block";
          this.fadeL = "in";
        } else {
          this.displayL = "none";
          this.fadeL = "";
        }
      },
      toggleRegister: function () {
        this.showRegister = !this.showRegister;
        if (!this.showRegister) {
          this.displayR = "block";
          this.fadeR = "in";
        } else {
          this.displayR = "none";
          this.fadeR = "";
        }
      },
      login: function () {
        this.show = false;
        this.alert = "";
        this.$axios.post("http://localhost:8080/api/user/doLogin", {
          username: this.username,
          password: this.password
        }).then(response => {
          var errors = response.data["errors"];
          if (errors.length === 0) {
            location.reload();
          }
          else {
            //alert(errors);
            var html = "<div class=\"alert alert-danger\">"
            for (var key in errors) {
              html += errors[key] + "<br/>";
            }
            html += "</div>";
            this.alert = html;
            this.show = true;
            // $("#login-modal .modal-header").after(html);
          }
        }).catch(error => {
          console.log(error);
        })

      },
      register: function () {
        this.show = false;
        this.alert = "";
        this.$axios.post("http://localhost:8080/api/user/doRegister", {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2
        }).then(response => {
          var errors = response.data["errors"];
          if (errors.length === 0) {
            location.reload();
            // location.load("base.html");
          }
          else {
            var html = "<div class=\"alert alert-danger\">"
            for (var key in errors) {
              html += errors[key] + "<br/>";
            }
            html += "</div>";
            this.alert = html;
            this.show = true;
            // $("#register-modal .modal-header").after(html);
          }
        }).catch(error => {
          console.log(error);
        })
      },
      logout: function () {
        this.$axios.post("http://localhost:8080/api/user/doLogout").then(response => {
          location.replace("/");
        }).catch(error => {
          console.log(error);
        })
      }
    },
    created() {
      this.$axios("http://localhost:8080/api/navColumn").then(response => {
        if (response.data.length === 0) {
          $("navColumn").remove();
        } else {
          this.column_list = response.data;
        }
      });
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  /*.vmaig-header.navbar {*/
  /*font-size: 14px;*/
  /*}*/

  /*.navbar-vmaig .navbar-brand {*/
  /*font-weight: bold;*/
  /*font-size: 25px;*/
  /*margin-right: 10px;*/
  /*color: #000;*/
  /*text-shadow: 1px 2px 5px rgba(255, 255, 255, 0.1), 0px 0px 30px rgba(255, 255, 255, 0.125);*/
  /*}*/

  /*.navbar-vmaig .navbar-text {*/
  /*margin: 30px 0px 0px 0px;*/
  /*font-weight: bold;*/
  /*color: #000;*/
  /*text-shadow: 1px 2px 5px rgba(255, 255, 255, 0.1), 0px 0px 30px rgba(255, 255, 255, 0.125);*/
  /*}*/

  /*.navbar-inverse {*/
  /*background-color: #222;*/
  /*border-color: #080808;*/
  /*}*/
</style>
