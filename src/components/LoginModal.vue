<template>  
  <modal-custom @close="$emit('close')">
    <template #header>
      <h2>Вход в ваш аккаунт</h2>
    </template>
    <template #body>
      <div class="modal--body">
        <input-custom
          v-model="email"
          inputLabel="Email"
          placeholder="Введите Email"
        />

        <input-custom
          v-model="password"
          inputLabel="Пароль"
          placeholder="Введите пароль"
        />
      </div>
    </template>
    <template #footer>
      <div class="modal--footer">
        <button-primary @click="handleLogin" class="login-button">
          <template slot="text">
            <span>Войти</span>
          </template>
        </button-primary>
        <div class="modal--footer-note">
          <div class="modal--footer-text">У вас нет аккаунта?&nbsp;</div>
          <link-primary class="modal--footer-link">
            Зарегистрируйтесь
          </link-primary>
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
    }
  },
  methods: {
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
		font-size: 18px;
    line-height: 28px;
	}
}

@media screen and (min-width: 1100px) {
	.modal--footer-text {
		display: block;
	}
}

.modal--footer-link {
  display: inline-block;
}
</style>