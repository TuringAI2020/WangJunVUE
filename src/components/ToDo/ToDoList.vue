<template>
  <div class="todolist">
    <div class="head">
      <div class="date">今天</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item) in items" :key="item.ID"  @click="ToggleDetail(true,item)">
        <div class="check">
          <i class="fa fa-circle-thin"></i>
        </div>
        <div class="title">{{item.Title}}</div>
        <div class="fav">
          <i class="fa fa-star-o"></i>
        </div>
      </div>
    </div>
    <div class="roundBtn"  @click="ToggleDetail"><i class="fa fa-plus" aria-hidden="true"></i></div>
    <div class="squareBtn" @click="ToggleMenu"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></div>
    <!--菜单-->
    <div class="menu" v-show="showMenu===true">
      <div class="head">
        <div class="pic"><i class="fa fa-user-circle fa-4x" aria-hidden="true"></i></div>
        <div class="name">{{userInfo.Name}}</div>
        <div class="intro">{{userInfo.Intro}}</div>
      </div>
      <div class="list">
        <div class="item"  v-for="(item) in categories" :key="item.ID"  @click="ToggleMenu(false,item)">
          <div class="left">
            <div class="icon">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </div>
            <div class="name">{{item.Title}}</div>
          </div>

          <div class="badge">{{item.Badge}}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item) in buttonArray01" :key="item.Code">{{item.Name}}</div>
      </div>
    </div>
    <div class="mask" v-show="showMenu===true||showDetail===true" @click="ToggleMenu(false)"></div>

    <!--详细-->
    <div class="detail" v-show="showDetail===true">
      <div class="head">
          <textarea placeholder="标题" v-model="currentDetail.Title"></textarea>
      </div>
      <div class="list">
        <textarea cols="27" rows="17" placeholder="添加备注" v-model="currentDetail.Content"></textarea>
      </div>
      <div class="bottom">
        <div class="item" v-for="(item) in buttonArray02" :key="item.Code"  @click="ToggleDetail(false,currentDetail,item)">{{item.Name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      showMenu: false,
      showDetail: false,
      categories: [{ID: '1', Title: '分类名称01', Badge: 999}, {ID: '2', Title: '分类名称02', Badge: 999}, {ID: '3', Title: '分类名称03', Badge: 999}, {ID: '4', Title: '分类名称04', Badge: 999}, {ID: '5', Title: '分类名称05', Badge: 999}, {ID: '6', Title: '分类名称06', Badge: 999}, {ID: '7', Title: '分类名称07', Badge: 999}, {ID: '8', Title: '分类名称08', Badge: 999}, {ID: '9', Title: '分类名称09', Badge: 999}, {ID: '10', Title: '分类名称10', Badge: 999}],
      items: [{ID: '01', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '02', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '03', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '04', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '05', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '06', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '07', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '08', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '09', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '10', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '11', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '12', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '13', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '14', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}, {ID: '15', Title: '我的备忘', Content: '我的备忘备注', Fav: 0, Status: 0}],
      buttonArray01: [{Code: '01', Name: '新增清单'}, {Code: '02', Name: '设置'}],
      buttonArray02: [{Code: '01', Name: '放弃'}, {Code: '02', Name: '删除'}, {Code: '01', Name: '完成'}, {Code: '02', Name: '保存'}],
      userInfo: {Name: '汪俊', Intro: '汪俊，加油！'},
      currentDetail: {}
    }
  },
  methods: {
    ToggleMenu (forceStatus) {
      if (forceStatus === true || forceStatus === false) {
        this.showDetail = forceStatus
        this.showMenu = false
      } else {
        this.showMenu = !(this.showMenu === true)
      }
      this.showDetail = false
    },
    ToggleDetail (forceStatus, item) {
      if (forceStatus === true || forceStatus === false) {
        this.showDetail = forceStatus
        this.showMenu = false
      } else {
        this.showDetail = !(this.showDetail === true)
      }
      this.showMenu = false
      if (!(undefined === item || item === null)) {
        this.currentDetail = item
      }
    }
  }
}
</script>
<style lang="scss" scoped="" >
$bg1:#fff;
$bg2:#f4f4f4;
$bg3:transparent;
$bg4:#0099CC;
$bg5:rgb(0, 163, 49);
$line1:#f4f4f4;
$c1:#797979;

.todolist {
  display: flex;
  flex-direction: column;
  > .head {
    height: 12em;
    background-color: $bg4;
    position:sticky;
    top:0;
    .date {
      position: relative;
      bottom: -8rem;
      left: 2rem;
      font-size: 2rem;
      color: $bg1;
    }
  }

  > .list {
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height: calc(100%  - 12rem);
    background-color: $bg1;
    .item {
      display: flex;
      justify-content: space-between;
      text-align: left;
      flex-grow: 10;
      height: 3rem;
      line-height: 3rem;
      border-bottom: 1px solid $line1;
      .check {
      }
      .title {
        width: calc(100% - 2rem);
        padding-left: 0.5rem;
      }
      .fav {
        margin-right: 1rem;
      }
    }
  }
  .roundBtn {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    border-radius: 3rem;
    bottom: 1rem;
    right: 2rem;
    position: fixed;
    z-index: 9999;
    background-color: $bg4;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color:$bg1;
  }

  .squareBtn {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    top: 1rem;
    left: 1rem;
    position: fixed;
    z-index: 6999;
    background-color: $bg3;
    color:$bg1;
    text-align: center;
  }

  .menu {
    background-color: $bg1;
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .head {
      background-color: $bg1;
      height: 10rem;
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid $line1;
      > .pic{
        width: 4rem;
        height: 4rem;
        line-height: 4rem;
        border-radius: 4rem;
        background-color: $bg4;
        text-align: center;
        color: $bg1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      > .name{
        margin-top: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
      }
      > .intro{
        margin-top: 0.4rem;
        font-size: 0.8rem;
        height: 1rem;
        line-height: 1rem;
        color:$c1;
      }
    }
    > .list {
      overflow: scroll;
      flex-grow: 100;
      >.item {
        display: flex;
        justify-content: space-between;
        text-align: left;
        flex-grow: 10;
        height: 3rem;
        line-height: 3rem;
        .left {
          display: flex;
          padding-left: 0.5rem;

          .icon {
            width: 1.5rem;
            color:$bg4;
          }
          .name {
          }
        }

        .badge {
          padding-right: 1rem;
          color:$c1;
        }
      }
    }
    > .bottom{
      display: flex;
      justify-content: space-between;
      height: 3rem;
      border-top: 1px solid $line1;
      >.item{
        line-height: 3rem;
        width: 100%;
        text-align: center;
      }
    }
  }

  .detail {
    background-color: $bg1;
    z-index: 9999;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .head {
      background-color: $bg1;
      height: 10rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid $line1;
      textarea{
        height: 100%;
        border: none;
        font-size: 2.5rem;
        padding: 1rem;
      }
    }
    > .list {
      overflow: scroll;
      flex-grow: 50;
      textarea{
        border: none;
        font-size: 1.5rem;
        padding: 1rem;
        padding-top: 2rem;
      }
    }
    > .bottom{
      display: flex;
      justify-content: space-between;
      height: 3rem;
      border-top: 1px solid $line1;
      >.item{
        line-height: 3rem;
        width: 100%;
        text-align: center;
      }
    }
  }

  .mask{
    background-color: rgba($color: #000000, $alpha: 0.3);
    z-index: 4999;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
