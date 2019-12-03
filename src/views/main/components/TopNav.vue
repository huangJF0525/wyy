<template>
  <div>
    <div class="topnav-left">
      <img src="@/assets/icon.png" alt="" />
      <p>更专业的选择</p>
    </div>
    <div class="topnav-right">
      <ul class="clearfix">
        <li><router-link to="/home">首页</router-link></li>
        <li>
          <router-link to="/introduction">介绍</router-link>
          <ul class="subnav">
            <li><router-link to="/version">版本</router-link></li>
            <li><router-link to="/question">问答</router-link></li>
            <li><router-link to="/help">帮助</router-link></li>
            <li><router-link to="/science">技术</router-link></li>
          </ul>
        </li>
        <li><router-link to="/down">下载</router-link></li>
        <li><router-link to="/case">案例</router-link></li>
        <li>
          <router-link to="/login">演示</router-link>
          <ul class="subnav">
            <li><router-link to="/login">后台ui</router-link></li>
            <li><router-link to="/login">接口</router-link></li>
          </ul>
        </li>
        <li>
          <a href="https://www.oschina.net/question/tag/publiccms">支持</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
