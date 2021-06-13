// eslint-disable-next-line prettier/prettier
<template>
  <van-overlay :show="show" @click="hideOverlay">
    <div class="wrapper" @click.stop>
      <div class="title">
        5.20疫情专报
      </div>
      <div class="time">
        {{ street.yearStr }}年{{ street.yearStr }}月{{ street.dayStr }}日
        <!-- （截至{{ hour }}时） -->
      </div>
      <ul>
        <li>
          <span>（一）密切接触者。</span>
          过去24小时，新增{{ street.intimateInnerAddCount + street.intimateOuterAddCount }}人（其中本区{{ street.intimateInnerAddCount }}人；外区{{ street.intimateOuterAddCount }}人、外区疑似0人，外区共{{ hotel.minorOuterObserveTotal }}人），现有{{ street.intimateInnerIsolateHotelCount + street.intimateInnerIsolateHomeCount + street.intimateOuterIsolateHotelCount  }}人（其中酒店隔离本区人员{{ street.intimateInnerIsolateHotelCount }}人、居家隔离本区人员{{ street.intimateInnerIsolateHomeCount }}人、待转运本区人员0人共0人；酒店隔离外区人员{{ street.intimateOuterIsolateHotelCount }}人、外区疑似0人，外区共{{ street.intimateOuterIsolateHotelCount }}人）；新增解除{{ street.intimateInnerRelieveCount + street.intimateOuterRelieveCount }}人（其中本区{{ street.intimateInnerRelieveCount }}人、外区{{ street.intimateOuterRelieveCount }}人）；累计解除{{ street.intimateInnerRelieveTotal + street.intimateOuterRelieveTotal }}人（其中本区{{ street.intimateInnerRelieveTotal }}人、外区{{ street.intimateOuterRelieveTotal }}人）；累计管理
          {{ hotel.intimateInnerManageTotal + hotel.intimateOuterManageTotal }}人（其中本区{{ hotel.intimateInnerManageTotal }}人；外区{{ hotel.intimateOuterManageTotal }}人、外区疑似0人，外区共{{ hotel.intimateOuterManageTotal }}人）。
        </li>
        <li>
          <span>（二）次密接接触者。</span>
          过去24小时，新增{{ street.minorInnerAddCount + street.minorOuterAddCount }}人（其中本区{{ street.minorInnerAddCount }}人、外区{{ street.minorOuterAddCount }}人），现有{{ street.minorInnerIsolateHotelCount + street.minorInnerIsolateHomeCount + street.minorOuterIsolateHotelCount  }}人（其中酒店隔离本区人员{{ street.minorInnerIsolateHotelCount }}人、居家隔离本区人员{{ street.minorInnerIsolateHomeCount }}人、待转运本区人员0人共0人；酒店隔离外区人员{{ street.minorOuterIsolateHotelCount }}人、外区疑似0人，外区共{{ street.minorOuterIsolateHotelCount }}人）；新增解除{{ street.minorInnerRelieveCount + street.minorOuterRelieveCount }}人（其中本区{{ street.minorInnerRelieveCount }}人、外区{{ street.minorOuterRelieveCount }}人）；累计解除{{ street.minorInnerRelieveTotal + street.minorOuterRelieveTotal }}人（其中本区{{ street.minorInnerRelieveTotal }}人、外区{{ street.minorOuterRelieveTotal }}人）；累计管理
          {{ hotel.minorInnerManageTotal + hotel.minorOuterManageTotal }}人（其中本区{{ hotel.minorInnerManageTotal }}人；外区{{ hotel.minorOuterManageTotal }}人、外区疑似0人，外区共{{ hotel.minorOuterManageTotal }}人）。
        </li>
        <li>
          <span>（三）隔离酒店情况。</span>
          当日新增隔离酒店0家，新增房间0间；目前合计酒店0家，房间0间；本区使用隔离酒店0家0间房，剩余可用房间0间；外区使用隔离酒店0家0间房，剩余可用房间0间（其中0酒店是共用）。
          <br />
          1、本区密接酒店。酒店共0家，房间共0间。已用酒店0家，房间0间。剩下酒店0家，房间0间。
          <br />
          2、外区密接酒店。酒店共0家，房间共0间。已用酒店0家，房间0间。剩下酒店0家，房间0间。
          <br />
          3、本区次密酒店。酒店共0家，房间共0间。已用酒店0家，房间0间。剩下酒店0家，房间0间。
          <br />
          4、外区次密酒店。酒店共0家，房间共0间。已用酒店0家，房间0间。剩下酒店0家，房间0间。
          <br />
          5、本区一般人群。酒店共0家，房间共0间。已用酒店0家，房间0间。剩下酒店0家，房间0间。
          <br />
          6、外区疑似酒店。酒店共0家，房间共0间。已用酒店0家，房间0间。剩下酒店0家，房间0间。
        </li>
        <li>
          <span>（四）黄码标识人员。</span>
          当日新增0人，累计0人；当日排查{{ person.yellowDayExcludeCount }}人，累计排查{{ person.yellowExcludeTotal }}人，待排查0人。
        </li>
        <li>
          <span>（五）重点人员。</span>
          1、公安排查。当日新接到核查数{{ person.policeDayExcludeCount }}人，累计核查涉荔湾疫情0批次，涉海珠0批次，共0人，已核查{{ person.policeExcludeTotal }}人。
          <br />
          2、镇街三人小组核查14天内到过荔湾的人员。过去24小时排查{{ person.thirdDayExcludeCount }}人，累计排查{{ person.thirdExcludeTotal }}人，已完成核酸检测0人，结果均为阴性。
        </li>
        <li>
          <span>（六）疫苗接种。</span>
          过去24小时，接种{{ person.vaccinationDayAddCount }}剂次。全区累计接种{{ person.vaccinationPersonTotal }}人，{{ person.vaccinationTimesTotal }}剂次。
        </li>
        <li>
          <span>（七）核酸检测</span>
          1、区内检测机构。当日采样{{ person.testDayAddCount }}人（其中隔离人员0人，黄码0人，普通群众0人）；累计采样0人，结果均为阴性；
          <br />
          2、第三方核酸检测机构。当日采样0人，累计采样0人，结果均为阴性；
          <br />
          3、第一轮全员核酸检测情况。累计采样4091997人份，结果均为阴性。
        </li>
      </ul>
      <div class="closeBtn" @click="hideOverlay">关闭</div>
    </div>
  </van-overlay>
