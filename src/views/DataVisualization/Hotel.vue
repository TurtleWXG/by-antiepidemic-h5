<template>
  <div class="view-container">
    <vue-scroll class="scroller">
      <div class="select" @click="showPicker = true">
        {{ value }}
        <van-icon name="arrow-down" />
      </div>
      <div id="echarts" class="echarts-view"></div>
      <div class="detail">
        <div class="detail-item">
          <label>剩余房间数/总房间数</label>
          <span>-- / --</span>
        </div>
        <div class="detail-item">
          <label>当日新增管理人数</label>
          <span>{{ info.intimateManageAddCount }}</span>
        </div>
        <div class="detail-item">
          <label>目前在管人数</label>
          <span>{{ info.intimateManageTotal }}</span>
        </div>
        <div class="detail-item">
          <label>累计管理人数</label>
          <span>--</span>
        </div>
        <div class="detail-item">
          <label>转为医学留观数(当日新增)</label>
          <span>{{ info.intimateObserveAddCount }}</span>
        </div>
        <div class="detail-item">
          <label>转为医学留观数(累计)</label>
          <span>{{ info.intimateObserveTotal }}</span>
        </div>
        <div class="detail-item">
          <label>解除观察数(当日新增)</label>
          <span>{{ info.intimateRelieveObserveAddCount }}</span>
        </div>
        <div class="detail-item">
          <label>解除观察数(累计)</label>
          <span>{{ info.intimateRelieveObserveTotal }}</span>
        </div>
      </div>
    </vue-scroll>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
import { loadObserveStatementTrend, loadObserveStatementGetVo } from '@api/observe'
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
  name: 'Hotel',
  data() {
    return {
      value: '空港假日酒店',
      info: {},
      showPicker: false,
      columns: [
        '空港假日酒店',
        '永平街绿巢精品酒店',
        '石井七天酒店金碧新城店',
        '广州汇德酒店',
        '锦江之星',
        '嘉禾文星酒店',
        '松洲维也纳酒店',
        '嘉禾维也纳智好酒店',
        '云城维也纳酒店',
        '黄石汉庭酒店',
        '京溪维也纳',
        '石井翡丽酒店',
        '同裕国际酒店'
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '正在加载...'
      })
      try {
        await Promise.all([this.loadObserveStatementTrend(this.value), this.loadObserveStatementGetVo(this.value)])
      } catch (error) {
        console.error('init => error', error)
      } finally {
        toast.clear()
      }
    },
    async loadObserveStatementTrend(name) {
      try {
        const { data } = await loadObserveStatementTrend(name)
        this.initEcharts(data)
      } catch (error) {
        console.error('loadObserveStatementTrend => error', error)
      }
    },
    async loadObserveStatementGetVo(name) {
      try {
        const { data } = await loadObserveStatementGetVo(name)
        this.info = data
      } catch (error) {
        console.error('loadObserveStatementGetVo => error', error)
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
            name: '销量',
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
      this.init()
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
}
</style>
