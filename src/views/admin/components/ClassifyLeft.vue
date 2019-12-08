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
          <span>分类管理</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">父分类</template>
          <el-submenu index="1-1-1">
            <template slot="title" @click="open">功能展示</template>
          </el-submenu>
          <el-submenu index="1-1-2">
            <template slot="title" @click="open">介绍</template>
          </el-submenu>
          <el-submenu index="1-1-3">
            <template slot="title" @click="open">演示</template>
          </el-submenu>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类拓展</span>
        </template>
        <el-menu-item index="2-1">分类类型</el-menu-item>
        <el-menu-item index="2-2">标签分类</el-menu-item>
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
    },
    open(key) {
      console.log(key._uid);
    }
  }
};
</script>
