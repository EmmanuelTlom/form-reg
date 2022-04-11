<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  font-size: 1.6rem;
  overflow-x: hidden;
}
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
