<template>
  <div class="view-container">
    <vue-scroll class="scroller">
      <!-- <div class="select" @click="showPicker = true">
        {{ value }}
        <van-icon name="arrow-down" />
      </div>
      <div id="echarts" class="echarts-view"></div>
      <div class="detail">
        <div class="detail-item">
          <label>当日新增人数</label>
          <span>{{ info.intimateAddCount }}</span>
        </div>
        <div class="detail-item">
          <label>当日解除观察人数</label>
          <span>--</span>
        </div>
        <div class="detail-item">
          <label>现有密切接触者(集中隔离)</label>
          <span>{{ info.intimateIsolateInHotelCount }}</span>
        </div>
        <div class="detail-item">
          <label>现有密切接触者(居家隔离)</label>
          <span>{{ info.intimateIsolateInOtherCount }}</span>
        </div>
        <div class="detail-item">
          <label>累计密切接触者(集中隔离)</label>
          <span>{{ info.intimateAddCount + info.intimateIsolateInHotelCount + info.intimateIsolateInOtherCount }}</span>
        </div>
        <div class="detail-item">
          <label>累计密切接触者(居家隔离)</label>
          <span>--</span>
        </div>
      </div> -->
      <div v-for="item in 10" :key="item" class="item">
        <div class="title">
          目前在管人数
        </div>
        <div class="sub-title">
          <p>区内</p>
          <p>区外</p>
        </div>
        <div class="sub-value">
          <p>1</p>
          <p>2</p>
        </div>
      </div>
    </vue-scroll>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
import { loadStateStatementTrend, loadStateStatementGetVo } from '@api/state'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer, LegendComponent])

export default {
  name: 'Street',
  data() {
    return {
      value: '全区',
      info: {},
      showPicker: false,
      columns: [
        '全区',
        '江高',
        '人和',
        '太和',
        '钟落潭',
        '三元里',
        '松洲',
        '景泰',
        '黄石',
        '同德',
        '棠景',
        '新市',
        '同和',
        '京溪',
        '永平',
        '均禾',
        '嘉禾',
        '石井',
        '金沙',
        '云城',
        '鹤龙',
        '白云湖',
        '石门',
        '大源',
        '龙归',
        '外区'
      ]
    }
  },
  mounted() {
    // this.init()
  },
  methods: {
    async init() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '正在加载...'
      })
      try {
        await Promise.all([this.loadStateStatementTrend(this.value), this.loadStateStatementGetVo(this.value)])
      } catch (error) {
        console.error('init => error', error)
      } finally {
        toast.clear()
      }
    },
    async loadStateStatementTrend(name) {
      try {
        const { data } = await loadStateStatementTrend(name)
        this.initEcharts(data)
      } catch (error) {
        console.error('loadStateStatementTrend => error', error)
      }
    },
    async loadStateStatementGetVo(name) {
      try {
        const { data } = await loadStateStatementGetVo(name)
        this.info = data
      } catch (error) {
        console.error('loadStateStatementGetVo => error', error)
      }
    },
    initEcharts({ key, value }) {
      const myChart = echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        grid: {
          top: 30,
          right: 50,
          bottom: 30
        },
        xAxis: {
          type: 'category',
          name: '日期',
          boundaryGap: false,
          data: key,
          nameTextStyle: {
            color: '#666666'
          },
          axisLabel: {
            rotate: '20',
            align: 'center',
            margin: '18',
            interval: 0
          }
        },
        yAxis: {
          type: 'value',
          name: '人数',
          nameTextStyle: {
            color: '#666666'
          },
          splitLine: {
            lineStyle: {
              color: '#EFEFEF'
            }
          }
        },
        series: [
          {
            name: '密切接触者趋势',
            type: 'line',
            smooth: true,
            areaStyle: {},
            itemStyle: {
              color: '#3695f7'
            },
            label: {
              show: true
            },
            data: value
          }
        ]
      })
    },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
      this.init(this.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.view-container {
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
    content: '密切接触者趋势';
    position: absolute;
    top: -15px;
    left: 50%;
    width: 226px;
    height: 48px;
    font-size: 18px;
    font-weight: 600;
    color: #e8502c;
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
  .item {
    width: 90%;
    min-height: 100px;
    margin: 15px auto;
    padding: 0 20px 15px;
    box-sizing: border-box;
    box-shadow: 0 1px 10px rgba($color: #333, $alpha: 0.1);
    border-radius: 6px;
    .title {
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      border-bottom: 1px solid #ebeef5;
      padding: 7px 0;
    }
    .sub-title,
    .sub-value {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      p {
        width: 40%;
        padding: 7px 0;
        text-align: center;
        border-bottom: 1px solid #ebeef5;
      }
    }
    .sub-value p {
      border: none;
    }
  }
  .item:first-child {
    margin-top: 30px;
  }
}
</style>
