<template>
  <header class="header">
    <img src="/logo.svg" alt="logo" class="header--logo"/>
    <user-profile v-if="true" :email="userEmail"/>
    <button-primary v-else @click="handleShowModal" class="header--button">
      <template slot="icon">
        <img src="/enter.svg" alt="enter icon" class="header--button-image">
      </template>
      <template slot="text">
        <span>Вход</span>
      </template>
    </button-primary>
    <login-modal v-if="showModal" @close="handleHideModal"></login-modal>
  </header>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';
import LoginModal from './LoginModal.vue';
import UserProfile from './UserProfile.vue';

export default {
  name: 'HeaderCommon',
  components: {
    ButtonPrimary,
    LoginModal,
    UserProfile
  },
  props: {
    isLoggedIn: Boolean
  },
  data() {
    return {
      showModal: false,
      user: {
        email: 'username@example.com'
      },
    }
  },
  computed: {
    userEmail() {
      return this.user?.email || '';
    }
  },
  methods: {
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