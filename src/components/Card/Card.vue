<template>
  <div class="mui-card">
    <div class="mui-card-content">
      <div v-if="header" class="mui-card-header">{{header}}</div>
      <div class="mui-card-content-inner" style="dispaly:flex @improtant">
          <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:['header']
}
</script>
<style lang="less" scoped>

</style>

