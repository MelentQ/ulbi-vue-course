<template>
  <select :value="modelValue" @change="onChange" class="select">
    <option disabled value="">{{ placeholder }}</option>
    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChange(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>
.select {
  padding: 1.2rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  line-height: 1;
}
</style>