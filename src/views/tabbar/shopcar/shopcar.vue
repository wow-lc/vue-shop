<template>
  <div class="shopcar ">
      <div class="mui-card shoplist" v-for="item in $store.state.shopcar" :key="item.id">
    <div class="mui-card-content">
      <div class="mui-card-content-inner" style="dispaly:flex @improtant">
          <mt-switch v-model="item.inSelect"></mt-switch>
      <img src="../../../assets/logo.png" alt srcset />
      <div class="desc">
        <p class="imitate_ellipsis">{{item.name}}</p>
        <div>
          <h3>￥{{item.price}}</h3>
          <div class="mui-numbox" style="margin:0 8px">
            <button
              class="mui-btn mui-btn-numbox-minus"
              type="button"
              @click="$store.commit('subtract',item.id)"
              :disabled="item.count<=1?true:false"
            >-</button>
            <input class="mui-input-numbox" type="number" v-model="item.count" />
            <button
              class="mui-btn mui-btn-numbox-plus"
              type="button"
              @click="$store.commit('increase',item.id)"
            >+</button>
          </div>
          <span @click="$store.commit('removeById',item.id)">删除</span>
        </div>
      </div>
      </div>
    </div>
  </div>
    <Card class="account">
      <div class="l-account">
        <p>总价(不含运费)</p>
        <p>
          已勾选商品
          <span>{{$store.getters.getSelectList.total}}</span>件,总价:
          <span>￥{{$store.getters.getSelectList.amount}}</span>
        </p>
      </div>
      <mt-button type="danger" size="small">结算</mt-button>
    </Card>
  </div>
</template>

<script>
import Card from "../../../components/Card/Card";

export default {
  data() {
    return {
      isTrue: false,
      count: 1
    };
  },
  components: {
    Card
  },
  methods: {}
};
</script>

<style lang="less" scoped >
.shopcar {
  .shoplist {
      display: flex;
      .mint-switch {
        display: inline-block;
      }
      img {
        width: 46px;
        height: 46px;
        vertical-align: baseline;
      }
      .desc {
        display: inline-block;
        h3 {
          display: inline;
          font-size: 16px;
          color: #ff5400;
        }
        span {
          color: #0779f5;
        }
      }
  }
  .account {
    .mui-card-content {
      display: flex;
      justify-content: space-between;
      .l-account {
        width: 66%;
        span {
          color: #ff5400;
          font-size: 16px;
        }
      }
      button {
        position: absolute;
        top: 50%;
        right: 10%;
        transform: translateY(-50%);
      }
    }
  }
}

.mui-card-content-inner{
  width: 100%;
  display: flex;
}
</style>
