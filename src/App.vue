<template>
  <div id="app">
    <HeaderCommon />
    <component :is="currentView" />
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue';
import NotePage from './components/NotePage.vue';
import NotFoundPage from './components/NotFoundPage.vue';
import HeaderCommon from './components/HeaderCommon.vue';

const routes = {
  '/': WelcomePage,
  '/notes': NotePage,
  'not_found': NotFoundPage
}

export default {
  name: 'App',
  components: {
    WelcomePage,
    NotePage,
    NotFoundPage,
    HeaderCommon
  },
  data() {
    return {
      currentPath: window.location.pathname,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath] || routes['not_found'];
    }
  },
  mounted() {
    window.addEventListener('beforeunload', () => {
      this.currentPath = window.location.pathname;
    })
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
