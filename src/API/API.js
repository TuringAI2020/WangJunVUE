import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://api01.vipgz1.idcfengye.com'
axios.headers = {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, {arrayFormat: 'brackets'})
}
const API = {
  POST (data) {
    let p = axios({
      method: 'post',
      url: '/API.ashx',
      data: data
    })
    return p
  }
}
export default API
