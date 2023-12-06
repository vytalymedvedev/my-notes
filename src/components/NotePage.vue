<template>
  <main class="note-page">
    <NoteModal v-if="showModal" @close="toggleShowModal" @add="handleAddNote"/>

    <div class="note-page__table">
      <NotePrimary
        v-for="note of notes"
        :title="note.title"
        :content="note.content"
        :key="note.id"
        @remove="handleRemoveNote(note.id)"
      />
    </div>
    
    <button-primary @click="toggleShowModal" class="note-page__add-note-button">
      <template slot="icon">
        <img src="/plus.svg" alt="remove icon" class="note-page__add-note-button-icon">
      </template>
    </button-primary>
  </main>
</template>

<script>
import NoteModal from './NoteModal.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import NotePrimary from './NotePrimary.vue';
import { getNotes, deleteNote } from '../api';

export default {
  name: 'NotePage',
  components: {
    ButtonPrimary,
    NotePrimary,
    NoteModal,
  },
  async created() {
    if(!this.token) {
      window.location.href = '/';
      return;
    }
    await this.handleGetNotes();
  },
  data() {
    return {
      token: window.localStorage.getItem('access_token'),
      showModal: false,
      notes: [],
    }
  },
  methods: {
    getNotes,
    deleteNote,
    toggleShowModal() {
      this.showModal = !this.showModal;
    },
    async handleAddNote() {
      this.showModal = false;
      await this.handleGetNotes();
    },
    async handleGetNotes() {
      try {
        const { data } = await this.getNotes(this.token);
        this.notes = [...data];
      } catch (error) {
        console.error(error);
      }
    },
    async handleRemoveNote(id) {
      try {
        await this.deleteNote(id, this.token);
        await this.handleGetNotes();
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style scoped>
.note-page {
  height: 100vh;
  padding-top: 20px;
}

.note-page__table {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media screen and (min-width: 768px) {
	.note-page {
		padding-top: 40px;
	}
}

@media screen and (min-width: 1366px) {
	.note-page__table {
		grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: min-content;
	}
}

@media screen and (min-width: 1920px) {
	.note-page__table {
		gap: 40px;
	}
}

.note-page__add-note-button {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
  margin-left: auto;
  margin-right: -1rem;
}

@media screen and (min-width: 1366px) {
	.note-page__add-note-button {
		margin-right: -4rem;
	}
}

@media screen and (min-width: 1920px) {
	.note-page__add-note-button {
		margin-right: -6rem;
	}
}

.note-page__add-note-button-icon {
  width: 16px;
}
</style>
  