<template>
  <div id="notification" class="well clearfix">
    <h2 class="underline">消息</h2>
    <div class="list-group">
      <router-link v-for="notification in notificationList" @click="readNotif(notification)"
                   class="list-group-item"
                   :value="notification.id"
                   style="border-top-left-radius: 0px;border-top-right-radius: 0px;">
        {{notification.text}}
        <span v-if="notification.is_read == 1" class="label label-info pull-right">已读</span>
        <span v-else class="label label-warning pull-right">未读</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notification",
    data() {
      return {
        notificationList: []
      }
    },
    methods: {
      readNotif: function (notification) {
        this.$axios.post("/api/user/setNotificationRead", {
          notification_id: notification.id
        }).then(response => {
          window.location.href = '/article/?address=' + notification.url + '#comment' + notification.commentId;
        }).error(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
        return false;
      }
    },
    created() {
      this.$axios("/api/user/doNotification", {username: this.$route.params.username}).then(response => {
        if (response.data("notificationList").length === 0) {
          $("#notification .list-group").empty().html('<div class="underline">No unread notification</div>');
        } else {
          this.notificationList = response.data("notificationList");
        }
      }).error(XMLHttpRequest => {
        alert(XMLHttpRequest.responseText);
      });
    }
  }
</script>

<style scoped>

</style>
