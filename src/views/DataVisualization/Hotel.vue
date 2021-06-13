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
            <!-- 在管人数 -->
            <div class="item">
              <div class="title">目前在管人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.intimateInnerManageCount }}</p>
                <p>{{ info.intimateOuterManageCount }}</p>
              </div>
            </div>
            <!-- 管理人数 -->
            <div class="item">
              <div class="title">管理人数</div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="third-title">
                <p>区内</p>
                <p>区外</p>
                <p>区外</p>
                <p>区内</p>
              </div>
              <div class="third-value">
                <p>{{ info.intimateInnerManageAddCount }}</p>
                <p>{{ info.intimateOuterManageAddCount }}</p>
                <p>{{ info.intimateInnerManageTotal }}</p>
                <p>{{ info.intimateOuterManageTotal }}</p>
              </div>
            </div>
            <!-- 转为医学留观数 -->
            <div class="item">
              <div class="title">
                转为医学留观数
                <span>※核酸检测阳性、疑似病例</span>
              </div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="third-title">
                <p>区内</p>
                <p>区外</p>
                <p>区外</p>
                <p>区内</p>
              </div>
              <div class="third-value">
                <p>{{ info.intimateInnerObserveAddCount }}</p>
                <p>{{ info.intimateOuterObserveAddCount }}</p>
                <p>{{ info.intimateInnerObserveTotal }}</p>
                <p>{{ info.intimateOuterObserveTotal }}</p>
              </div>
            </div>
            <!-- 解除观察数 -->
            <div class="item">
              <div class="title">解除观察数</div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="third-title">
                <p>区内</p>
                <p>区外</p>
                <p>区外</p>
                <p>区内</p>
              </div>
              <div class="third-value">
                <p>{{ info.intimateInnerRelieveAddCount }}</p>
                <p>{{ info.intimateOuterRelieveAddCount }}</p>
                <p>{{ info.intimateInnerRelieveTotal }}</p>
                <p>{{ info.intimateOuterRelieveTotal }}</p>
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
            <!-- 在管人数 -->
            <div class="item">
              <div class="title">目前在管人数</div>
              <div class="sub-title">
                <p>区内</p>
                <p>区外</p>
              </div>
              <div class="sub-value">
                <p>{{ info.minorInnerManageCount }}</p>
                <p>{{ info.minorOuterManageCount }}</p>
              </div>
            </div>
            <!-- 管理人数 -->
            <div class="item">
              <div class="title">管理人数</div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="third-title">
                <p>区内</p>
                <p>区外</p>
                <p>区外</p>
                <p>区内</p>
              </div>
              <div class="third-value">
                <p>{{ info.minorInnerManageAddCount }}</p>
                <p>{{ info.minorOuterManageAddCount }}</p>
                <p>{{ info.minorInnerManageTotal }}</p>
                <p>{{ info.minorOuterManageTotal }}</p>
              </div>
            </div>
            <!-- 转为医学留观数 -->
            <div class="item">
              <div class="title">
                转为医学留观数
                <span>※核酸检测阳性、疑似病例</span>
              </div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="third-title">
                <p>区内</p>
                <p>区外</p>
                <p>区外</p>
                <p>区内</p>
              </div>
              <div class="third-value">
                <p>{{ info.minorInnerObserveAddCount }}</p>
                <p>{{ info.minorOuterObserveAddCount }}</p>
                <p>{{ info.minorInnerObserveTotal }}</p>
                <p>{{ info.minorOuterObserveTotal }}</p>
              </div>
            </div>
            <!-- 解除观察数 -->
            <div class="item">
              <div class="title">解除观察数</div>
              <div class="sub-title">
                <p>当日新增</p>
                <p>累计</p>
              </div>
              <div class="third-title">
                <p>区内</p>
                <p>区外</p>
                <p>区外</p>
                <p>区内</p>
              </div>
              <div class="third-value">
                <p>{{ info.minorInnerRelieveAddCount }}</p>
                <p>{{ info.minorOuterRelieveAddCount }}</p>
                <p>{{ info.minorInnerRelieveTotal }}</p>
                <p>{{ info.minorOuterRelieveTotal }}</p>
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
import { loadHotelIsolateStateList } from '@api/observe'
import { hotelDict } from '@/utils/dict'

export default {
  name: 'Hotel',
  data() {
    return {
      info: {},
      showPicker: false,
      columns: hotelDict.map(item => {
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
        await this.loadHotelIsolateStateList({
          id: this.value.value
        })
      } catch (error) {
        console.error('init => error', error)
      } finally {
        toast.clear()
      }
    },
    async loadHotelIsolateStateList(params) {
      try {
        const { data } = await loadHotelIsolateStateList(params)
        this.info = data
      } catch (error) {
        console.error('loadHotelIsolateStateList => error', error)
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
