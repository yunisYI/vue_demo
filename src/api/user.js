import request from "@/tools/request";

// 登陆的接口 参数：账号，密码
export const login = (userInfo) => {
  return request({
    url: '/user/login',
    method: 'post',
    data: userInfo
  })
}
// 获取验证码
export const getCaptcha = () => {
  return request({
    url: '/user/captcha',
    method: 'post'
  })
}

// 注册
export const signup = (userInfo) => {
  return request({
    url: '/user/signup',
    method: 'post',
    data: userInfo
  })
}

// 使用token获取用户信息
export const getUserInfoByToken = () => {
  return request({
    url: '/my/getUserInfoByToken',
    method: 'get'
  })
}

// 退出登陆
export const userLogOut = () => {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}