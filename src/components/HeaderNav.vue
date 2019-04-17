<template>
  <div class="nav-main">
    <div class="title-main">
      <a href="">中国法网cnLaw.net成员</a>
      <div class="right-op">
        <a>设为首页</a>
        <a>加入收藏</a>
      </div>
    </div>
    <div class="header-con">
      <div class="title-sign">
        <span>湖北荆州<em>任金城</em>律师</span>
      </div>
      <el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a>处理中心</a></el-menu-item>
        <el-menu-item index="3"><a>消息中心</a></el-menu-item>
        <el-menu-item index="4"><a>订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
