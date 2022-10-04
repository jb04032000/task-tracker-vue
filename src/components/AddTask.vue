<script>
export default {
  name: "AddTask",
  data() {
    return {
      task: "",
      day: "",
      reminder: false,
    };
  },
  emit: ["toggle-add-task"],
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.task) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        task: this.task,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit("add-task", newTask);
      this.task = "";
      this.day = "";
      this.reminder = false;
      this.$emit("toggle-add-task");
    },
  },
};
</script>

<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="task" v-model="task" name="task" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>
