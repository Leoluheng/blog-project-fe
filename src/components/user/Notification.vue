<template>
  <div id="notification" class="well clearfix">
    <h2 class="underline">消息</h2>
    <div class="list-group">
      <a v-for="notification in notificationList" @click="readNotif(notification)"
         class="list-group-item"
         :value="notification.id"
         style="border-top-left-radius: 0px;border-top-right-radius: 0px;">
        {{notification.text}}
        <span v-if="notification.is_read == 1" class="label label-info pull-right">已读</span>
        <span v-else class="label label-warning pull-right">未读</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notification"
  }
</script>

<style scoped>

</style>
