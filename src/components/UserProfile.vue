<template>
  <div class="user-profile">
    <div class="text-small user-profile__info">
      {{ email }}
    </div>
    <div class="user-profile__toggle">
      <button-primary @click="toggleMenu" class="user-profile__button">
        <template slot="icon">
          <img src="/user.svg" alt="user icon" class="user-profile__image">
        </template>
      </button-primary>
      <div v-if="showMenu" class="user-profile__logout">
        <link-primary @click="handleLogout">
          Выйти
        </link-primary>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';
import LinkPrimary from './LinkPrimary.vue';

export default {
  name: 'UserProfile',
  components: {
    ButtonPrimary,
    LinkPrimary
  },
  props: {
    email: String,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleLogout() {
      this.showMenu = false;
      this.$emit('logout');
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/components.css';

.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-profile__info {
  display: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: end;
}

@media screen and (min-width: 768px) {
  .user-profile__info {
    display: inline-block;
    width: 360px;
  }
}

.user-profile__toggle {
  position: relative;
}

.user-profile__button {
  background-color: var(--dark-middle);
  padding: 14px 18px;
}

.user-profile__button:hover, .user-profile__button:active {
  outline: 4px solid var(--dark-middle);
}

.user-profile__button:hover {
  background-color: var(--dark-light);
}

.user-profile__button:active {
  background-color: var(--dark);
}

.user-profile__image {
  width: 20px;
}

.user-profile__logout {
  position: absolute;
  z-index: 99;
  top: 80px;
  right: 0;
  padding: 40px;
  border-radius: 12px;
  background-color: var(--dark-middle);
  box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
}

.user-profile__logout:after {
  content: "";
  position: absolute;
  margin-top: -6px;
  margin-left: -5px;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid var(--dark-middle);
  right: 16px;
  top: -2px;
  box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
}
</style>