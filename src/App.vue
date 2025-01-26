<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>