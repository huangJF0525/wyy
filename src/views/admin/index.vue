<template>
  <div class="admin">
    <div class="header">
      <img src="https://cms.publiccms.com/resource/logo.png" alt="" />
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#131a23"
        text-color="#afc5f6"
        active-text-color="#6e9ec0"
      >
        <el-menu-item index="1"
          ><i class="el-icon-lollipop"></i>个人</el-menu-item
        >
        <el-menu-item index="2"
          ><i class="el-icon-tickets"></i>内容</el-menu-item
        >
        <el-menu-item index="3"><i class="el-icon-crop"></i>页面</el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-folder"> </i> 分类
        </el-menu-item>
        <el-menu-item index="5"><i class="el-icon-guide"></i>维护</el-menu-item>
        <el-menu-item index="6"
          ><i class="el-icon-guide"></i> 开发</el-menu-item
        >
        <el-menu-item index="7" disabled
          ><i class="el-icon-link"></i> 站点</el-menu-item
        >
      </el-menu>
    </div>

    <div class="content">
      <div class="leftnav">
        <my-left v-if="key == 1"></my-left>
        <cont-left v-if="key == 2"></cont-left>
        <page-left v-if="key == 3"></page-left>
        <classify-left v-if="key == 4"></classify-left>
        <maintain-left v-if="key == 5"></maintain-left>
        <exploit-left v-if="key == 6"></exploit-left>
      </div>
      <div class="right-content"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import MyLeft from "./components/MyLeft";
import ContLeft from "./components/ContLeft";
import PageLeft from "./components/PageLeft";
import ClassifyLeft from "./components/ClassifyLeft";
import MaintainLeft from "./components/MaintainLeft";
import ExploitLeft from "./components/ExploitLeft";

export default {
  data() {
    return {
      key: 1,
      activeIndex2: "1"
    };
  },
  created() {},
  components: {
    MyLeft,
    ContLeft,
    PageLeft,
    ClassifyLeft,
    ExploitLeft,
    MaintainLeft
  },
  computed: {},
  watch: {},
  methods: {
    handleSelect(key) {
      this.key = key;
    }
  }
};
</script>
