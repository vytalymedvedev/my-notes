<template>
  <div class="note">
    <div class="note--header">
      <h4>
        {{ title }}
      </h4>
    </div>
    <div class="note--line" />
    <div class="text-normal note--body">
      <div class="note--body-content">
        {{ content }}
      </div>
    </div>
    <div class="note--footer">
      <button-primary @click="$emit('remove')" class="note--footer-button">
        <template slot="icon">
          <img src="/cross.svg" alt="remove icon" class="note--footer-image">
        </template>
        <template slot="text">
          <span>Удалить</span>
        </template>
      </button-primary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';

export default {
  name: 'NotePrimary',
  components: {
    ButtonPrimary
  },
  props: {
    title: String,
    content: String,
  },
}
</script>

<style scoped>
@import '../assets/styles/components.css';

.note {
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: var(--green-light);
  color: var(--white);
  border-radius: 12px;
  box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.4);
}

.note:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 20px;
  border-style: solid;
  border-color: var(--dark) var(--dark) transparent transparent;
  background: var(--green);
  -moz-border-radius: 0 0 0 12px;
  border-radius: 0 0 0 12px;
  /* Firefox 3.0 damage limitation */
  display: block;
  width: 0;
}

.note--header, .note--body {
  padding: 20px 28px;
}

.note--body-content {
  display: -webkit-inline-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (min-width: 768px) {
	.note--body-content {
		-webkit-line-clamp: 4;
	}
}

@media screen and (min-width: 1000px) {
	.note--body-content {
		-webkit-line-clamp: 9;
	}
}

.note--footer {
  padding: 8px;
}

.note--line {
  border-top: 1px solid var(--green);
}

.note--footer-button {
  float: right;
  padding: 12px;
}
</style>