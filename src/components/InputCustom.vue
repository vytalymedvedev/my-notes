<template>
  <div>
    <label for="" class="label"> {{ inputLabel }}</label>
    <input
      @input="onInput"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input"
      />
      <span v-if="errorMessage" class="errorMessage"> {{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputCustom',
  props: {
    inputLabel: String,
    value: String,
    placeholder: String,
    disabled: Boolean,
    errorMessage: String,
  },
  data() {
    return {
      uniqueId: '',
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style scoped>

.label {
  display: block;
  color: var(--gray);
  margin-bottom: 8px;
  margin-left: 1.6rem;
}

.input {
  height: 72px;
  width: 100%;
  border: none;
  color: var(--dark);
  border-radius: 36px;
  padding: 0 28px;
}

.errorMessage {
  color: var(--orange);
}

input, .label, .errorMessage {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}
</style>