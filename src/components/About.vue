<template>
  <div class="content">
    <my-menu></my-menu>
    <div class="about">
      <h1>About</h1>
      <h2>Developer: Filippenko S.S.</h2>
      <h3>Version: v0.01</h3>
    </div>
  </div>
</template>


<script>
import Menu from "./Menu";

export default {
  data() {
    return {
    }
  },
  components: { 
    "my-menu": Menu
  }
}
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.about > h1 , h2, h3 {
  font-family: "Roboto";
}


</style>
