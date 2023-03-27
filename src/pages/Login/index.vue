<template>
  <div class="login-wrap">
    <div class="login-input-wrap">
      <div class="login-input-account">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <input placeholder="手机号/账号" type="text" v-model="params.number">
      </div>
      <div class="login-input-password">
        <input placeholder="请输入密码" type="password" v-model="params.password">
        <svg class="lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <svg id="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
      </div>
      <p><a href="">忘记密码？</a></p>
      <div class="login-btn">
        <button @click="checkAndLogin">登陆</button>
        <button>
          <router-link to="/signup">注册</router-link>
        </button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      params: {
        number: '',
        password: ''
      }
    }
  },
  methods: {
    // 登陆
    login() {
      let { number, password } = this.params
      this.$store.dispatch('toLogin', { number, password }).then((res) => {
        // 使用token获取用户信息
        this.$store.dispatch('getUserInfoDataByToken').then(() => {
          alert(res)
          setTimeout(() => {
            // 回退到上一个页面
            this.$router.go(-1);
          }, 1500);
        }).catch(err => {
          alert(err)
        })
      }).catch(err => {
        alert(err)
      })
    },
    // 表单验证
    checkAndLogin() {
      let obj = this.$checkForm(this.params, {
        number: {
          alias: '账号',
          rule: /^\d{1,11}$/,
          type: 'string',
          required: true
        },
        password: {
          alias: '密码',
          type: 'string',
          required: true,
          rule: /^\d{1,9}$/
        }
      })
      const length = Object.keys(obj).length;
      if (length === 0) {
        return this.login()
      }
      switch (obj.type) {
        case 'type':
          alert(`${obj.alias}的类型定义错误`, '提示');
          break;
        case 'required':
          alert(`${obj.alias}是必填项`, '提示');
          break;
        case 'rule':
          alert(`${obj.alias}的输入不符合规范`, '提示');
          break;
        default:
          break;
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-wrap {
  height: 911px;
  width: 100%;
  background-image: url('./imgs/login-bgi.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-input-wrap {
    height: 230px;
    width: 430px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .login-input-password {
      height: 75px;
      clear: both;

      svg {
        float: left;
        left: 21px;
        top: 15px;
      }

      svg:last-child {
        top: -67px;
        opacity: 0;
      }
    }


    input {
      font-family: "Microsoft soft";
      font-size: 24px;
      color: #333;
      margin: 15px 0;
      border: none;
      outline-style: none;
      height: 52px;
      width: 336px;
      border-radius: 0 10px 10px 0;
      background-color: rgba(241, 241, 241, 0.5);

      &::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #6e6f70;
        /* placeholder字体大小  */
        font-size: 20px;
        /* placeholder位置  */
        text-align: left;
      }
    }

    svg {
      position: relative;
      top: 16.5px;
      padding: 14px;
      background-color: rgba(241, 241, 241, 0.5);
      border-radius: 10px 0 0 10px;
    }

    p {

      margin-bottom: 10px;
      padding-right: 30px;
      text-align: right;

      a {
        color: white;
        font-size: 14px;
      }
    }

    .login-btn {
      margin-top: 5px;
      display: flex;
      justify-content: space-evenly;

      button {
        font-family: "Microsoft soft";
        font-weight: 600;
        border: none;
        height: 45px;
        width: 150px;
        font-size: 18px;
        color: #333;
        background-color: rgba(241, 241, 241, 0.8);
        border-radius: 10px;

        &:hover {
          cursor: pointer;
        }
      }
    }



  }


}


.login-input-password input:focus+svg.lock {
  opacity: 0;
}

.login-input-password input:focus~svg#open {
  opacity: 1;
}
</style>