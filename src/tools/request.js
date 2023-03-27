// 封装axios
import axios from 'axios'
import store from '@/store'

// 创建axios实例
const request = axios.create({
  // 基础路径 发送请求时自动添加
  baseURL: '/api',
  // 超时时间
  timeout: 5000
})

// 请求拦截器 - 参数：内部属性
request.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers['Authorization'] = store.state.user.token
  }
  return config
})

// 响应拦截器 - 参数：响应结果
request.interceptors.response.use((res) => {
  return res
}, (err) => {
  return err
})

// 
export default request

