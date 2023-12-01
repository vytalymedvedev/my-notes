<template>  
  <modal-custom @close="$emit('close')">
    <template #header>
      <h2>{{ headerText }}</h2>
    </template>
    <template #body>
      <div class="Text--body">
        <input-custom
          v-model="email"
          inputLabel="Email"
          placeholder="Введите Email"
        />

        <input-custom
          v-model="password"
          secured
          inputLabel="Пароль"
          placeholder="Введите пароль"
        />

        <input-custom
          v-if="registration"
          v-model="passwordRepeat"
          secured
          inputLabel="Пароль ещё раз"
          placeholder="Введите пароль"
        />
      </div>
    </template>
    <template #footer>
      <div class="modal--footer">
        <button-primary @click="handleLogin" class="login-button">
          <template slot="text">
            <span>{{ enterText }}</span>
          </template>
        </button-primary>
        <div class="modal--footer-note">
          <template v-if="registration">
            <div class="modal--footer-text modal--footer-text__enter">У вас есть аккаунт?&nbsp;</div>
            <link-primary @click="toggleRegistration" class="modal--footer-link">
              Войдите
            </link-primary>
          </template>
          <template v-else>
            <div class="modal--footer-text">У вас нет аккаунта?&nbsp;</div>
            <link-primary @click="toggleRegistration" class="modal--footer-link">
              Зарегистрируйтесь
            </link-primary>
          </template>
        </div>
      </div>
    </template>
  </modal-custom>
</template>

<script>
import ModalCustom from './ModalCustom.vue';
import InputCustom from './InputCustom.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import LinkPrimary from './LinkPrimary.vue';

export default {
  name: 'LoginModal',
  components: {
    ModalCustom,
    InputCustom,
    ButtonPrimary,
    LinkPrimary,
  },
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      registration: false,
    }
  },
  computed: {
    headerText() {
      return this.registration ? 'Регистрация' : 'Вход в ваш аккаунт';
    },
    enterText() {
      return this.registration ? 'Зарегистрироваться' : 'Войти';
    }
  },
  methods: {
    toggleRegistration() {
      this.registration = !this.registration;
    },
    handleLogin() {
    },
  }
}
</script>

<style scoped>
.modal--body {
  display: grid;
  gap: 16px;
}

@media screen and (min-width: 768px) {
	.modal--body {
		gap: 24px;
	}
}

.modal--footer {
  margin-top: 28px;
  display: grid;
  gap: 12px;
}

@media screen and (min-width: 768px) {
	.modal--footer {
		display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
	}
}

.login-button {
  padding: 12px 24px;
}

.modal--footer-text {
  color: var(--gray);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: inline-block;
}

@media screen and (min-width: 768px) {
	.modal--footer-text {
    display: block;
		font-size: 18px;
    line-height: 28px;
	}
}

@media screen and (min-width: 1100px) {
	.modal--footer-text {
		display: inline-block;
	}
}

.modal--footer-text__enter {
  display: inline-block;
}

.modal--footer-link {
  display: inline-block;
}
</style>