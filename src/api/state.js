import { axios } from '@/utils/request'

// 获取疫情防控工作情况-密接者趋势
export function loadStateStatementTrend(streetName) {
  return axios.request({
    url: '/byfy/state/statement/trend/' + streetName,
    method: 'GET'
  })
}

// 获取疫情防控工作情况-密接者统计数据
export function loadStateStatementGetVo(streetName) {
  return axios.request({
    url: '/byfy/state/statement/getVo/' + streetName,
    method: 'GET'
  })
}
