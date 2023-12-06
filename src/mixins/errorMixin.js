export const errorMixin = {
  methods: {
    handleErrorResponse(message) {
      if(typeof message === 'string') {
        this.errorMessage = message;
        return;
      }

      if(Array.isArray(message)) {
        this.errorMessage = message.reduce((acc, curr) => `${acc}${curr} `, '');
        return;
      }

      this.errorMessage = 'Неожидаемая ошибка!';
      return;
    },
  }
}