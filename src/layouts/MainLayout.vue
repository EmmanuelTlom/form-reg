<template>
  <q-layout class="hue" view="lHh Lpr lFf">
    <!-- <q-btn
      flat
      dense
      class="hide"
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
    /> -->
    <q-drawer side="right" v-model="leftDrawerOpen" bordered :breakpoint="1208">
      <q-list> </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.q-tab__indicator {
  background: #fed12e !important;
}
.q-drawer-container {
  display: none;
}
.hue {
  box-shadow: -1px 0 4px hsl(190, 64%, 15%, 0.15);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.hide {
  display: none;
}

@media (max-width: 768px) {
  .hide {
    display: block;
    position: absolute;
    /* top: 1px; */
    z-index: 1000;
    right: 20px;
  }

  .q-drawer-container {
    display: block;
  }

  nav {
    display: none;
  }
}
</style>
