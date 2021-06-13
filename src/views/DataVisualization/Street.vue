<template>
  <div>
    <van-icon class="arrow arrow-left" name="arrow-left" />
    <van-icon class="arrow arrow-right" name="arrow" />
    <van-swipe class="my-swipe" :loop="false">
      <van-swipe-item>
        <div class="view-container">
          <vue-scroll class="scroller">
            <div class="outside-title">密接者</div>
            <div class="select" @click="showPicker = true">
              {{ value.name }}
              <van-icon name="arrow-down" />
            </div>
            <!-- 当日新增人数 -->
            <div class="item">
              <div class="title">当日新增人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.intimateInnerAddCount }}</p>
                <p>{{ info.intimateOuterAddCount }}</p>
              </div>
            </div>
            <!-- 累计 -->
            <div class="item">
              <div class="title">累计</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.intimateInnerTotal }}</p>
                <p>{{ info.intimateOuterTotal }}</p>
              </div>
            </div>
            <!-- 当日解除人数 -->
            <div class="item">
              <div class="title">当日解除人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.intimateInnerRelieveCount }}</p>
                <p>{{ info.intimateOuterRelieveCount }}</p>
              </div>
            </div>
            <!-- 累计解除人数 -->
            <div class="item">
              <div class="title">累计解除人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.intimateInnerRelieveTotal }}</p>
                <p>{{ info.intimateOuterRelieveTotal }}</p>
              </div>
            </div>
            <!-- 现有 -->
            <div class="item">
              <div class="title">现有</div>
              <div class="sub-title">
                <p style="width: 70%">区内</p>
                <p style="width: 20%">区外</p>
              </div>
              <div class="third-title">
                <p>酒店隔离人数</p>
                <p>居家隔离人数</p>
                <p>处理中人数</p>
                <p>酒店隔离人数</p>
              </div>
              <div class="third-value">
                <p>{{ info.intimateInnerIsolateHotelCount }}</p>
                <p>{{ info.intimateInnerIsolateHomeCount }}</p>
                <p>{{ info.intimateInnerIsolateHandlingCount }}</p>
                <p>{{ info.intimateOuterIsolateHotelCount }}</p>
              </div>
            </div>
          </vue-scroll>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="view-container">
          <vue-scroll class="scroller">
            <div class="outside-title">次密接者</div>
            <div class="select" @click="showPicker = true">
              {{ value.name }}
              <van-icon name="arrow-down" />
            </div>
            <!-- 当日新增人数 -->
            <div class="item">
              <div class="title">当日新增人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.minorInnerAddCount }}</p>
                <p>{{ info.minorOuterAddCount }}</p>
              </div>
            </div>
            <!-- 累计 -->
            <div class="item">
              <div class="title">累计</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.minorInnerTotal }}</p>
                <p>{{ info.minorOuterTotal }}</p>
              </div>
            </div>
            <!-- 当日解除人数 -->
            <div class="item">
              <div class="title">当日解除人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.minorInnerRelieveCount }}</p>
                <p>{{ info.minorOuterRelieveCount }}</p>
              </div>
            </div>
            <!-- 累计解除人数 -->
            <div class="item">
              <div class="title">累计解除人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.minorInnerRelieveTotal }}</p>
                <p>{{ info.minorOuterRelieveTotal }}</p>
              </div>
            </div>
            <!-- 现有 -->
            <div class="item">
              <div class="title">现有</div>
              <div class="sub-title">
                <p style="width: 70%">区内</p>
                <p style="width: 20%">区外</p>
              </div>
              <div class="third-title">
                <p>酒店隔离人数</p>
                <p>居家隔离人数</p>
                <p>处理中人数</p>
                <p>酒店隔离人数</p>
              </div>
              <div class="third-value">
                <p>{{ info.minorInnerIsolateHotelCount }}</p>
                <p>{{ info.minorInnerIsolateHomeCount }}</p>
                <p>{{ info.minorInnerIsolateHandlingCount }}</p>
                <p>{{ info.minorOuterIsolateHotelCount }}</p>
              </div>
            </div>
          </vue-scroll>
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
    <!-- <div class="view-container">
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
    </div> -->
  </div>
</template>

<script>
// import { loadStateStatementTrend, loadStateStatementGetVo } from '@api/state'
import { loadStreetIsolateStateList } from '@api/observe'
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
  name: 'Street',
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
        // await Promise.all([this.loadStateStatementTrend(this.value), this.loadStateStatementGetVo(this.value)])
        await this.loadStreetIsolateStateList({
          streetCode: this.value.value
        })
        setTextColor()
      } catch (error) {
        console.error('init => error', error)
      } finally {
        toast.clear()
      }
    },
    // async loadStateStatementTrend(name) {
    //   try {
    //     const { data } = await loadStateStatementTrend(name)
    //     this.initEcharts(data)
    //   } catch (error) {
    //     console.error('loadStateStatementTrend => error', error)
    //   }
    // },
    // async loadStateStatementGetVo(name) {
    //   try {
    //     const { data } = await loadStateStatementGetVo(name)
    //     console.log('loadStateStatementGetVo => data', data)
    //     this.info = {}
    //   } catch (error) {
    //     console.error('loadStateStatementGetVo => error', error)
    //   }
    // },
    async loadStreetIsolateStateList(params) {
      try {
        const { data } = await loadStreetIsolateStateList(params)
        this.info = data
      } catch (error) {
        console.error('loadStreetIsolateStateList => error', error)
      }
    },
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
    //         name: '密切接触者趋势',
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
