<template>
  <div class="signup-wrap">
    <div class="signup-input-wrap">
      <div class="number">
        <span>手机号码：</span>
        <input type="number" v-model.number="number" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))">
      </div>
      <div class="number">
        <span>短信验证码：</span>
        <input type="text" v-model.number="code">
        <button @click="getCaptchaNum">发送验证码</button>
      </div>
      <div class="password">
        <span>设置密码：</span>
        <input type="password" v-model="password">
      </div>
      <div class="password1">
        <span>确认密码：</span>
        <input type="password" v-model="password1" >
      </div>
      <div style="height: 21px;">
        <p v-show="isSame" style="margin-right:160px;color:red">两次输入的密码不相同！</p>
      </div>
      <div class="signup-btn">
        <button @click="signup">立即注册</button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      number: '',
      code: '',
      password: '',
      password1: '',
      isSame: ''
    }
  },
  watch: {
    password1(newVal) {
      this.isSame = newVal !== this.password
    },
    password(newVal) {
      this.isSame = newVal !== this.password1
    }
  },
  methods: {
    // 获取验证码
    getCaptchaNum() {
      let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      let result = reg.test(this.number)
      if (!result) return alert('请正确填写手机号！')
      this.$store.dispatch('getCaptchaNum').then(res => {
        this.code = res
      }).catch(err => {
        alert(err)
      })
    },
    signup() {
      let { number, password } = this
      this.$store.dispatch('toSignup', { usernumber: number, password }).then(() => {
        alert('注册成功，即将跳转至登录页！')
        setTimeout(() => {
          this.$router.push('./login')
        }, 2000);
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.signup-wrap {
  height: 911px;
  width: 100%;
  background-image: url('./imgs/login-bgi.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  .signup-input-wrap>div {
    text-align: right;

    &:nth-of-type(2) {
      position: relative;

      button {
        position: absolute;
        right: 0;
        top: 15px;
        border-radius: 0 15px 15px 0;
        border: none;
        height: 42px;
        width: 90px;
        background-color: rgba(241, 241, 241, 0.0);
        color: rgb(97, 96, 96);

        &:hover {
          box-shadow: 0px 0px 20px rgba(150, 150, 150, 0.3);
          background-color: rgba(241, 241, 241, 1);
          cursor: pointer;
        }
      }
    }

    &:last-of-type button {
      border: none;
      height: 35px;
      width: 150px;
      background-color: rgba(241, 241, 241, 1);
      color: rgb(97, 96, 96);
      border-radius: 15px;

      &:hover {
        box-shadow: 0px 0px 20px rgba(150, 150, 150, 0.5);
        cursor: pointer;
      }
    }

    span {
      font-size: 18px;
      color: #fff;
    }

    input {
      font-family: "Microsoft soft";
      font-size: 20px;
      color: #333;
      margin: 15px 0;
      padding: 0 10px;
      border: none;
      outline-style: none;
      height: 42px;
      width: 316px;
      border-radius: 10px;
      background-color: rgba(241, 241, 241, 0.5);
    }
  }




}
</style>