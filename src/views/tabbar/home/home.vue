<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperPics" :key="item.createTime"><img :src="item.content"></mt-swipe-item>
    </mt-swipe>
    <!--导航8宫图-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/exhibition/list">
          <img src="./images/menu7.png" />
          <div class="mui-media-body">图片展示</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu2.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu3.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu4.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu5.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu6.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperPics: []
    };
  },
  created() {
    this.getSwipePics();
  },
  methods: {
    getSwipePics() {
      // 获取轮播图
      this.$axios.get("/api/article/listArticle").then(rep => {
        this.swiperPics = rep.data.info.list;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
  font-size:13px;
}
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(2n) {
      background-color: aqua;
    }
    &:nth-child(2n + 1) {
      background-color: greenyellow;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: 0;
  li {
    border: 0;
  }
  img {
    width: 50px;
    height: 50px;
  }
}
</style>

