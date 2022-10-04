<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<template>
  <button @click="onClick()" class="btn" :style="{ background: color }">
    {{ text }}
  </button>
</template>

<style scoped>
header {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
}
</style>
