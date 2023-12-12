<template>
  <main class="notFoundPage">
    <h2>
      Not found
    </h2>
  </main>
</template>

<script>
export default {
  name: 'WelcomePage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.notFoundPage {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
