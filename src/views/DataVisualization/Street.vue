<template>
  <van-swipe class="my-swipe">
    <van-swipe-item>
      <div class="view-container">
        <vue-scroll class="scroller">
          <div class="select" @click="showPicker = true">
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
              <span>{{
                info.intimateAddCount + info.intimateIsolateInHotelCount + info.intimateIsolateInOtherCount
              }}</span>
            </div>
            <div class="detail-item">
              <label>累计密切接触者(居家隔离)</label>
              <span>--</span>
            </div>
          </div>
        </vue-scroll>
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="view-container">
        <vue-scroll class="scroller">
          <div v-for="item in 10" :key="item" class="item">
            <div class="title">目前在管人数</div>
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
      </div>
    </van-swipe-item>
  </van-swipe>
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
        console.log('loadStateStatementGetVo => data', data)
        this.info = {}
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
@import './style.scss';
</style>
