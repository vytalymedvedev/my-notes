<template>
  <div id="app">
    <HeaderCommon />
    <WelcomePage />
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'
import HeaderCommon from './components/HeaderCommon.vue';

export default {
  name: 'App',
  components: {
    WelcomePage,
    HeaderCommon
  }
}
</script>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/main.css';

#app {
  display: flex;
  flex-flow: column;
  height: 100vh;
  background-color: var(--dark);
  padding: 0 20px;
  color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (min-width: 768px) {
	#app {
		padding: 0 40px;
	}
}

@media screen and (min-width: 1366px) {
	#app {
		padding: 0 80px;
	}
}

@media screen and (min-width: 1920px) {
	#app {
		padding: 0 160px;
	}
}
</style>
