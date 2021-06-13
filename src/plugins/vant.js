import Vue from 'vue'
import {
  Button,
  Search,
  List,
  Form,
  Field,
  RadioGroup,
  Radio,
  Calendar,
  Popup,
  Area,
  Picker,
  Toast,
  Icon,
  Swipe,
  SwipeItem,
  Overlay
} from 'vant'

Vue.use(Button)
Vue.use(Search)
Vue.use(List)
Vue.use(Form)
Vue.use(Field)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Calendar)
Vue.use(Popup)
Vue.use(Area)
Vue.use(Picker)
Vue.use(Toast)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Overlay)

// 允许同时存在多个 Toast
Toast.allowMultiple()
// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({ duration: 2000 })
