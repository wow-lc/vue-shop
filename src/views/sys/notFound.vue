<template>
  <div class="notfound-container">
    <img src="../../assets/404.jpg" />
  </div>
</template>
<script>
export default {
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#ececec");
  },
  destroyed() {
    document.querySelector("body").setAttribute("style", 'background-color:#efeff4');
  }
};
</script>
<style lang="less" scoped>
#app {
  height: 100%;
}
.notfound-container {
  img {
    margin-top: 100px;
    width: 100%;
  }
}
</style>

