<template>
  <header class="header">
    <img src="/logo.svg" alt="logo" class="header--logo"/>
    <button-primary @click="logMessage">
      <template slot="icon">
        <img src="/enter.svg" alt="enter icon" class="header--button-image">
      </template>
      <template slot="text">
        <span>Вход</span>
      </template>
    </button-primary>
  </header>
</template>

<script>
import ButtonPrimary from './ButtonPrimary.vue';

export default {
name: 'HeaderCommon',
components: {
  ButtonPrimary,
},
props: {
  isLoggedIn: Boolean
},
methods: {
  logMessage: () => {
    console.log('clicked');
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

.header--button-image {
  width: 32px;
  height: 32px;
}
</style>