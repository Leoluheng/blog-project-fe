<template>
  <div id="notification" class="well clearfix">
    <h2 class="underline">消息</h2>
    <div class="list-group">
      <a v-if="show" v-for="notification in notificationList" :key="notification.id" @click="readNotif(notification)"
         class="list-group-item"
         :value="notification.id"
         style="border-top-left-radius: 0px;border-top-right-radius: 0px;">
        {{notification.text}}
        <span v-if="notification.is_read == 1" class="label label-info pull-right">已读</span>
        <span v-else class="label label-warning pull-right">未读</span>
      </a>
      <div v-else v-html="notice"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notification",
    data() {
      return {
        notificationList: [],
        notice: "",
        show: true
      }
    },
    methods: {
      readNotif: function (notification) {
        this.$axios({
          method: "post",
          url: "/api/user/setNotificationRead",
          data: {
            notification_id: notification.id
          },
          header: {
            'csrf-token': this.$cookie.get('csrf-token')
          }
        }).then(response => {
          this.$router.push({
            name: "article",
            params: {address: notification.url},
            hash: '#comment' + notification.commentId
          })
        }).catch(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
        return false;
      }
    },
    created() {
      this.$axios("/api/user/doNotification", {username: this.$route.params.username}, {
        headers: {
          "csrf-token": this.$cookie.get('csrf-token')
        }
      }).then(response => {
        if (response.data["notificationList"].length === 0) {
          this.notice = '<div class="underline">No unread notification</div>';
          this.show = false;
        } else {
          this.notificationList = response.data["notificationList"];
        }
      }).catch(XMLHttpRequest => {
        alert(XMLHttpRequest.responseText);
      });
    }
  }
</script>

<style scoped>

</style>
