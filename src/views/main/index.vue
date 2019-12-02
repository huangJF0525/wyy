<template>
  <div class="wrapper">
    <div class="item-1"></div>
    <div class="item-2">
      <div class="header-left">
        <span>登录</span>
        <span>注册</span>
      </div>
      <div class="header-right">
        <span>案例提交</span>
        <span>网站统计</span>
        <span>Javc API</span>
        <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
        <el-button size="mini" round>搜索</el-button>
      </div>
    </div>
    <div class="item-3"></div>
    <div class="item-4">4</div>
    <div class="item-5">
      <div class="topnav-left">
        <img src="@/assets/icon.png" alt="" />
        <p>更专业的选择</p>
      </div>
      <div class="topnav-right"></div>
    </div>
    <div class="item-6">6</div>
    <div class="item-7">7</div>
    <div class="item-8">
      <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="item-9">9</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  created() {},
  components: {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
