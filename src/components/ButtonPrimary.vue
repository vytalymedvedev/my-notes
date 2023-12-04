<template>
  <button
    :type="type"
    :disabled="disabled"
    @click.stop.prevent="$emit('click')"
    class="button"
  >
    <slot name="icon"/>
    <slot name="text" />
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    }
  },
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--white);
  cursor: pointer;
  border: none;
  border-radius: 32px;
  padding: 20px;
  font-size: 20px;
  line-height: 32px;
  background-color: var(--green-light);
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
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