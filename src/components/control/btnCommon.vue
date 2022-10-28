<template>
  <button :class="classBtn" class="button">
    {{ text }}
  </button>
</template>
  
  <script>
export default {
  props: {
    classBtn: {
      Type: String,
      default: "button",
    },
    text: {
      Type: String,
      default: "button",
    },
  },
};
</script>
<style>
@import url("@/style/components/button.css");
</style>