<template>
  <div class="pic-container">
    <!--顶部选项卡 -->
    <top-slider @tabChange="tabChange"></top-slider>
    <!-- 图片列表-->
    <ul>
      <li v-for="(item,index) in picdatas" :key="index">
        <img v-lazy="item.url" @click="$toast('@我是懒加载图片哦')" />
        <p>{{item.desc}}</p>
      </li>
    </ul>
    <!-- 加载更多按钮 -->
    <div class="more" :style="isNoEmtry?'display:none':'display:block'">
      <mt-button
        type="primary"
        size="large"
        :plain="!loading"
        @click="getMore"
        :style="[!loading?'':'']"
        :disabled="loading"
      >{{!loading?'加载更多':'加载中...'}}</mt-button>
    </div>
    <!-- 返回顶部 -->
    <div v-if="isNoEmtry" class="backTop" @click="goTop">
      <img src="../../assets/backtop.png"  alt srcset />
      <span>已经到底了... </span>
    </div>
  </div>
</template>
<script>
import TopSlider from "../../components/TopSlider/TopSlider.vue";
let i = 1;
export default {
  data() {
    return {
      picdatas: [
        {
          url: "https://good-food.oss-cn-shenzhen.aliyuncs.com/show_1.jpg",
          desc:
            "我是超过三行的文字我是超过三行的文字我是超过三行的文字我是超过三行的文字我是超过三行的文字我是超过三行的文字三行的文字我是超过三行的文字我是超过三行的文字"
        },
        {
          url: "https://good-food.oss-cn-shenzhen.aliyuncs.com/show_2.jpg",
          desc:
            "善于表达， 真诚主动，富有感染力。热情，活泼，张扬。容易鼓舞勇气，同时也很容易生气，情绪波动较大"
        },
        {
          url: "https://good-food.oss-cn-shenzhen.aliyuncs.com/show_3.jpg",
          desc:
            "黄色的灿烂、辉煌，有着太阳般的光辉，象征着照亮黑暗的智慧之光，黄色有着金色的光芒，有象征着财富和权利"
        }
      ],
      loading: false,
      isNoEmtry: false
    };
  },
  components: {
    TopSlider
  },
  methods: {
    tabChange({sortname,name}) {
      // 顶部滚动条事件
      this.$toast({
        message: `@ ${sortname} --- [${name}]`,
        position: "bottom",
        duration: 2000
      });
    },
    getMore() {
      // 加载更多
      this.loading = !this.loading;
      // 模拟加载数据
      setTimeout(() => {
        if (i <= 0) {
          this.isNoEmtry = !this.isNoEmtry;
          return this.$toast("T T 没有更多数据了 ");
        }
        this.picdatas.push.apply(this.picdatas, this.picdatas);
        this.loading = !this.loading;
        i--;
      }, 2000);
    },
    goTop() {
      // 返回顶部
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style lang="less" scoped>
@basecolor: #26a2ff;
@c-white: #efeff4;

.pic-container {
  ul {
    padding: 8px;
    li {
      margin-top: 8px;
      position: relative;
      img {
        width: 100%;
        height: 200px;
        border-radius: 5px;
        box-shadow: 1px 1px 2px #000;
        background-color: @c-white;
      }
      p {
        margin: 0;
        position: absolute;
        bottom: 0;
        padding: 5px;
        color: @c-white;
        background-color: rgba(190, 190, 190, 0.8);
      }
    }
  }
  .more {
    padding: 12px;
    button:active {
      background-color: @basecolor;
    }
  }
  .backTop {
    text-align: center;
    img {
      width: 30px;
      vertical-align:middle
    }
    span{
      font-size: 16px;
      color: rgba(190, 190, 190, 0.8);
    }
  }
}
/* 懒加载图片*/
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.allSort {
  .sortMenu-ul {
    .all {
      top: 44px;
    }
  }
}
/*加载时的样式*/
.loading {
  color: white;
  background-color: @basecolor;
}
</style>
