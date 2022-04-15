<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-white text-dark flex" height-hint="98">
      <q-toolbar class="q-pa-md">
        <q-toolbar-title>
          <img class="logo" src="/images/Logo.svg" alt="" />
        </q-toolbar-title>

        <q-tabs class="pages" active-color="primary" align="left">
          <q-route-tab
            target="_blank"
            href=" https://reskillamericans.org/learn-more/"
            label="Learn more "
          />
          <q-route-tab
            target="_blank"
            href=" https://reskillamericans.org/partner/"
            label="Partner"
          />
          <q-route-tab
            target="_blank"
            href=" https://reskillamericans.org/donate/"
            label="Donate"
          />
          <q-route-tab
            target="_blank"
            href="https://reskillamericans.org/about/"
            label="About Us"
          />

          <q-route-tab
            target="_blank"
            href=" https://reskillamericans.org/news/"
            label="News"
          />

          <q-route-tab
            target="_blank"
            href="https://reskillamericans.org/faq/"
            label="FAQs"
          />
        </q-tabs>

        <q-btn
          class="menu"
          dense
          flat
          color="dark"
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-tabs class="column" active-color="primary">
        <div
          style="width: 100%"
          class="column q-py-lg items-center justify-center"
        >
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href=" https://reskillamericans.org/learn-more/"
            label="Learn more "
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href=" https://reskillamericans.org/partner/"
            label="Partner"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href=" https://reskillamericans.org/donate/"
            label="Donate"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href="https://reskillamericans.org/about/"
            label="About Us"
          />

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href=" https://reskillamericans.org/news/"
            label="News"
          />

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href="https://reskillamericans.org/faq/"
            label="FAQs"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href="info@reskillamericans.org"
            label="Contact Us"
          />

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            target="_blank"
            href="https://reskillamericans.org/privacy"
            label="Privacy and Policy"
          />
        </div>
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-dark absolute-bottom text-white">
      <div class="q-pa-md">
        <div class="row items-center">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <q-toolbar-title>
              <img class="logo" src="/images/Logo2.svg" alt="" />
            </q-toolbar-title>
            <p>Increasing access to careers in tech.</p>
          </div>
          <div class="col-md-4 col-sm-12 q-my-md col-xs-12">
            <!-- <h3 class="title text-secondary q-mb-md">Links</h3> -->
            <ul>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/learn-more/"
                  >Learn More</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/partner/"
                  >Partner</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/donate/"
                  >Donate</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="https://reskillamericans.org/about/"
                  >About Us</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 q-my-md col-xs-12">
            <!-- <h3 class="title text-secondary q-mb-md">Links</h3> -->
            <ul>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="info@reskillamericans.org"
                  >Contact Us</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="https://reskillamericans.org/privacy"
                  >Privacy Policy</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href=" https://reskillamericans.org/news/"
                  >News and Blog</a
                >
              </li>
              <li class="list-unstyled">
                <a
                  class="text-white"
                  target="_blank"
                  href="https://reskillamericans.org/faq/"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
<style scoped>
.menu {
  display: none;
}
.logo {
  width: 200px;
}

.page-col {
  display: flex;
  flex-direction: column;
}

.addbor {
  border: 1px solid #f4f4f4;
  padding: 0.55rem;
}
@media (max-width: 850px) {
  .menu {
    display: block;
  }

  .pages {
    display: none;
  }
  .logo {
    width: 160px;
  }
}
</style>
