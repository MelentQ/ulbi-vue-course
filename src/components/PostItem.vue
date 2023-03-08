<template>
  <div class="post">
    <div class="post__heading">
      <span class="post__id">#{{ post.id }}</span>
      <h3 class="post__title">{{ post.title }}</h3>
    </div>
    <div class="post__body">
      {{ post.body }}
    </div>
    <div class="post__footer">
      <my-button @click="$router.push(`/posts/${post.id}`)">Detail Page</my-button>
    </div>
    <div class="post__controls">
      <my-close-button @click="$emit('remove', post)"/>
    </div>
  </div>
</template>

<script>
import MyCloseButton from "@/components/UI/MyCloseButton.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "PostItem",
  components: {MyButton, MyCloseButton},
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  position: relative;

  padding: 2rem 4rem 2rem 2rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;
}

.post__heading {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.post__id {
  font-size: 2rem;
}

.post__title {
  font-size: 2.4rem;
}

.post__body {
  margin-top: 2rem;

  font-size: 1.6rem;
  opacity: 0.8;
}

.post__controls {
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post__footer {
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 2rem;
}

</style>
