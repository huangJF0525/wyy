<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>与我相关</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">修改密码</el-menu-item>
          <el-menu-item index="1-2">我的内容</el-menu-item>
          <el-menu-item index="1-3">我的操作日志</el-menu-item>
          <el-menu-item index="1-4">我的登录日志</el-menu-item>
          <el-menu-item index="1-5">我的设备</el-menu-item>
          <el-menu-item index="1-6">我的登录授权</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
