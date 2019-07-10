<template>
    <ul class="p-container">
         <li>
            <img src="../../assets/product01.jpg" alt="" srcset="">
            <p class="title">隔离美妆</p>
            <p class="desc">[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤</p>
            <p>
                <span class="new">￥85</span>
                <span class="old">￥220</span>
            </p>
        </li>
         <li>
            <img src="../../assets/product01.jpg" alt="" srcset="">
            <p class="title">隔离美妆</p>
            <p class="desc">[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤</p>
            <p>
                <span class="new">￥85</span>
                <span class="old">￥220</span>
            </p>
        </li>
        <li>
            <img src="../../assets/product01.jpg" alt="" srcset="">
            <p class="title">隔离美妆</p>
            <p class="desc">[网红小白管 平价CPB] 性价比之王 DWDEW 控油洁面美肤</p>
            <p>
                <span class="new">￥85</span>
                <span class="old">￥220</span>
            </p>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            products:[]
        }
    }
}
</script>
<style lang="less" scoped>
.p-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2px;
    li{
        width: 46%;
        background-color: #fff;
        margin-top: 8px;
        box-shadow: 2px 2px 3px #efeff4;
        border-radius: 4px;
        padding: 4px;
        line-height: 16px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
            color: #666666;
            margin-bottom: 2px;
        }
        .desc{
            font-size: 12px;
            color: #666666;
        }
        .new{
            color: #ff5400;
            font-size: 16px;
        }
        .old{
            text-decoration: line-through;
        }
        &:nth-child(1) ,&:nth-child(2){
            margin-top: 0;
        }
    }
}
</style>
