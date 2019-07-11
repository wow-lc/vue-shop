<template>
  <ul class="p-container">
    <router-link  v-for="item in products" :key="item.id" :to="'/product/'+item.id" tag="li">
      <img :src="item.pic" alt srcset />
      <p class="title">{{item.title}}</p>
      <p class="desc">{{item.desc}}</p>
      <p>
        <span class="new">￥{{item.newprice}}</span>
        <span class="old">￥{{item.oldprice}}</span>
      </p>
    </router-link>
  </ul>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["products"]
};
</script>
<style lang="less" scoped>
.p-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2px;
  li {
    width: 46%;
    background-color: #fff;
    margin-top: 8px;
    box-shadow: 2px 2px 3px #efeff4;
    border-radius: 4px;
    padding: 4px;
    line-height: 16px;
    img {
      width: 100%;
      min-width: 140px;
    }
    .title {
      font-size: 14px;
      color: #666666;
      margin-bottom: 2px;
    }
    .desc {
      font-size: 12px;
      color: #666666;
    }
    .new {
      color: #ff5400;
      font-size: 16px;
    }
    .old {
      text-decoration: line-through;
    }
    &:nth-child(1),
    &:nth-child(2) {
      margin-top: 0;
    }
    &:nth-child(2n + 1) {
      margin-left: 8px;
    }
    &:nth-child(2n) {
      margin-right: 8px;
    }
  }
}
</style>
