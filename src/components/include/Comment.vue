<template>
  <div>
    <div id="anchor-quote"></div>
    <div class="well">
      <div class="vmaig-comment">
        <div class="vmaig-comment-tx">
          <img v-if="user_img != ''" :src="user_img" width="40"/>
          <img v-else src="/static/img/avatarDefault.png" width="40"/>
        </div>
        <div class="vmaig-comment-edit clearfix">
          <div id="vmaig-comment-form">
            <!--{% csrf_token %}-->
            <textarea v-model="textInput" id="comment" name="comment" class="form-control" rows="4"
                      placeholder="请输入评论 限200字!">{{textInput}}</textarea>
            <button @click="submitComment" id="submitComment" type="submit" class="btn btn-vmaig-comments pull-right">提交</button>
          </div>
        </div>
        <ul v-if="showComment">
          <li v-for="(comment, index) in commentList">
            <div class="vmaig-comment-tx">
              <img v-if="comment.showImg === 'true'" :src="comment.user_img" width="40"/>
              <img v-else src="http://vmaig.qiniudn.com/image/tx/tx-default.jpg" width="40"/>
            </div>
            <div class="vmaig-comment-content">
              <a><h1>{{comment.user_username}}</h1></a>
              <div v-if="-1 != comment.parent" class="comment-quote" :id="'comment' + comment.parent">
                <p>
                  <a>@{{comment.parentUser_username}}：</a>
                  {{comment.parent_text}}
                </p>
              </div>
              <p>
                评论：
                {{comment.text}}
              </p>
              <p>{{comment.create_time | trimDate}} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <a class='quote' href="#anchor-quote" @click="reply(comment.user_username, comment.commentId)">回复</a>
              </p>
            </div>
          </li>
        </ul>
        <ul v-else v-html="alternative"></ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comment",
    props: [
      "commentList", "user_img", "showComment", "alternative", "article_id"
    ],
    data() {
      return {
        textInput: ""
      }
    },
    methods: {
      CommentQuote: function (user_name, commend_id) {
        var comment = document.getElementById('comment');
        this.textInput = "@['" + user_name + "', " + commend_id + "]: ";
        comment.focus();
        comment.setSelectionRange(comment.value.length, comment.value.length);
      },
      reply: function (username, id) {
        return this.CommentQuote(username, id);
      },
      submitComment: function () {
        this.$axios.post("/api/comment", {
          comment: this.textInput,
          article_id: this.article_id
        },{
          headers: {
            "csrf-token": this.$cookie.get('csrf-token')
          }
        }).then(response => {
          if (response.data["error"] != null) {
            var error = response.data["error"];
            alert(error);
            this.textInput = "";
            return;
          }
          this.commentList.unshift(response.data);
          this.textInput = "";
        }).catch(XMLHttpRequest => {
          alert(XMLHttpRequest.responseText);
        });
        return false;
      }
    },
    filters: {
      trimDate: function (date) {
        var list = date.split(',').join("");
        return list.slice(0, 4) + "-" + list.slice(4, 6) + "-" + list.slice(6, 8) +
          " " + (list.slice(8, 10)).toString() + ":" + list.slice(10, 12) + ":" + list.slice(12);
      }
    }
  }
</script>

<style scoped>

</style>
