<template>
  <div class="u-container">
    <div class="top">
      <div class="left">
        <p class="l-top">手机用户6845</p>
        <p class="r-top">手机账户</p>
      </div>
      <img src="../../../assets/logo.png" width="60px" height="60px" />
    </div>
    <div class="menu">
      <!-- 订单管理菜单 -->
    <card >
      <ul class="order-meun">
        <li>
          <img src="../../../assets/menu1.png" />
          <p>全部订单</p>
        </li>
        <li>
          <img src="../../../assets/menu9.png" />
          <p>待付款</p>
        </li>
        <li>
          <img src="../../../assets/menu8.png"/>
          <p>待发货</p>
        </li>
        <li>
          <img src="../../../assets/menu2.png" />
          <p>待收货</p>
        </li>
      </ul>
    </card>
    <!-- 优惠券菜单 -->
    <card>
      <ul class="order-meun">
        <li>
          <img src="../../../assets/menu1.png" />
          <p>拼团商城</p>
        </li>
        <li>
          <img src="../../../assets/menu2.png" />
          <p>邀请好友</p>
        </li>
        <li>
          <img src="../../../assets/menu3.png"/>
          <p>意见反馈</p>
        </li>
        <li>
          <img src="../../../assets/menu4.png" />
          <p>帮助和客服</p>
        </li>
      </ul>
    </card>
    <mt-button  type="danger" size="large" @click="logout">退出登录</mt-button>
    </div>
    
  </div>
</template>

<script>
import Card from "../../../components/Card/Card";
export default {
    methods: {
        logout(){
            let that = this;
            this.$messagebox.confirm('确认退出？', '退出')
            .then(()=>{
                that.$router.push('/');
            })
        }
    },
  components: {
    Card
  }
};
</script>

<style lang="less" scoped>
@font-color: #ffffff;
.u-container {
  position: relative;
  z-index: 199;
  .top {
    height: 120px;
    padding-top: 22px;
    padding-left: 16px;
    background-color: #0779f5;
    border-radius: 0 0 20% 20%;
    display: flex;
    justify-content: space-between;
    .left {
      .l-top {
        font-size: 22px;
        color: @font-color;
      }
      .r-top {
        color: @font-color;
      }
    }

    img {
      border-radius: 50%;
      vertical-align: middle;
    }
  }
  .menu{
    position: relative;
    top: -40px;
  }
  ul.order-meun {
    display: flex;
    justify-content: space-around;
    li {
      width: 20%;
      text-align: center;
      p{
          font-size: 12px;
      }
      img{
          width: 80%;
          margin-bottom: 5px;
      }
    }
  }
  button{
    width: 90%;
    margin: 0 auto;
  }
}
</style>
