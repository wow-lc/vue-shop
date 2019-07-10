<template>
  <div id="app" class="app-contanier">
    <!-- header  -->
    <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">阿超商城</h1>
      <router-link to>
        <span @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></span>
      </router-link>
    </header>
    <!-- router-view -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- tabbar -->
    <nav v-if="$route.meta.showTabbar" class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      // 返回上一页
      console.log(111);

      this.$router.go(-1);
    }
  }
};
</script>

<style lang='less'>
.app-contanier {
  padding-top: 44px;
  padding-bottom: 50px;
  overflow: hidden;
  header.mui-bar{
    background-color:#0779F5;
    z-index: 99;
    h1.mui-title{
      color:#ffffff;
    }
    .mui-icon-back:before, .mui-icon-left-nav:before{
      color:#ffffff;
    }
  }
}

/* 切换动画 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.3s ease;
}
</style>
