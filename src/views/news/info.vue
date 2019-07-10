<template>
  <div class="info-container">
    <h3>手游市场收入创新高 比肩全球电影票房</h3>
    <div class="info-title">
      <span>
        <img src="../../assets/logo.png" />
        小V
      </span>
      <span>1小时前·88评论</span>
    </div>
    <div class="info-content">
      <div v-html="connent"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      connent: `	<img src="//k.sinaimg.cn/n/finance/transform/20170210/bZN_-fyamkpy8684907.jpg/w700h350z1l10t109c4.jpg"/>
                    <section>
                    <p class="art_p">新浪美股讯 北京时间10日财富中文网报道，据研究公司SuperData Research和Unity Technologies联合进行的一项研究显示，2016年，全球手游市场的营收入达到了创记录的406亿美元，基本上与同期的全球电影票房收入持平。</p>
                    <p class="art_p">手游市场目前已经占据了全球数码游戏市场的半壁江山。今年的热门手游包括《Pokémon Go》和《Super Mario Run》等。此次发布的调查报告涵盖了手游、移动VR和总体VR市场，并且首次同时采用了这两家公司的数据。</p>
                    <p class="art_p">SuperData Research公司的研究与战略副总裁斯蒂芬妮-利亚马斯表示：“全球手游市场的可持续增长也正在促进传统媒介游戏的手游化。手游市场的规模也吸引了业内领先企业纷纷采取动作，比如动视暴雪收购了手游公司King，腾讯收购了手游公司Supercell（即《部落冲突》的开发商）等等。”</p>
                    <p class="art_p">亚洲是目前全球最大的手游市场，2016年，亚洲手游市场的营收入达到248亿美元，而北美和欧洲市场的营收入分别只有69亿和57亿美元。</p>
                    <p class="art_p">如今，美国人花在手游上的时间已经超过了在Netflix、Hulu和YouTube上看视频的时间。2016年他们在手游上的花销也比上年增长了5%。两家研究公司认为这一开销还将继续上涨。</p>
                    <p class="art_p">Unity Analytics公司总经理约翰-程指出：“玩家现在安装的应用比以往任何时候还多，而且比起看电视和网络视频，他们现在更喜欢玩手游。他们平均每周有六天都在玩手游，而只有五天会看视频。在不同的手机和VR平台上，用户对手游的参与度的增长都是非常显著的。在可预见的将来，这种增长趋势还会继续下去。”</p>
                    <p class="art_p">2016年，用户玩手游的时间在iOS平台上增长了12%，在Android平台上增长了9%，每名玩家平均每天要玩30分钟的手游。随着消费者花在手游上的时间越来越长，手游开发商和营销商预计也将有更大的机会利用这种趋势生钱。</p>
                    <p class="art_p">这份研究报告还发现，58%的手游玩家喜欢玩解谜游戏，40%的玩家喜欢玩动作游戏，26%的玩家喜欢玩策略游戏。解谜游戏一般不要求高水平的图像处理能力，也比较适合在出行的路上玩耍。</p>
                    <div sax-type="proxy" class="j_native_stu190709 box" data-inserttype="0" style="margin:20px 0" data-id="201711dingdingeb"></div><p class="art_p">不过如果按装机量计算，动作游戏则占到了手游装机量的30%，而解谜游戏只占14%。和解谜游戏不同的是，动作游戏很快就能过关，而且它的玩家保持率也能达到解谜游戏的70%。</p>
                    <p class="art_p">美国是唯一一个iOS玩家多于Android玩家的国家。Android游戏占据了全球手游市场78%的份额，但iOS平台贡献的营收入总体上还是要超过Android平台。</p>
                    <p class="art_p">在美国，对于开发者来说，每名iOS玩家贡献的营收入平均要超过Android玩家45%。但是在中国，Android玩家的价值则达到了iOS玩家的8倍。</p>
                    <p class="art_p">2016年，印度尼西亚手游市场的广告价值猛增了三倍，手游装机量上涨了192个百分点。印尼手游玩家在手游上的花销平均也比印度玩家高出84%，因此为开发者带来了无可争议的商机。</p>
                    <p class="art_p">另外，用户对虚拟现实（VR）的参与频率甚至超过了游戏、电影和电视。移动VR用户平均每月会玩48次VR，而PC或游戏机用户平均每月会玩36次VR。</p>
                    <p class="art_p">2016年VR市场的总营收为18亿美元，共售出VR设备630万台。三星的Gear VR由于相对Oculus等高价竞争对手的进入壁垒较低（加之价格优惠力度大），因此以450万台的销量领跑VR市场。（财富中文网）</p>
                    <p class="art_p">作者：Dean Takahashi</p>
                    <p class="art_p">译者：朴成奎</p><p style="text-align:right;" class="article-editor">责任编辑：张玉洁 SF107</p>		`
    };
  },
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#efeff4");
  },
  destroyed() {
    document.querySelector("body").setAttribute("style", 'background-color:white');
  }
};
</script>
<style lang="less">
.info-container {
  .info-title {
    display: flex;
    justify-content: space-between;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .info-content {
    img {
      width: 100%;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    p {
      font-size: 16px;
      line-height: 18px;
      text-indent: 2em;
    }
  }
}
</style>

