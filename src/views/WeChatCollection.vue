<template>
  <div class="view">
    <div class="view-header">停车场收费</div>
    <div class="view-amount"></div>
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'WeChatCollection'
}
</script>
<style lang="scss" scoped>
.view {
  &-header {
    //
  }
  &-amount {
    width: 90%;
    height: 100px;
    background-color: pink;
    margin: 0 auto;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 6px;
      display: block;
      background: radial-gradient(circle, #fff, #fff 4px, transparent 6px);
      background-size: 46px 8px;
    }
  }
}
</style>
