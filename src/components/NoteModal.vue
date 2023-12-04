<template>
  <modal-custom :submit="handleAddNote" @close="$emit('close')">
    <template #header>
      <h2>Добавление заметки</h2>
    </template>
    <template #body>
      <div class="modal__body">
        <input-custom
          v-model="noteTitle"
          inputLabel="Название заметки"
          placeholder="Введите название"
          showMaxlength
          :errorMessage="noteTitleErrorMessage"
          required
        />

        <textarea-custom
          v-model="noteContent"
          label="Текст заметки"
          placeholder="Введите текст"
          showMaxlength
          :errorMessage="noteContentErrorMessage"
          required
        />
      </div>
    </template>
    <template #footer>
      <div class="modal__footer">
        <button-primary type="submit" class="add-button">
          <template slot="text">
            <span>Добавить</span>
          </template>
        </button-primary>
      </div>
      <div v-if="hasError" class="text-small errorMessage">{{ errorMessage }}</div>
    </template>
  </modal-custom>
</template>

<script>
import ModalCustom from './ModalCustom.vue';
import InputCustom from './InputCustom.vue';
import TextareaCustom from './TextareaCustom.vue';
import ButtonPrimary from './ButtonPrimary.vue';

export default {
  name: 'NoteModal',
  components: {
    ModalCustom,
    InputCustom,
    ButtonPrimary,
    TextareaCustom,
  },
  data() {
    return {
      noteTitle: '',
      noteContent: '',
      errorMessage: '',
      noteTitleErrorMessage: '',
      noteContentErrorMessage: '',
    }
  },
  computed: {
    hasError() {
      return this.errorMessage.length;
    }
  },
  methods: {
    handleAddNote() {
    },
  }
}
</script>

<style scoped>
@import '../assets/styles/components.css';
.modal__body {
  display: grid;
  gap: 16px;
}

@media screen and (min-width: 768px) {
  .modal__body {
    gap: 24px;
  }
}

.modal__footer {
  display: grid;
  margin-top: 28px;
}

@media screen and (min-width: 768px) {
  .modal__footer {
    margin-top: 40px;
  }
}

@media screen and (min-width: 768px) {
  .add-button {
    margin-left: auto;
  }
}

</style>