<template>
  <div class="allSort">
    <div class="sortMenu clearfix">
      <ul class="sortMenu-ul">
        <li  :class="['cell',currsort === item.name?'active':'' ]" v-for="item in sortMenu" :key="item.name">
          <span @click="getSortName(item.name)">{{item.sortname}}</span>
        </li>
      </ul>
      <!-- 这里暂时不处理 -->
      <!-- <div class="all" v-on:click="subitemsExpanded=!subitemsExpanded"> --> 
      <div class="all" v-on:click="$toast('@这里暂时未处理')">
        <img src="../../assets/logo.png" alt />
      </div>
      <div v-show="subitemsExpanded" class="pull-down">
        <ul class="pull-down-sort">
          <li class v-for="pulldow in sortName" :key="pulldow.sortname">
            <span>{{pulldow.sortname}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allSort",
  data() {
    return {
      currsort: "all",
      sortMenu: [],
      sortName: [],
      subitemsExpanded: false
    };
  },
  created() {
    this.getClassify();
    this.getSortName(this.currsort);
  },
  methods: {
    getClassify() {
      // 获取分类菜单
      this.sortMenu = [
        { sortname: "全部", name: "all" },
        { sortname: "家用电器", name: "jydq" },
        { sortname: "大家电", name: "djd" },
        { sortname: "生活用品", name: "shsp" },
        { sortname: "食品", name: "sp" },
        { sortname: "美妆", name: "mz" },
        { sortname: "书籍", name: "sj" },
        { sortname: "洗护用品", name: "xhyp" },
        { sortname: "母婴用品", name: "myyp" },
        { sortname: "家居", name: "jj" }
      ];
    },
    getSortName(classify) {
      console.log(classify);

      // 获取指定分类下的图片
      this.currsort = classify;
      // 假设从服务器获取数据
      this.sortName = [
        { sortname: "家用电器" },
        { sortname: "母婴" },
        { sortname: "百货" },
        { sortname: "珠宝配饰" },
        { sortname: "运动户外" },
        { sortname: "食品" },
        { sortname: "美妆" },
        { sortname: "家装" },
        { sortname: "家居家纺" },
        { sortname: "鲜花宠物" },
        { sortname: "图书乐器" },
        { sortname: "生活服务" },
        { sortname: "游戏动漫" }
      ];
    }
  }
};
</script>  

<style lang="less" scoped>
@base: #4395FF;

/* 分类菜单*/
.sortMenu {
  width: 100%;
  background-color: #fff;
  overflow-x: scroll;
  -webkit-overflow-x: scroll;
}
.sortMenu::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: #fff;
}
.sortMenu-ul {
  min-width: 500px;
  display: flex;
  justify-content: flex-start;
}
.sortMenu .cell {
  display: inline-block;
  font-size: 12px;
  margin: 0px 1em;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: relative;
  text-overflow: ellipsis;
  word-break: keep-all;
}
.sortMenu .cell.special a {
  color: #ff474c;
}
.sortMenu .cell.special:before {
  content: "";
  height: 2px;
  width: 100%;
  background: #ff474c;
  position: absolute;
  bottom: 0px;
}
.sortMenu .all {
  right: 0;
  top: 45px;
  height: 35px;
  width: 35px;
  position: absolute;
  background: #fff;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sortMenu .all:before {
  content: "";
  height: 25px;
  width: 1px;
  position: absolute;
  box-shadow: 1px 0px 1px #e0e0e0;
  left: 0px;
}
.sortMenu .all img {
  display: block;
  width: 16px;
}
.sortMenu .pull-down {
  position: absolute;
  top: 40px;
  height: auto;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-top: 1px solid #f2f2f2;
}
.pull-down-sort {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}
.pull-down-sort li {
  float: left;
  padding: 0.1rem;
}
.pull-down-sort li a:hover {
  color: #ff474c;
}
.active{
    color:@base;
}
</style>