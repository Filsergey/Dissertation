<template>
<div class="gantt-header-chart">
    <div class="gantt-row" v-for="(row, idx) in header" :key="idx">
      <div class="row-item" :title="obj.title" v-for="(obj, idx) in row" :key="idx" :style="{ width: obj.width + 'px' }">
        {{ obj.label }}
      </div>
    </div>
</div>  
</template>

<script>
export default {
  props: {
      header: {
          type: Array,
          required: true,
      }
  }

}
</script>

<style scoped>

.gantt-header-chart{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.gantt-row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  height: 24px;
}

 .gantt-row .row-item {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #41b882;
}

</style>

