<template>
  <div class="content">
    <my-menu></my-menu>
    <my-gantt></my-gantt>
  </div>
</template>

<script>
import Menu from './Menu';
import Gantt from './Gantt';

export default {
  data() {
    return {};
  },
  components: { 
    'my-menu': Menu,
    'my-gantt': Gantt,
  }
};
</script>


<style >
/* roboto-100italic - cyrillic_latin */
@import url('https://fonts.googleapis.com/css?family=Roboto:Thin');

.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
  height: 100vh;
}

.gantt-vue{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-family: "Roboto",sans-serif;
  color: #000;
}
</style>
