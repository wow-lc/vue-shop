import Vue from 'vue'
import Vuex from 'vuex'

var math = require('mathjs');
Vue.use(Vuex)

// 每次刚进入网站，就去获取本地存储中的购物车信息
var shopcar = JSON.parse(localStorage.getItem('shopcar') || '[]');
export default new Vuex.Store({
  state: {  // this.$store.state.****
    shopcar: shopcar
  },
  mutations: { // this.$store.commit
    addShopcar(state, product) {  // 加入购物车
      // 1. 判断是否存在   ?   对应数值加   ： 添加到数组中
      console.dir(product);
      let flag = state.shopcar.some((item) => {
        if (item.id === product.id) {
          item.count += parseInt(product.count);
          return true;
        }
      });

      if (!flag) {
        state.shopcar.push(product);
      }

      window.localStorage.setItem('shopcar', JSON.stringify(state.shopcar));

    },
    subtract(state, id) {  // 减
      state.shopcar.some((item) => {
        if (item.id === id) {
          item.count--;
          return true;
        }
      })
      window.localStorage.setItem('shopcar', JSON.stringify(state.shopcar));
    },
    increase(state, id) {  // 加
      state.shopcar.some((item) => {
        if (item.id === id) {
          item.count++;
          return true;
        }
      })
      window.localStorage.setItem('shopcar', JSON.stringify(state.shopcar));
    },
    removeById(state,id){ // 根据id 将购物车中的数据移除  
      var newShopcar = state.shopcar.filter((item)=>{
        return item.id != id;
      })
      state.shopcar = newShopcar;
      window.localStorage.setItem('shopcar', JSON.stringify(state.shopcar));
    } 
  },
  getters: {
    shopCount: (state) => {    // 商品的总件数
      let sum = 0;
      state.shopcar.forEach(item => {
        sum += item.count;
      });

      return sum;
    },
    getSelectList: (state) => {  // 已选择的商品
      var obj = {};
      var count = 0;
      var amount = 0;
      state.shopcar.forEach((item) => {
        if (item.inSelect) {
          
          amount=  math.format(math.chain(math.bignumber(Math.round(item.price * item.count * 100)/100)).add(math.bignumber(amount)).done());
          count += item.count;
        }
      })

      obj['amount'] = amount;
      obj['total'] = count;

      return obj;
    }
  },
  actions: {

  }
})
