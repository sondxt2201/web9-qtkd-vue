<template>
  <div class="grid-container">
    <TheHeader />
    <TheSidebar />
    <TheMainPage />
  </div>
  <TheDialog />
  <TheToast />
</template>

<style>
@import url("./style/main.css");
</style>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";
import TheMainPage from "./components/layout/TheMainPage.vue";
import TheDialog from "./components/dialog/TheDialog.vue";
import TheToast from "./components/toast/TheToast.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheSidebar,
    TheMainPage,
    TheDialog,
    TheToast,
  },
};
</script>