</template>

<script>
import { loadStreetAntiepidemicStateList, loadStreetIsolateStateList, loadHotelIsolateStateList } from '@api/observe'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.toast = this.$toast.loading({
          duration: 0,
          forbidClick: true,
          message: '正在加载...'
        })
        this.loadStreetAntiepidemicStateList()
        this.loadHotelIsolateStateList()
        this.loadStreetIsolateStateList()
      }
    }
  },
  data() {
    return {
      time: '2021年6月X日',
      hour: 'X',
      person: {},
      hotel: {},
      street: {},
      toast: null
    }
  },
  methods: {
    hideOverlay() {
      this.$emit('close')
    },
    async loadStreetAntiepidemicStateList() {
      try {
        const { data } = await loadStreetAntiepidemicStateList()
        this.person = data
      } catch (error) {
        console.error('loadStreetAntiepidemicStateList => error', error)
      }
    },
    async loadHotelIsolateStateList(params) {
      try {
        const { data } = await loadHotelIsolateStateList(params)
        this.hotel = data
      } catch (error) {
        console.error('loadHotelIsolateStateList => error', error)
      }
    },
    async loadStreetIsolateStateList(params) {
      try {
        const { data } = await loadStreetIsolateStateList(params)
        this.street = data
      } catch (error) {
        console.error('loadStreetIsolateStateList => error', error)
      } finally {
        this.toast.clear()
      }
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
    line-height: 25px;
    span {
      font-size: 16px;
      font-weight: 500;
      display: block;
    }
  }
  .closeBtn {
    width: 90%;
    height: 42px;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    background-color: #1989fa;
    margin: 10px auto 0;
  }
}
.van-overlay {
  z-index: 9999;
}
</style>
