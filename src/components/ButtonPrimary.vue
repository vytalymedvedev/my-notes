<template>
  <button class="button" :disabled="disabled" @click="onClick">
    <slot name="icon"/>
    <slot name="text" />
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    disabled: Boolean
  },
  methods: {
    onClick: function() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.button {
  display: flex;
  gap: 12px;
  color: var(--white);
  border: none;
  border-radius: 32px;
  padding: 12px 20px;
  font-size: 20px;
  line-height: 32px;
  background-color: var(--green-light);
}

.button:hover {
  background-color: var(--green-middle);
}

.button:active {
  background-color: var(--green-dark);
}

.button:disabled {
  background-color: var(--gray);
}
</style>