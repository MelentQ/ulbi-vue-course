<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.button {
  align-self: flex-start;

  padding: 1.2rem 3.6rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1;
}
</style>