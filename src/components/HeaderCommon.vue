<template>
  <header class="header">
    <img src="/logo.svg" alt="logo" class="header--logo"/>
    <user-profile v-if="userEmail" :email="userEmail" @logout="handleLogout"/>
    <button-primary v-else @click="handleShowModal" class="header--button">
      <template slot="icon">
        <img src="/enter.svg" alt="enter icon" class="header--button-image">
      </template>
      <template slot="text">
        <span>Вход</span>
      </template>
    </button-primary>
    <login-modal v-if="showModal" @close="handleHideModal" @authorized="onAuthorized"></login-modal>
  </header>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';
import LoginModal from './LoginModal.vue';
import UserProfile from './UserProfile.vue';
import { logout } from '../api/index';

export default {
  name: 'HeaderCommon',
  components: {
    ButtonPrimary,
    LoginModal,
    UserProfile
  },
  data() {
    return {
      showModal: false,
      loggedIn: false,
    }
  },
  computed: {
    userEmail() {
      return window.localStorage.getItem('email');
    },
  },
  methods: {
    async handleLogout() {
      try {
        const token = window.localStorage.getItem('access_token');
        await logout(token);
      } finally {
        window.localStorage.clear();
        window.location.href = '/';
      }
    },
    handleShowModal() {
      this.showModal = true;
    },
    handleHideModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

@media screen and (min-width: 1920px) {
	.header {
		padding: 40px 0;
	}
}

.header--logo {
  width: 154px;
}

@media screen and (min-width: 768px) {
	.header--logo {
		width: 220px;
	}
}

.header--button {
  padding: 12px 20px;
}

.header--button-image {
  width: 32px;
  height: 32px;
}
</style>