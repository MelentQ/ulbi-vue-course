<template>
  <form class="form" v-on:submit="createPost">
    <my-input v-focus v-model="post.title" placeholder="Title" type="text" required/>
    <my-input v-model="post.body" placeholder="Body" type="text" required/>
    <my-button>Create Post</my-button>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "PostForm",
  components: {MyButton, MyInput},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(e) {
      e.preventDefault();

      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;
}
</style>
