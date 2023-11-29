<template>
  <main class="welcomePage">
    <div class="welcomePage--text">
      <h1 class="title">
        Мои
        заметки
      </h1>
      <div class="subtitle">
        Не забывай о важном,
        храни его в облаке.
      </div>
    </div>
    <div class="welcomePage--board" />
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
.welcomePage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

@media screen and (min-width: 770px) {
	.welcomePage {
		flex-direction: row;
	}
}

.welcomePage--text {
  flex: 1;
  text-align: center;
}

@media screen and (min-width: 768px) {
	.welcomePage--text {
    text-align: start;
	}
}

.title {
  color: var(--white);
  font-size: 60px;
  line-height: 64px;
  margin: 40px 0;
}

@media screen and (min-width: 768px) {
	.title {
    font-size: 104px;
		max-width: 380px;
	}
}

.subtitle {
  color: var(--gray);
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
}

@media screen and (min-width: 768px) {
	.subtitle {
		max-width: 380px;
	}
}

.welcomePage--board {
  margin: 0 auto; 
  width: 100%;
  height: 100%;
  background-image: url('../../public/board.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  flex: 1;
}

@media screen and (min-width: 768px) {
	.welcomePage--board {
		width: 100%;
	}
}
</style>
