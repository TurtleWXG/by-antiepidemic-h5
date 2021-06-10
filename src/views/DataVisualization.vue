<template>
  <div class="view">
    <div class="view-bg"></div>
    <div class="view-container">
      <vue-scroll class="scroller">
        <div class="select">各街镇/景泰街</div>
        <div id="echarts" class="echarts-view"></div>
        <div class="detail">
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
          <div class="detail-item">
            <label>当日新增人数</label>
            <span>10</span>
          </div>
        </div>
      </vue-scroll>
    </div>
    <div class="view-tabs">
      <div class="tab selected"><i class="iconfont icon-jiezhen"></i>街镇</div>
      <div class="tab"><i class="iconfont icon-jiudian"></i>酒店</div>
    </div>
  </div>
</template>

<script>
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
  name: 'DataVisualization',
  mounted() {
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      const myChart = echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        grid: {
          top: 10,
          bottom: 30
        },
        xAxis: {
          data: ['05.26', '05.26', '05.26', '05.26', '05.26', '05.26'],
          nameTextStyle: {
            color: '#666666'
          },
          axisLabel: {
            rotate: '30',
            align: 'right'
          }
        },
        yAxis: {
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
            labelLine: {
              smooth: true
            },
            itemStyle: {
              color: '#FF924F'
            },
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
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
          color: #fa5050;
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
    .tab {
      width: 172px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: initial;
      border-radius: 30px;
      color: #333333;
      transition: color 0.5s, background-color 0.5s;
      i {
        margin-right: 5px;
      }
      &.selected {
        background: #ff924f;
        color: #ffffff;
      }
    }
  }
}
</style>
