<template>
  <div class="posts" v-if="posts.length > 0">
    <transition-group name="posts">
      <post-item v-for="post in posts" :post="post" @remove="$emit('remove', post)" :key="post.id"/>
    </transition-group>
  </div>
  <my-error v-else>
    No Posts Here
  </my-error>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import MyError from "@/components/UI/MyError.vue";

export default {
  name: "PostList",
  components: {MyError, PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    removePost(post) {

    }
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.posts-item {

}
.posts-enter-active,
.posts-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
.posts-move {
  transition: transform 0.8s ease;
}

</style>
