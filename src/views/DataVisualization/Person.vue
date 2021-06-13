<template>
  <div>
    <van-icon class="arrow arrow-left" name="arrow-left" />
    <van-icon class="arrow arrow-right" name="arrow" />
    <van-swipe class="my-swipe" :loop="false">
      <van-swipe-item>
        <div class="view-container">
          <vue-scroll class="scroller">
            <div class="outside-title">人员排查情况</div>
            <div class="select" @click="showPicker = true">
              {{ value.name }}
              <van-icon name="arrow-down" />
            </div>
            <!-- 黄码人员 -->
            <div class="item">
              <div class="title">黄码人员</div>
              <div class="sub-title">
                <p>当日排除人员</p>
                <p>累计排除人员</p>
              </div>
              <div class="sub-value">
                <p>{{ info.yellowDayExcludeCount }}</p>
                <p>{{ info.yellowExcludeTotal }}</p>
              </div>
            </div>
            <!-- 重点人群 -->
            <div class="item">
              <div class="title">重点人群</div>
              <div class="sub-title">
                <p>当日新增人员</p>
                <p>累计排除人员</p>
              </div>
              <div class="sub-value">
                <p>{{ info.importantDayAddCount }}</p>
                <p>{{ info.importantExcludeTotal }}</p>
              </div>
            </div>
            <!-- 公安排查 -->
            <div class="item">
              <div class="title">公安排查</div>
              <div class="sub-title">
                <p>当日新增人员</p>
                <p>累计排除人员</p>
                <p>待排查人数</p>
              </div>
              <div class="sub-value">
                <p>{{ info.policeDayExcludeCount }}</p>
                <p>{{ info.policeExcludeTotal }}</p>
                <p>{{ info.policeWaitExcludeCount }}</p>
              </div>
            </div>
            <!-- 三人小组排查 -->
            <div class="item">
              <div class="title">三人小组排查</div>
              <div class="sub-title">
                <p>当日新增人员</p>
                <p>累计排除人员</p>
                <p>待排查人数</p>
              </div>
              <div class="sub-value">
                <p>{{ info.thirdDayExcludeCount }}</p>
                <p>{{ info.thirdExcludeTotal }}</p>
                <p>{{ info.thirdWaitExcludeCount }}</p>
              </div>
            </div>
          </vue-scroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="view-container">
          <vue-scroll class="scroller">
            <div class="outside-title">核酸检测、疫苗接种情况</div>
            <div class="select" @click="showPicker = true">
              {{ value.name }}
              <van-icon name="arrow-down" />
            </div>
            <!-- 核酸检测 -->
            <div class="item">
              <div class="title">核酸检测</div>
              <div class="sub-title">
                <p>当日新增人数</p>
                <p>累计检测</p>
                <p>已出结果</p>
                <p>累计检测阳性</p>
              </div>
              <div class="sub-value">
                <p>{{ info.testDayAddCount }}</p>
                <p>{{ info.testTotal }}</p>
                <p>{{ info.testResultTotal }}</p>
                <p>{{ info.testPositiveTotal }}</p>
              </div>
            </div>
            <!-- 疫苗接种 -->
            <div class="item">
              <div class="title">疫苗接种</div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="sub-title">
                <p>当日接种人数</p>
                <p>累计接种剂次</p>
                <p>累计接种人数</p>
              </div>
              <div class="sub-value">
                <p>{{ info.vaccinationDayAddCount }}</p>
                <p>{{ info.vaccinationTimesTotal }}</p>
                <p>{{ info.vaccinationPersonTotal }}</p>
              </div>
            </div>
          </vue-scroll>
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
// import { loadObserveStatementTrend, loadObserveStatementGetVo } from '@api/observe'
import { loadStreetAntiepidemicStateList } from '@api/observe'

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

import { streetDict } from '@/utils/dict'
import { setTextColor } from '@/common/commonFn'

export default {
  name: 'Hotel',
  data() {
    return {
      info: {},
      showPicker: false,
      columns: streetDict.map(item => {
        return {
          ...item,
          text: item.name
        }
      }),
      value: {}
    }
  },
  mounted() {
    this.value = this.columns[0]
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
        await this.loadStreetAntiepidemicStateList({
          streetCode: this.value.value
        })
        setTextColor()
      } catch (error) {
        console.error('init => error', error)
      } finally {
        toast.clear()
      }
    },
    async loadStreetAntiepidemicStateList(params) {
      try {
        const { data } = await loadStreetAntiepidemicStateList(params)
        this.info = data
      } catch (error) {
        console.error('loadStreetAntiepidemicStateList => error', error)
      }
    },
    // async loadObserveStatementTrend(name) {
    //   try {
    //     const { data } = await loadObserveStatementTrend(name)
    //     this.initEcharts(data)
    //   } catch (error) {
    //     console.error('loadObserveStatementTrend => error', error)
    //   }
    // },
    // async loadObserveStatementGetVo(name) {
    //   try {
    //     const { data } = await loadObserveStatementGetVo(name)
    //     this.info = data
    //   } catch (error) {
    //     console.error('loadObserveStatementGetVo => error', error)
    //   }
    // },
    // initEcharts({ key, value }) {
    //   const myChart = echarts.init(document.getElementById('echarts'))
    //   myChart.setOption({
    //     grid: {
    //       top: 30,
    //       right: 50,
    //       bottom: 30
    //     },
    //     xAxis: {
    //       type: 'category',
    //       name: '日期',
    //       boundaryGap: false,
    //       data: key,
    //       nameTextStyle: {
    //         color: '#666666'
    //       },
    //       axisLabel: {
    //         rotate: '20',
    //         align: 'center',
    //         margin: '18',
    //         interval: 0
    //       }
    //     },
    //     yAxis: {
    //       type: 'value',
    //       name: '人数',
    //       nameTextStyle: {
    //         color: '#666666'
    //       },
    //       splitLine: {
    //         lineStyle: {
    //           color: '#EFEFEF'
    //         }
    //       }
    //     },
    //     series: [
    //       {
    //         name: '销量',
    //         type: 'line',
    //         smooth: true,
    //         areaStyle: {},
    //         itemStyle: {
    //           color: '#3695f7'
    //         },
    //         label: {
    //           show: true
    //         },
    //         data: value
    //       }
    //     ]
    //   })
    // },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
      this.init()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
