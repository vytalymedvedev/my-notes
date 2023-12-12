<template>  
  <modal-custom :submit="handleSubmit" @close="$emit('close')">
    <template #header>
      <h2>{{ headerText }}</h2>
    </template>
    <template #body>
      <div class="modal--body">
        <input-custom
          v-model.trim="email"
          inputLabel="Email"
          placeholder="Введите Email"
          required
        />

        <input-custom
          v-model.trim="password"
          secured
          inputLabel="Пароль"
          placeholder="Введите пароль"
          required
        />

        <input-custom
          v-if="registration"
          v-model.trim="passwordRepeat"
          secured
          inputLabel="Пароль ещё раз"
          placeholder="Введите пароль"
          required
        />
      </div>
    </template>
    <template #footer>
      <div class="modal--footer">
        <button-primary type="submit" class="login-button">
          <template slot="text">
            <span>{{ enterText }}</span>
          </template>
        </button-primary>
        <div class="modal__footer-note">
          <template v-if="registration">
            <div class="text-small modal--footer-text modal--footer-text__enter">
              У вас есть аккаунт?&nbsp;
            </div>
            <link-primary @click="toggleRegistration" class="modal--footer-link">
              Войдите
            </link-primary>
          </template>
          <template v-else>
            <div class="text-small modal--footer-text">
              У вас нет аккаунта?&nbsp;
            </div>
            <link-primary @click="toggleRegistration" class="modal--footer-link">
              Зарегистрируйтесь
            </link-primary>
          </template>
        </div>
      </div>
      <div v-if="errorMessage?.length" class="text-small errorMessage">{{ errorMessage }}</div>
    </template>
  </modal-custom>
</template>

<script>
import ModalCustom from './ModalCustom.vue';
import InputCustom from './InputCustom.vue';
import ButtonPrimary from './ButtonPrimary.vue';
import LinkPrimary from './LinkPrimary.vue';
import { postRegistration, postAuth } from '../api/index';
import { errorMixin } from '@/mixins/errorMixin';

export default {
  name: 'LoginModal',
  components: {
    ModalCustom,
    InputCustom,
    ButtonPrimary,
    LinkPrimary,
  },
  mixins: [errorMixin],
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      registration: false,
      errorMessage: '',
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
    postRegistration,
    postAuth,
    toggleRegistration() {
      this.registration = !this.registration;
    },
    async handleSubmit() {
      this.errorMessage = '';

      try {
        if(this.registration) {
          const response = await this.postRegistration({ 
            email: this.email,
            password: this.password,
            confirm_password: this.passwordRepeat
         });

          if(response.status === 200) {
            await this.handleAuth({ 
              email: this.email,
              password: this.password,
            });
          }
        } else {
          await this.handleAuth({ 
            email: this.email,
            password: this.password,
          });
        }
      } catch (err) {
        this.handleErrorResponse(err?.response?.data?.message);
      }
    },
    async handleAuth(reqBody) {
      const response = await this.postAuth(reqBody);

      if(response.status === 200) {
        window.localStorage.setItem('access_token', response.data?.accessToken);
        window.localStorage.setItem('email', this.email);
        window.location.href = '/notes';
      } else {
        this.handleErrorResponse(response.data?.message);
      }
    },
  }
}
</script>

<style scoped>
@import '../assets/styles/components.css';
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

.modal__footer-note {
  padding-bottom: 16px;
}

.modal--footer-text {
  color: var(--gray);
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

@media screen and (min-width: 1920px) {
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

.errorMessage {
  margin-top: 20px;
  padding: 8px 20px;
  color: var(--orange);
  background: rgba(255, 116, 97, .1);
  border-radius: 24px;
}
</style>