import { axios } from '@/utils/request'

// 获取医学观察隔离数据统计趋势
export function loadObserveStatementTrend(placeName) {
  return axios.request({
    url: '/byfy/observe/statement/trend/' + placeName,
    method: 'GET'
  })
}

// 获取疫情防控工作情况-密接者趋势
export function loadObserveStatementGetVo(placeName) {
  return axios.request({
    url: '/byfy/observe/statement/getVo/' + placeName,
    method: 'GET'
  })
}
