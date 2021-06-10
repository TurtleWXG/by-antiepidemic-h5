<template>
  <div class="form">
    <van-form :show-error="false" @submit="commitForm">
      <van-field
        v-model="form.username"
        name="username"
        label="姓名"
        placeholder="请填写"
        maxlength="25"
        required
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        name="sex"
        label="性别"
        required
        :rules="[{ required: true, message: '请选择性别', trigger: 'onChange' }]"
      >
        <template #input>
          <van-radio-group v-model="form.sex" direction="horizontal">
            <van-radio :name="1" checked-color="#1890ff">男</van-radio>
            <van-radio :name="2" checked-color="#1890ff">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="form.birthday"
        readonly
        clickable
        name="birthday"
        label="出生日期"
        placeholder="请选择"
        required
        :rules="[{ required: true, message: '请选择出生日期', trigger: 'onChange' }]"
        @click="showCalendar = true"
      />
      <van-field
        v-model="form.area"
        readonly
        clickable
        required
        name="area"
        label="居住区域"
        placeholder="请选择"
        :rules="[{ required: true, message: '请选择居住区域', trigger: 'onChange' }]"
        @click="showArea = true"
      />
      <van-field
        v-model="form.bz"
        :rows="4"
        autosize
        label="备注"
        type="textarea"
        placeholder="请填写"
        maxlength="255"
        show-word-limit
      />
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        color="#1890ff"
        style="margin: 30px auto 0;width: 92%;"
      >
        提交
      </van-button>
    </van-form>
    <van-calendar
      :min-date="minDate"
      :max-date="maxDate"
      color="#1890ff"
      v-model="showCalendar"
      @confirm="onConfirmDay"
    />
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirmArea" @cancel="showArea = false" />
    </van-popup>
  </div>
</template>

<script>
import { areaList } from '@vant/area-data'

export default {
  data() {
    return {
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(),
      showCalendar: false,
      showArea: false,
      areaList,
      form: {
        username: '',
        sex: '',
        birthday: '',
        area: '',
        bz: ''
      }
    }
  },
  methods: {
    onConfirmDay(e) {
      this.showCalendar = false
      this.form.birthday = `${e.getFullYear()} - ${e.getMonth() + 1} - ${e.getDate()}`
    },
    onConfirmArea(e) {
      e.forEach(item => {
        this.form.area += item.name + ' - '
      })
      this.form.area = this.form.area.substring(0, this.form.area.length - 3)
      this.showArea = false
    },
    commitForm() {
      console.log(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding-top: 20px;
  /deep/.van-cell {
    border-bottom: 1px solid #ebedf0;
  }
}
</style>
