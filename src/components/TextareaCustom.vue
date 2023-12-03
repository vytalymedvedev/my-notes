<template>
  <div class="textareaCustom">
    <label :for="uniqueId" class="text-small label"> {{ label }}</label>
    <textarea
      @input="onInput"
      :value="value"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :id="uniqueId"
      :maxlength="maxlength"
      class="text-small field"
    />

    <div class="field__footnote">
      <span v-if="errorMessage?.length" class="text-small errorMessage"> {{ errorMessage }}</span>
      <div v-if="showMaxlength" class="text-small maxlength"> {{ textLength }}</div>
    </div>
  </div>
</template>

<script>
import { inputMixin } from '../mixins/InputMixin';

export default {
  name: 'TextareaCustom',
  props: {
    label: String,
    value: String,
    placeholder: String,
    errorMessage: String,
    disabled: Boolean,
    maxlength: {
      type: Number,
      default: 500
    },
    showMaxlength: Boolean
  },
  mixins: [inputMixin],
}
</script>

<style scoped>
@import '../assets/styles/components.css';
@import '../assets/styles/input/index.css';

.field {
  height: 168px;
  padding: 16px 28px;
  resize: none;
}

@media screen and (min-width: env(--break-sm)) {
  .field {
    height: 244px;
  }
}

</style>