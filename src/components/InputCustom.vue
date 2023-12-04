<template>
  <div class="inputCustom">
    <label :for="uniqueId" class="text-small label"> {{ inputLabel }}</label>
    <input
      @input="onInput"
      :value="value"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      :id="uniqueId"
      :maxlength="maxlength"
      :required="required"
      class="text-small field"
      />

      <div v-if="secured" @click="toggleSecure" class="toggleSecure">
        <img :src="secureIconSrc" alt="secure icon" class="toggleSecure__icon"/>
      </div>

      <div class="field__footnote">
        <span v-if="errorMessage?.length" class="text-small errorMessage"> {{ errorMessage }}</span>
        <div v-if="showMaxlength" class="text-small maxlength"> {{ textLength }}</div>
      </div>
  </div>
</template>

<script>
import { inputMixin } from '../mixins/InputMixin';

export default {
  name: 'InputCustom',
  props: {
    inputLabel: String,
    value: String,
    placeholder: String,
    disabled: Boolean,
    errorMessage: String,
    secured: Boolean,
    required: Boolean,
    maxlength: {
      type: Number,
      default: 100
    },
    showMaxlength: Boolean
  },
  mixins: [inputMixin],
  data() {
    return {
      showValue: false,
    }
  },
  computed: {
    secureIconSrc() {
      return this.showValue ? '/off-password.svg' : '/on-password.svg';
    },
    inputType() {
      if(this.secured) {
        return this.showValue ? 'text' : 'password';
      }

      return 'text';
    },
  },
  methods: {
    toggleSecure() {
      this.showValue = !this.showValue;
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/components.css';
@import '../assets/styles/input/index.css';

.inputCustom {
  position: relative;
}

.label {
  display: block;
  color: var(--gray);
  margin-bottom: 8px;
  margin-left: 1.6rem;
}

.field {
  height: 72px;
}

.toggleSecure {
  position: absolute;
  right: 28px;
  top: 64px;
  cursor: pointer;
}

.toggleSecure__icon {
  width: 18px;
}
</style>