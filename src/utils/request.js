// import Vue from 'vue'
import { Toast } from 'vant'
import axios from 'axios'
// 创建 axios 实例
const service = axios.create({
  // baseURL: '/byfy-api', // api base_url
  timeout: 30000 // 请求超时时间
})

const err = error => {
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  // const token = Vue.ls.get(ACCESS_TOKEN)
  // if (token) {
  //   config.headers['X-TOKEN'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config
}, err)

// response interceptor
service.interceptors.response.use(response => {
  const { code, msg } = response.data
  if (code === 200) {
    return response.data
  } else {
    Toast.clear()
    Toast.fail('网络异常, 请求失败!')
    return Promise.reject(msg)
  }
}, err)

export { service as axios }
