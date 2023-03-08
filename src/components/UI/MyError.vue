<template>
  <div class="error">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MyError"
}
</script>

<style scoped>
.error {
  padding: 2rem;

  border: 0.4rem solid darkred;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  font-weight: 700;
}
</style>