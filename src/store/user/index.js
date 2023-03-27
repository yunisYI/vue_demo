
import { login, getCaptcha, signup, getUserInfoByToken, userLogOut } from '@/api/user'
const state = {
  token: localStorage.getItem('TOKEN') || '',
  userInfo: {}
}
const actions = {
  // 登陆
  async toLogin({ commit }, userInfo) {
    let result = await login(userInfo)
    if (result.status == 200) {
      // 永久保存token
      commit('SAVETOKEN', result.data.token)
      localStorage.setItem('TOKEN', result.data.token)
      return '登陆成功！'
    } else {
      return Promise.reject(result.data.err)
    }
  },
  // 获取验证码
  async getCaptchaNum() {
    let result = await getCaptcha()
    if (result.status == 200) {
      return result.data
    } else {
      return Promise.reject(new Error('获取验证码失败！'))
    }
  },
  // 使用token 获取用户信息
  async getUserInfoDataByToken({ commit }) {
    let result = await getUserInfoByToken()
    if (result.status == 200) {
      let { id, status, usernumber } = result.data
      commit('SAVEUSERINFO', { id, status, usernumber })
      return 'ok'
    } else {
      return Promise.reject(new Error('获取用户信息失败！'))
    }
  },
  // 注册
  async toSignup(_, userInfo) {
    let result = await signup(userInfo)
    if (result.status == 200) {
      return '注册成功'
    } else {
      return Promise.reject(new Error(result.data.err))
    }
  },
  // 退出
  async logOut({ commit }) {
    let result = await userLogOut()
    if (result.status == 200) {
      commit('DELTETOKENANDUSERINFO')
    } else {
      return Promise.reject(new Error(result.data))
    }
  }
}
const mutations = {
  SAVETOKEN(state, token) {
    state.token = token
  },
  SAVEUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  DELTETOKENANDUSERINFO(state) {
    localStorage.setItem('TOKEN', '')
    state.token = ''
    state.userInfo = {}
  }
}
const getters = {
  userInfo(state) {
    return state.userInfo
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}