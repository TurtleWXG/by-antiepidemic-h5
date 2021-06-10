<template>
  <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div class="contain">
      <div class="item">
        序号
      </div>
      <div class="item">
        标题
      </div>
      <div class="item">
        操作
      </div>
    </div>
    <div class="contain" v-for="item in 10" :key="item">
      <div class="item">{{ item }}</div>
      <div class="item">标题{{ item }}</div>
      <div class="item btn" @click="handleWrite">填写</div>
    </div>
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    onLoad() {
      console.log(123)
    },
    handleWrite() {
      this.$router.push('/form')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-size: 15px;
  .contain {
    display: flex;
    .item {
      flex: 1;
      text-align: center;
      height: 42px;
      line-height: 42px;
      border-right: 1px solid #e7e7e7;
      border-bottom: 1px solid #e7e7e7;
    }
    .btn {
      color: #1890ff;
    }
    .title:last-child {
      border-right: none;
    }
  }
}
</style>
