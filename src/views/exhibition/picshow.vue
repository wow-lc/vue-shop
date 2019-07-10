<template>
  <div class="pic-container">
  <!--顶部选项卡 -->
    <top-slider></top-slider>
    <!-- 图片列表-->
    <ul>
      <li>
        <img src="https://good-food.oss-cn-shenzhen.aliyuncs.com/show_1.jpg"/>
      </li>
    </ul>
  </div>
</template>
<script>
import TopSlider from "../../components/TopSlider/TopSlider.vue";
export default {
  data() {
    return {};
  },
  components: {
    TopSlider
  }
};
</script>
<style lang="less" scoped>
.pic-container{
  
}
.allSort {
  .sortMenu-ul {
    .all {
      top: 44px;
    }
  }
}
</style>
