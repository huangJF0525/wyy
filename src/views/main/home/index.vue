<template>
  <div class="home content">
    <div class="swiper"></div>
    <div class="home-left">
      <el-card class="box-card" v-for="(item, index) in listData" :key="index">
        <div slot="header" class="clearfix">
          <a @click="change(index)">{{ item.list_title }}</a>
          <span style="float: right; padding: 3px 0">{{
            item.list_time | _formatDate
          }}</span>
        </div>
        <div class="body">
          <a @click="change(index)"
            ><el-image
              :src="item.list_img"
              v-show="item.show_img == 1"
            ></el-image
          ></a>
          <p>
            {{ item.list_show | ellipsis }}<a @click="change(index)">详细></a>
          </p>
        </div>
      </el-card>
    </div>
    <div class="home-right"></div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      listData: []
    };
  },
  created() {
    this.main();
  },
  components: {},
  computed: {},
  filters: {
    _formatDate(time) {
      return moment(time).format("YYYY-MM-DD");
    },
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 50) {
        return value.slice(0, 50) + "...";
      }
      return value;
    }
  },
  watch: {},
  methods: {
    main() {
      this.$http
        .post("http://127.0.0.1:8088/list")
        .then(resp => {
          this.listData = resp.data;
          console.log(this.listData);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    change(i) {
      this.$router.push({
        name: "case",
        params: {
          id: this.listData[i].list_id
        }
      });
    }
  }
};
</script>
