<template>
  <div id="vmaig-search">
    <div class="search">
      <div class="form-inline clearfix" >
        <input @keyup.enter="doSearch" v-model="keyword" type="text" class="form-control" id="s">
        <a class="btn btn-vmaig" @click="doSearch">
          <span class="glyphicon glyphicon-search"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        keyword: ""
      }
    },
    methods: {
      doSearch: function () {
        // let keyword = this.keyword;
        // this.keyword = "";
        this.$router.push({
          name: "search", params: {keyword: this.keyword}
        });
      }
    }
  }
</script>

<style scoped>

</style>
