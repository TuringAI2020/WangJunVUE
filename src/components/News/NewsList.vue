<template>
    <div class="container">
    <div class="top">
         <input type="text" placeholder="汪俊搜索" />
         <a href="javascript:;">搜</a>
    </div>        
    <div class="content">
        <a href="/#/NewsDetail" v-for="(item,index) in arr">
        <div class="listitem_1" >
            <div class="listitem_1_img">
                <img src="https://p3.pstatp.com/list/190x124/pgc-image/284fa01d89f94fb093fc09e4621f7c65"/>
            </div>
            <div class="listitem_1_text">
                <div class="listitem_1_title">正面美如画，前置一现丑成渣！ZenFone 6旋转摄像头设计被吐槽</div>
                <div class="listitem_1_info">
                    <div>
                        <span>作者姓名</span>
                        <span>评论数量</span>
                        <span>发表时间</span>
                    </div>
                    <a href="javasdcript:;">×</a>
                </div>
            </div>

        </div>
    </a>
    </div>        
    <div class="bottom">
<a href="javascript:;">
    <div></div>
    <div>首页</div>
</a>
<a href="javascript:;">
    <div></div>
    <div>互动</div>
</a>
<a href="javascript:;">
    <div></div>
    <div>关注</div>
</a>
<a href="javascript:;">
    <div></div>
    <div>我的</div>
</a>
    </div>        
    </div>
</template>
<script>
export default {
  name: 'NewsList',
  data () {
    return {
      arr:[1,2,3,4,5,6,6,7,8,9]
    }
  }
}
</script>

<style scoped>
.top{
    width:100%;
    height: 4rem;
    background-color: #ed4040;
    position: fixed !important;
    top:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.top input{
    height: 3rem;
    border-radius: 0.5rem;
    border: none;
    width: calc(100% - 5rem);
    font-size: 1.5rem;
    padding-left: 1rem;
}

.top a{
    display: block;
    height: 100%;
    width: 3rem;
    line-height: 4rem;
    font-size: 1.3rem;
    color: #fff;
    text-align: center;
}

.content{
    display: flex;
    flex-direction: column;
    padding-top: 4rem;

}

.listitem_1{
    height: 10rem;
    background-color: #fff;
    margin-bottom: 0.5rem;
    display: flex; 
}

.listitem_1_img{ 
    width: 12rem;
    height: 8rem;
    padding: 1rem;
}

.listitem_1_img img{
    width: 100%;
    height: 100%;
    border-radius:0.5rem;
}

.listitem_1_text{
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.listitem_1_title{
font-size: 1.1rem;
font-weight: 700;
text-align: left;
}

.listitem_1_info{
font-size:0.8rem;
display: flex;
justify-content: space-between;
align-items: center;
}

.listitem_1_info a{
    margin-right: 1rem;
}

.bottom{
    width:100%;
    height: 4rem;
    background-color: #f4f5f7;
    position: fixed !important;
    bottom:0;
    display: flex;
    border-top: 1px solid #e7e8ea;
}

.bottom a{
    line-height: 4rem;
    width: 25%;
    text-decoration: none;
    color: #000;
    text-align: center;
}
</style> 
 
<style scoped>
.fw_700{
    font-weight: 700;
}

.fs_1_5rem{
    font-size:1.5rem;
}

.fs_1_3rem{
    font-size:1.3rem;
}
</style> 
<style>
a{
    text-decoration: none;
    color:#000;
}
</style>
