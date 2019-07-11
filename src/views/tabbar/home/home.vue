<template>
  <div class="h-container">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperPics" :key="item.createTime">
        <img :src="item.content" />
      </mt-swipe-item>
    </mt-swipe>
    <!--导航8宫图-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/news/list">
          <img src="./images/menu2.png" />
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
    <!-- recommoned-->
    <p class="p-title">今日推荐</p>
    <product-list :products="products"></product-list>
  </div>
</template>

<script>
import ProductList from "../../../components/ProductList/ProductList";

export default {
  data() {
    return {
      swiperPics: [],
      products: []
    };
  },
  components: {
    ProductList
  },
  created() {
    this.getSwipePics();
    this.getRecommoned();
  },
  methods: {
    getSwipePics() {
      // 获取轮播图
      this.$axios.get("/api/article/listArticle").then(rep => {
        this.swiperPics = rep.data.info.list;
      });
    },
    getRecommoned() {
      // 获取推荐商品列表
      this.products = [
        {
          id: 1,
          title: "隔离美妆",
          pic: "/product01.jpg",
          desc: "[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤",
          newprice: "85",
          oldprice: "220"
        },
        {
          id: 2,
          title: "隔离美妆",
          pic: "/product01.jpg",
          desc: "[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤",
          newprice: "85",
          oldprice: "220"
        },
        {
          id: 3,
          title: "隔离美妆",
          pic: "/product01.jpg",
          desc: "[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤",
          newprice: "85",
          oldprice: "220"
        },
        {
          id: 4,
          title: "隔离美妆",
          pic: "/product01.jpg",
          desc: "[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤",
          newprice: "85",
          oldprice: "220"
        },
        {
          id: 5,
          title: "隔离美妆",
          pic: "/product01.jpg",
          desc: "[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤",
          newprice: "85",
          oldprice: "220"
        }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
.h-container {
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
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
    border: 0;
    background-color: #efeff4;
    // border-bottom: 1px solid #000000;
    box-shadow: -1px -1px 2px gray;
    li {
      border: 0;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
  .p-title {
    padding: 8px;
    margin-bottom: 6px;
    box-shadow: -1px -1px 2px gray;
  }
}
</style>

