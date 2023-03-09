<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>

<template>
  <div id="app">
    <nav><router-link to="/">Random</router-link></nav>
    <router-view />
  </div>
</template>

<style>
#app {
  --clr-debug: hotpink;
}
</style>
