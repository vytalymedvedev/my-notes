<template>
  <main class="note-page">
    <div class="note-page__table">
      <NotePrimary
        v-for="(note, index) of notes"
        :title="note.title"
        :content="note.content"
        :key="index"
      />
    </div>
    
    <button-primary @click="handleAddNote" class="note-page__add-note-button">
      <template slot="icon">
        <img src="/plus.svg" alt="remove icon" class="note-page__add-note-button-icon">
      </template>
    </button-primary>
  </main>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';
import NotePrimary from './NotePrimary.vue';

export default {
  name: 'NotePage',
  components: {
    ButtonPrimary,
    NotePrimary,
  },
  data() {
    return {
      notes: [
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
        {
          title: 'Заголовок',
          content: 'Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик.', 
        },
        {
          title: 'Заголовок',
          content: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.', 
        },
      ],
    }
  },
  methods: {
    handleAddNote() {
      
    }
  }
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

@media screen and (min-width: 1920px) {
	.note-page__table {
		grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    grid-auto-rows: min-content;
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
  