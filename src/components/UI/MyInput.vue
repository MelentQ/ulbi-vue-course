<template>
  <input class="input" :value="modelValue" @input="onInput">
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  padding: 1.2rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;

  font-size: 1.6rem;
}
</style>