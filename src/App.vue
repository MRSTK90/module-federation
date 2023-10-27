<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import serviceVue from "./components/service.vue";
import { loadRemoteModule } from "@softarc/native-federation";

const RemoteComponent: any = defineAsyncComponent(() =>
  loadRemoteModule("remote", "./host-app")
);
console.log(RemoteComponent);
</script>

<template>
  <serviceVue />
  <RemoteComponent v-if="!!RemoteComponent" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
