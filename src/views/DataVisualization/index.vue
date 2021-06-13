<template>
  <div class="view">
    <div class="view-bg"></div>
    <template v-if="nowSelectType === 0">
      <Street />
    </template>
    <template v-if="nowSelectType === 1">
      <Hotel />
    </template>
    <template v-if="nowSelectType === 2">
      <Person />
    </template>
    <div class="view-tabs">
      <div ref="shade" class="shade"></div>
      <div
        v-for="item in selectType"
        :key="item.name"
        :class="['tab', item.selected && 'selected']"
        @click="handleSelectTab(item.name)"
      >
        <span><i :class="['iconfont', item.icon]"></i>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Street from './Street.vue'
export default {
  name: 'DataVisualization',
  data() {
    return {
      selectType: [
        {
          name: 0,
          value: '街镇',
          icon: 'icon-jiezhen',
          selected: true
        },
        {
          name: 1,
          value: '酒店',
          icon: 'icon-jiudian',
          selected: false
        },
        {
          name: 2,
          value: '人员情况',
          icon: 'icon-zhengjian',
          selected: false
        }
      ],
      showPicker: false
    }
  },
  computed: {
    nowSelectType() {
      return this.selectType.find(item => {
        return item.selected === true
      }).name
    }
  },
  methods: {
    handleSelectTab(name) {
      this.$refs['shade'].style.left = name * this.$refs['shade'].offsetWidth + 'px'
      this.selectType.map(item => {
        if (name === item.name) {
          item.selected = true
        } else {
          item.selected = false
        }
        return item
      })
    }
  },
  components: {
    Street,
    Hotel: () => import(/* webpackChunkName: "hotel" */ './Hotel.vue'),
    Person: () => import(/* webpackChunkName: "person" */ './Person.vue')
  }
}
</script>
<style lang="scss" scoped>
.view {
  height: 100vh;
  background-color: #fff;
  &-bg {
    width: 100%;
    height: 429px;
    background: url('~@/assets/bg.png');
    background-size: 100% 100%;
  }
  &-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 170px;
    left: 15px;
    right: 15px;
    bottom: 75px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    &::before {
      content: '密接者';
      position: absolute;
      top: -24px;
      left: 50%;
      width: 226px;
      height: 48px;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: url('~@/assets/tips.png');
      background-size: 100% 100%;
      transform: translateX(-50%);
      z-index: 10;
    }
    .select {
      height: 22px;
      margin-top: 30px;
      font-size: 16px;
      text-align: center;
      font-weight: 500;
      color: #424242;
    }
    .echarts-view {
      width: 100%;
      height: 200px;
    }
    .detail {
      margin: 20px 0;
      &-item {
        width: 315px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        margin: 0 auto;
        background: #f7f7f7;
        border-radius: 20px;
        label {
          display: inline-block;
          width: 220px;
          padding-left: 20px;
        }
        span {
          color: #3695f7;
        }
      }
      .detail-item + .detail-item {
        margin-top: 10px;
      }
    }
  }
  &-tabs {
    display: flex;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 10px;
    height: 50px;
    background: #efefef;
    border-radius: 30px;
    .shade {
      position: absolute;
      width: 33.3%;
      height: 50px;
      background: #3695f7;
      border-radius: 30px;
      z-index: 1;
      transition: left 0.5s;
    }
    .tab {
      flex: 1;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: initial;
      border-radius: 30px;
      color: #333333;
      transition: color 0.5s, background-color 0.5s;
      z-index: 2;
      span {
        z-index: 10;
        i {
          margin-right: 5px;
        }
      }
      &.selected {
        color: #ffffff;
      }
    }
  }
}
</style>
