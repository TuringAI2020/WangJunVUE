<template>
  <div class="container">
    <div class="top">
        <a href="javascript:;">返回</a>
      <input type="text" placeholder="汪俊搜索">
      <a href="javascript:;">搜</a>
    </div>
    <div class="title">体验微服务分布式事务开源框架ServiceComb的Saga TCC模型</div>
    <div class="info">
      <div class="info_img"><img src="https://p3.pstatp.com/large/ff660000a22264a3ebe0"></div>
      <div class="info_text">
        <div class="info_text_name">科学网</div>
        <div class="info_text_summary"><span>原创</span><span>14小时前</span><span>认证身份</span></div>
      </div>
      <a class="info_follow">关注</a>
    </div>
    <div class="content">
      <p>随着时代的发展，手机厂商为了追求更高屏占比的的手机，升降、滑盖、挖孔等全面屏方案陆续出炉。</p>
      <p>从去年年底开始，挖孔屏手机陆续亮相。像三星Galaxy A8s、华为nova 4、荣耀V20、Galaxy S10、Galaxy S10+等等都是采用了挖孔屏方案。</p>
      <div class="pgc-img">
        <img
          src="http://p3.pstatp.com/large/pgc-image/f098db04d6c947a0a81b260cfcae615e"
          img_width="600"
          img_height="337"
          alt="一加手机为何不用挖孔屏？刘作虎给出了合理的解释！"
          inline="0"
        >
        <p class="pgc-img-caption"></p>
      </div>
      <p>而在昨天，一加发布的新品机型一加7 Pro则采用了升降式的方案。对于为何不采用挖孔式方案，一加创始人兼首席执行官刘作虎的解释是，现在的挖孔屏的开孔都太大了，等到开孔能做得更小，一加则会考虑采用挖孔的方案。</p>
      <p>对于挖孔屏方案，魅族集团董事长兼CEO黄章也曾在魅族社区中发表过自己的看法。黄章称，前置摄像头挖孔加黑边会显得很突出，并且下巴是怎么做都去不掉的，真机与网上经过PS修饰看上去不错的照片或图有很大的落差。</p>
      <div class="pgc-img">
        <img
          src="http://p1.pstatp.com/large/pgc-image/7311ce28ee51480fb9eda57a6cbefa97"
          img_width="600"
          img_height="145"
          alt="一加手机为何不用挖孔屏？刘作虎给出了合理的解释！"
          inline="0"
        >
        <p class="pgc-img-caption"></p>
      </div>
      <div class="pgc-img">
        <img
          src="http://p3.pstatp.com/large/pgc-image/3d8e5b72776044649ec9277acbdbeb25"
          img_width="600"
          img_height="124"
          alt="一加手机为何不用挖孔屏？刘作虎给出了合理的解释！"
          inline="0"
        >
        <p class="pgc-img-caption"></p>
      </div>
      <p>无论是刘作虎还是黄章，他们的看法都异曲同工，都在暗示了挖孔屏的技术尚未成熟。而从近期发布的多款新机（一加7 Pro、realme X）来看，升降式方案或许会是未来的一个大趋势。</p>
    </div>
    <div class="bottom">
      <a href="javascript:;">
        <div></div>
        <div>评论</div>
      </a>
      <a href="javascript:;">
        <div></div>
        <div>点赞</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsList",
  data() {
    return {};
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
}

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

.title {
  font-size: 1.5rem;
  padding: 2rem;
}

.info {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
}

.info_img {

}

.info_img img{
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
}


.info_text {
    padding-left: 1rem;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.info_text_name{
    font-weight: 700;
}

.info_text_summary{
    font-size: 0.5rem;
}

.info_follow {
    width: 4rem;
    margin-left: auto;
}

.info_text_name {
}

.info_text_summary {
}

.content {
  padding: 2rem;
}

.content img {
  width: 100%;
}

.bottom {
  width: 100%;
  height: 4rem;
  background-color: #f4f5f7;
  position: fixed !important;
  bottom: 0;
  display: flex;
  border-top: 1px solid #e7e8ea;
}

.bottom a {
  line-height: 4rem;
  width: 25%;
  text-decoration: none;
  color: #000;
  text-align: center;
}
</style> 
 
<style scoped>
.fw_700 {
  font-weight: 700;
}

.fs_1_5rem {
  font-size: 1.5rem;
}

.fs_1_3rem {
  font-size: 1.3rem;
}
</style> 
<style>
a {
  text-decoration: none;
  color: #000;
}
</style>
