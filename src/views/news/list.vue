<template>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="(news,index) in newsList" :key="news.time">
      <router-link :to='"/news/info/"+ index'>
        <img class="mui-media-object mui-pull-right" src="../../assets/logo.png" />
        <div class="mui-media-body">
          {{news.title}}
          <p class="mui-ellipsis">发表时间: {{news.time | dateFormat("YYYY-MM-DD")}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: "手游市场收入创新高 比肩全球电影票房" /*新闻标题*/,
          classify: "美股" /*新闻类别*/,
          time: "1486709000" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/usstock/c/2017-02-10/doc-ifyamkzq1221599.shtml" /*新闻链接*/
        },
        {
          title: "有色板块震荡走强 新疆众和、宏达股份涨停" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708931" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/e/2017-02-10/doc-ifyameqr7402628.shtml" /*新闻链接*/
        },
        {
          title: "美媒称澳大利亚谋求推进“TPP-1”：已与六国讨论" /*新闻标题*/,
          classify: "美股" /*新闻类别*/,
          time: "1486708688" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/usstock/c/2017-02-10/doc-ifyamkzq1221439.shtml" /*新闻链接*/
        },
        {
          title: "有色板块震荡走强 新疆众和宏达股份涨停" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708661" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/jsy/2017-02-10/doc-ifyamkzq1221426.shtml" /*新闻链接*/
        },
        {
          title:
            "快讯：沪强深弱沪指高位运行涨0.50% 钢铁板块成领头…" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708624" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/jsy/2017-02-10/doc-ifyameqr7402478.shtml" /*新闻链接*/
        },
        {
          title: "许峰：刘士余讲话让散户对投资者权益保护充满信心" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708529" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/stocktalk/2017-02-10/doc-ifyamkzq1221351.shtml" /*新闻链接*/
        },
        {
          title: "煤炭板块攻势再起 西山煤电涨7.13%" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708523" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/e/2017-02-10/doc-ifyamkzq1221347.shtml" /*新闻链接*/
        },
        {
          title: "快讯：黑色系午后狂飙 铁矿石玻璃涨停" /*新闻标题*/,
          classify: "期货" /*新闻类别*/,
          time: "1486708223" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/money/future/fmnews/2017-02-10/doc-ifyamkzq1221190.shtml" /*新闻链接*/
        },
        {
          title: "明天系实控上市公司再遭抛售 ST明科跌停" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708039" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/s/2017-02-10/doc-ifyamkzq1221109.shtml" /*新闻链接*/
        },
        {
          title: "钢铁板块继续高举高打 安阳钢铁等4股涨停" /*新闻标题*/,
          classify: "证券" /*新闻类别*/,
          time: "1486708008" /*发布时间*/,
          url:
            "http://finance.sina.com.cn/stock/e/2017-02-10/doc-ifyamkzq1221094.shtml" /*新闻链接*/
        }
      ]
    };
  },
  created() {
    this.getNewslist();
  },
  methods: {
    getNewslist() {
      let that = this;
      this.$axios
        .get(
          "/foo/?appid=cf1c419354f3fecb87dec3afc774976a&top=10&showContent=false"
        )
        .then(res => {
          if (res.data.error_code !== 0)
            return that.$toast("抱歉," + res.data.reason);
          this.newsList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.mui-media-body{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
