<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {
      showAddTask: false,
      tasks: [],
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <router-view
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
    ></router-view>
    <Footer />
  </div>
</template>
