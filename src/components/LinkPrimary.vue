<template>
  <a
    :href="href"
    tabindex="0"
    @click="$emit('click')"
    class="link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'LinkPrimary',
  props: {
    href: String,
  },
}
</script>

<style scoped>
.link {
  text-decoration: none;
  cursor: pointer;
  color: var(--green-light);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
}

.link:hover {
  color: var(--white);
}

@media screen and (min-width: 768px) {
	.link {
		font-size: 18px;
    line-height: 28px;
	}
}
</style>