<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <form @submit.prevent="submit" class="modal-container">

          <button-primary @click="$emit('close')" class="modal-default-button" >
            <template slot="icon">
              <img src="/cross.svg" alt="enter icon" class="modal--button-image">
            </template>
          </button-primary>
          <div class="modal-header">
            <slot name="header" />
          </div>

          <div class="modal-body">
            <slot name="body" />
          </div>

          <div class="modal-footer">
            <slot name="footer" />
          </div>

        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';

export default {
  name: 'ModalCustom',
  components: {
    ButtonPrimary,
  },
  props: {
    submit: Function,
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  background-color: var(--dark-middle);
  transition: all 0.3s ease;
  height: fit-content;
  border-radius: 40px;
  padding: 16px 16px 24px;
  max-width: 352px;
}

@media screen and (min-width: 768px) {
	.modal-container {
		padding: 20px 20px 56px;
    max-width: 688px;
	}
}

@media screen and (min-width: 1920px) {
	.modal-container {
    padding: 20px 20px 80px;
    max-width: 780px;
	}
}

.modal-header, .modal-body, .modal-footer {
  padding: 0 4px;
}

@media screen and (min-width: 768px) {
	.modal-header, .modal-body, .modal-footer {
		padding: 0 36px;
	}
}

@media screen and (min-width: 1920px) {
	.modal-header, .modal-body, .modal-footer {
		padding: 0 60px;
	}
}

.modal-default-button {
  margin-left: auto;
}
.modal--button-image {
  width: 16px;
  height: 16px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>