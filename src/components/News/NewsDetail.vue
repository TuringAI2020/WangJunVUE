<template>
  <div class="container">
    <div class="top">
        <a href="javascript:;">返回</a>
      <input type="text" placeholder="汪俊搜索">
      <a href="javascript:;">搜</a>
    </div>
    <div class="title">{{detail.Title}}</div>
    <div class="info">
      <div class="info_img"><img src="https://p3.pstatp.com/large/ff660000a22264a3ebe0"></div>
      <div class="info_text">
        <div class="info_text_name">科学网</div>
        <div class="info_text_summary"><span>原创</span><span>14小时前</span><span>认证身份</span></div>
      </div>
      <a class="info_follow">关注</a>
    </div>
    <div class="content" v-html="detail.ValueS01">
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
import API from '../../API/API'
export default {
  name: 'NewsDetail',
  data () {
    return {
      detail: {}
    }
  },
  created () { this.LoadDetail() },
  methods: {
    LoadDetail () {
      let vThis = this
      let id = this.$route.query.ID
      API.POST({
        'TargetClass': 'YunForm',
        'Method': 'Load',
        'Param': {},
        'InputParamArray': [id]
      }).then(res => {
        console.log(res)
        vThis.detail = res.data.DATA
      }).catch(ex => {
        console.error(ex)
      })
    }
  }
}
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
  padding-top: 4rem;
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
  padding-bottom: 4rem;
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
