<template>
<div class="gantt-space">
      <div class="gantt-table">
        <div class="gantt-thead">
          <div class="row">
            <div class="cell"><h3>№</h3></div>
            <div class="cell"><h3>Task Name</h3></div>
            <div class="cell"><h3>Duration</h3></div>
            <div class="cell"><h3>Start</h3></div>
            <div class="cell"><h3>Finish</h3></div>
            <div class="cell"><h3>Predecsessorse</h3></div>
            <div class="cell"><h3>Resource Name</h3></div>
            <div class="cell"><h3>Functions</h3></div>
          </div>
        </div>
        <div class="gantt-tbody" >
            <div v-for="(task, index) in rows"  :key="index"  class="row">
              <div class="cell">{{index}}</div>
              <div class="cell">{{task.name}}</div>
              <div class="cell">{{task.duration}}</div>
              <div class="cell">{{task.dateStart}}</div>
              <div class="cell">{{task.dateFinish}}</div>
              <div class="cell">{{task.predecsessorse}}</div>
              <div class="cell">{{task.resource}}</div>
              <div class="cell">+</div>
            </div>
        </div>  
      </div>
      <button class="addTask" @click="showNewTask = true">
        <h1>Add</h1>
      </button>
      <new-task v-if="showNewTask" @close="showNewTask = false"></new-task>
</div>

</template>

<script>
import AddTask from "./AddTask";

export default {
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  components: {
    "new-task": AddTask
  },
  data() {
    return {
      showNewTask: false,
    };
  }
};
</script>

<style>
.gantt-space {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
}
.gantt-table {
  display: table;
  border-collapse: collapse;
  min-width: 800px;
}

.gantt-thead {
  display: table-header-group;
}

.gantt-tbody {
  display: table-row-group;
}
.gantt-thead > .row > .cell {
  height: 72px;
  vertical-align: middle;
}
.row {
  display: table-row;
}

.addTask {
  margin: 10px 0px;
  height: 25px;
  width: 70px;
  border-radius: 13px;
  background-color: white;
  border: solid 1px #42b982;
  color: #42b982;
  outline: none;
}

.addTask:hover {
  color: white;
  background-color: #42b982;
}
.addTask > h1 {
  font-size: 13px;
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}
</style>
