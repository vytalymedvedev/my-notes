export const inputMixin = {
  data() {
    return {
      uniqueId: '',
    }
  },
  mounted() {
    this.uniqueId = (Math.random() + 1).toString(36).substring(7);
  },
  computed: {
    textLength() {
      return `${this.value?.length}/${this.maxlength}`;
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  }
}