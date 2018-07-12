<template>
  <div>
    <ul class="pager">
      <li v-if="page_obj.has_previous" class="previous">
        <a :href="'?page=' +page_obj.previous_page_number">&larr; 上一页</a>
      </li>
      <li v-else class="previous disabled">
        <a>&larr; 上一页</a>
      </li>

      <li class="page-number">{{page_obj.number}}/{{page_obj.num_pages}}</li>

      <li v-if="page_obj.has_next" class="next">
        <a :href="'?page=' + page_obj.next_page_number">下一页 &rarr;</a>
      </li>
      <li v-else class="next disabled">
        <a>下一页 &rarr;</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    data(){
      return{
        page_obj: {

        }
      }
    }
  }
</script>

<style scoped>

</style>
