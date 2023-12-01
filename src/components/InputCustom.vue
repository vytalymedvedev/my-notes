<template>
  <div class="inputCustom">
    <label for="" class="label"> {{ inputLabel }}</label>
    <input
      @input="onInput"
      :value="value"
      :type="inputType"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input"
      />
      <div v-if="secured" @click="toggleSecure" class="toggleSecure">
        <img :src="secureIconSrc" alt="secure icon" class="toggleSecure--icon"/>
      </div>
      <span v-if="errorMessage?.length" class="errorMessage"> {{ errorMessage }}</span>
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
    secured: Boolean,
  },
  data() {
    return {
      uniqueId: '',
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
    onInput(e) {
      this.$emit('input', e.target.value);
    },
    toggleSecure() {
      this.showValue = !this.showValue;
    }
  }
}
</script>

<style scoped>

.inputCustom {
  position: relative;
}

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

.toggleSecure {
  position: absolute;
  right: 28px;
  top: 64px;
  cursor: pointer;
}

.toggleSecure--icon {
  width: 18px;
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