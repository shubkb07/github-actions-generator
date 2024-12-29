<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuLinks",
  computed: {
    themeClass() {
      return this.$store.state.theme === "dark" ? "p-menu-dark" : "p-menu-light";
    },
  },
};
</script>

<style scoped>
nav {
  background-color: var(--primary-color);
  color: var(--text-color);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 30px;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.p-menu-dark {
  --primary-color: #333;
  --text-color: white;
}

.p-menu-light {
  --primary-color: #fff;
  --text-color: black;
}
</style>
