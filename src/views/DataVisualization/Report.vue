<template>
  <van-overlay :show="show" @click="hideOverlay">
    <div class="wrapper" @click.stop>
      <div class="title">
        {{ title }}
      </div>
      <div class="time">
        {{ time }}
        （截至{{ hour }}时）
      </div>
      <ul>
        <li>
          <span>（一）密切接触者。</span>
          过去24小时，新增{{ info.add }}人（其中本区{{ info.bq }}人；外区{{ info.wq }}人、外区疑似{{ info.yswq }}人，外区共{{ info.wqTotal }}人），现有{{ info.xy }}人（其中酒店隔离本区人员{{ info.jdglbq }}人、居家隔离本区人员{{ info.jjglbq }}人、待转运本区人员{{ info.zybqry }}人共{{ info.zybqTotal }}人；酒店隔离外区人员{{ info.jdglwq }}人、外区疑似{{ info.wqys }}人，外区共{{ jdwqglTotal }}人）；新增解除{{ info.xzjc }}人（其中本区{{ info.xzjcbq }}人、外区{{ info.xzjcwq }}人）；累计解除{{ info.ljjc }}人（其中本区{{ info.ljjcbq }}人、外区{{ info.ljjcwq }}人）；累计管理{{ info.ljgl }}人（其中本区{{ info.ljglbq }}人；外区{{ info.ljglwq }}人、外区疑似{{ info.ljglwqys }}人，外区共{{ info.ljglwqTotal }}人）。
        </li>
        <li>
          <span>（二）次密接接触者。</span>
          过去24小时，新增X人（其中本区X人、外区X人），现有X人（其中酒店隔离本区人员X人、居家隔离本区人员X人、待转运本区人员X人,共X人；酒店隔离外区人员X人）；新增解除X人（其中本区X人、外区X人），累计解除X人（其中本区X人、外区X人）；累计管理X人（其中本区X人、外区X人）。
        </li>
        <li>3</li>
      </ul>
    </div>
  </van-overlay>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: '5.20疫情专报',
      time: '2020-11-11',
      hour: 10,
      info: {
        add: 'X',
        bq: 'X',
        wq: 'X',
        yswq: 'X',
        wqTotal: 'X',
        xy: 'X',
        jdglbq: 'X',
        jjglbq: 'X',
        zybqry: 'X',
        zybqTotal: 'X',
        jdglwq: 'X',
        wqys: 'X',
        jdwqglTotal: 'X',
        xzjc: 'X',
        xzjcbq: 'X',
        xzjcwq: 'X',
        ljjc: 'X',
        ljjcbq: 'X',
        ljjcwq: 'X',
        ljgl: 'X',
        ljglbq: 'X',
        ljglwq: 'X',
        ljglwqys: 'X',
        ljglwqTotal: 'X'
      }
    }
  },
  methods: {
    hideOverlay() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 90vh;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  box-sizing: border-box;
  overflow: auto;
  .title {
    width: 100%;
    height: 42px;
    line-height: 40px;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
    color: #ff0000;
  }
  .time {
    width: 100%;
    height: 32px;
    line-height: 30px;
    font-size: 16px;
    font-weight: normal;
    color: #333;
    border-bottom: 1px solid #d0d9e3;
    text-align: center;
  }
  ul li {
    margin: 10px 0;
    font-size: 15px;
    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
.van-overlay {
  z-index: 11 !important;
}
</style>
