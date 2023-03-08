<template>
  <div class="modal" v-if="isShown" @click="closeModal">
    <div @click.stop class="modal__window">
      <h3 class="modal__title" v-if="title">{{ title }}</h3>
      <div class="modal__content">
        <slot/>
      </div>
      <div class="modal__controls">
        <my-close-button @click="closeModal"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyCloseButton from "@/components/UI/MyCloseButton.vue";
import ToggleMixin from "@/mixins/ToggleMixin";

export default {
  name: "MyModal",
  components: {MyCloseButton},
  mixins: [ToggleMixin],
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
}

.modal__title {
  font-size: 2.4rem;
}

.modal__window {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;
  width: 100%;
  max-width: 100rem;

  border: 0.4rem solid seagreen;
  border-radius: 0.4rem;

  background-color: white;
}

.modal__controls {
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>