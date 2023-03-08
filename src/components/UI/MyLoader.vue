<template>
<div class="loader"></div>
</template>

<script>
export default {
  name: "MyLoader"
}
</script>

<style scoped>
.loader {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.loader:after {
  content: '';

  display: block;

  width: 6.4rem;
  height: 6.4rem;
  margin: 0.8rem;

  border-radius: 50%;
  border-width: 0.6rem;
  border-style: solid;
  border-color: seagreen transparent seagreen transparent;

  animation: loading 1.2s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>