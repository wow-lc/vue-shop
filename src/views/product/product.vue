<template>
  <div class="product-container">
    <!-- 商品展示图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="/product01.jpg" alt srcset />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/product01.jpg" alt srcset />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/product01.jpg" alt srcset />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 价格 描述-->
    <Card>
      <div class="p-head">
        <p class="new">
          <span>￥</span>
          {{product.newprice}}
        </p>
        <p class="old">
          价格
          <span>￥{{product.oldprice}}</span>
        </p>
        <div class="desc">
          {{product.name}}
          <span>分享</span>
        </div>
        <div class="others">
          <p class="zan">赞 3</p>
          <p class="help">帮我</p>
        </div>
      </div>
    </Card>

    <!--商品参数 描述-->
    <Card header="">
      <div class="p-content">
        <div class="mui-input-row">
          <label class="numbox">
            <p>购买数量:</p>
          </label>
          <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract">-</button>
            <input class="mui-input-numbox" type="number" v-model="count" disabled/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="increase">+</button>
          </div>
        </div>
        <div class="mui-input-row">
          <mt-button type="primary" size="small" class="btn-group">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
        </div>
      </div>
    </Card>

    <Card header="商品描述">
      <div class="p-content">
        <p>这是一个好东西这是一个好东西这是一个好东西这是一个好东西这是一个好东西这是一个好东西vvv</p>
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "../../components/Card/Card";
export default {
  data() {
    return {
        product:{
            newprice:19.6,
            oldprice:39.6,
            name:'自然堂雪润多重防晒隔离霜妆前乳保湿',
            pics:[],
        },
        count:1
    };
  },
  components: {
    Card
  },
  created() {
    this.product['id'] = this.$route.params.id;
    this.product['name'] += this.$route.params.id;
  },
  methods: {
      subtract(){  // 减
        if(this.count <= 1)
           return this.$messagebox('提示','购买的数量必须大于1');
        this.count -= 1;
      },
      increase(){  // 加
        this.count += 1;
      },
      addShopcar(){  // 加入购物车
        // 1.调用mutation中的方法 改变state
        var obj = {};
        let {id,name,newprice} = this.product;
        obj['id'] = id;
        obj['name'] = name;
        obj['price'] = newprice;
        obj['count'] = this.count;
        obj['inSelect'] = true;
        this.$store.commit('addShopcar',obj);
        this.$toast('成功添加购物车');
      }
  },
};
</script>
<style lang="less" scoped>
.product-container {
  .mint-swipe {
    height: 200px;
    background-color: azure;
    text-align: center;
    .mint-swipe-items-wrap {
      img {
        height: 100%;
      }
    }
  }
  .mui-card {
    margin: 0;
    margin-bottom: 8px;
  }

  .p-head {
    background-color: white;
    display: flex;
    flex-direction: column;

    .new {
      span {
        font-size: 16px;
      }
      color: #ff5400;
      font-size: 22px;
      margin-bottom: 0;
    }
    .old {
      span {
        text-decoration: line-through;
      }
    }
    .desc {
      padding-right: 40px;
      font-size: 18px;
      position: relative;
      span {
        font-size: 12px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background-color: #ff5400;
        margin-right: -15px;
        border-radius: 20% 0 0 20%;
        padding: 5px;
        color: white;
      }
    }
    .others {
      margin-top: 8px;
      display: flex;
      justify-content: space-around;
      .zan,
      .help{
        width: 50%;
        text-align: center;
      }
      .zan {
        border-right: 1px solid grey;
      }
    }
  }

  .p-content {
    .mui-input-row {
      margin-top: 8px;
      .numbox {
        padding: 0;
        line-height: 40px;
        width: 60px;
      }
      .btn-group {
        margin-right: 6px;
      }
    }
  }
}

.mui-input-row .mui-numbox {
  float: none;
}
</style>

