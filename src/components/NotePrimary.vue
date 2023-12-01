<template>
  <div class="note">
    <h4 class="note--header">{{ noteData?.title }}</h4>
    <div class="note--line" />
    <div class="text-normal note--body">{{ noteData?.content }}</div>
    <div class="note--footer">
      <button-primary @click="$emit('remove')" class="note--footer-button">
        <template slot="icon">
          <img src="/cross.svg" alt="remove icon" class="note--footer-image">
        </template>
        <template slot="text">
          <span>Удалить</span>
        </template>
      </button-primary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';

export default {
  name: 'NotePrimary',
  components: {
    ButtonPrimary
  },
  props: {
    noteData: Object
  }
}
</script>

<style scoped>
@import '../assets/styles/components.css';

.note {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: var(--green-light);
  color: var(--white);
  border-radius: 12px;
  box-shadow: 0 15px 15px 10px rgba(0, 0, 0, 0.4);
}

.note--header, .note--body {
  padding: 20px 28px;
}

.note--footer {
  padding: 8px;
}

.note--line {
  border-top: 1px solid var(--green);
}

.note--footer-button {
  float: right;
  padding: 12px;
}
</style>