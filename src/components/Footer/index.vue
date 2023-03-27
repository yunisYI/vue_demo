<template>
  <div class="footer-wrap">
    <div class="footer-main">
      <div class="footer-main-top">
        <div>LOGO</div>
        <div class="serve">
          <ul>
            <li>关于</li>
            <li>公司简介</li>
            <li>商务合作</li>
            <li>团队故事</li>
            <li>发票制度</li>
          </ul>
          <ul>
            <li>服务</li>
            <li>订单服务</li>
            <li>配送服务</li>
            <li>支付方式</li>
            <li>配送方式</li>
          </ul>
          <ul>
            <li>配送</li>
            <li>即日到</li>
            <li>次日到</li>
            <li>验货与签收</li>
            <li>订单自提</li>
          </ul>
        </div>
        <div class="interaction">
          <div class="customer">
            <svg t="1677660057331" class="icon" viewBox="0 0 1024 1024"
             version="1.1" xmlns="http://www.w3.org/2000/svg" 
             p-id="3530" width="90" height="90"><path d="M959.716928 554.950208M532.429285 958.838931M64.446801 594.626859M270.969435 57.464783" fill="#ffffff" p-id="3531"></path><path d="M583.719438 385.762901C664.377456 493.897713 810.145377 538.433022 810.145377 538.433022 799.252283 351.240643 687.435615 259.769348 510.411829 258.869862 298.641681 257.789251 175.627996 429.173596 222.010373 597.866646 222.00935 597.866646 580.769246 462.953957 583.719438 385.762901z" fill="#ffffff" p-id="3532"></path><path d="M843.843874 721.201649c65.939805-16.944927 114.865097-15.887852 114.865097-150.871149 0-65.013713-38.867216-120.714316-93.980441-144.029324C824.128857 272.551466 697.718819 116.236328 507.890402 111.958908c-6.053879-0.135076-12.062733-0.157589-18.004049 0-183.887101 4.724605-309.892933 146.908908-324.069817 311.821865-58.44511 21.626553-102.44216 79.103616-100.462063 146.549727 4.432962 151.456481 66.321498 153.863297 148.712997 155.550729l0-293.098431c1.732457-125.304867 124.495432-264.293385 293.822932-264.293385 168.313404 0 261.415848 130.999566 302.464753 247.369947l0 301.380048c-8.28264 19.399839-30.449499 41.206494-70.936609 80.296791-52.819996 50.971905-128.907928 77.414137-128.907928 77.414137-8.844435 1.867534-15.078417 13.68365-12.603039 23.76424 2.475378 10.082636 13.253862 16.136515 21.605064 12.242835 0 0 80.274278-26.195615 140.430356-84.256986C819.492256 769.20392 843.640236 721.763444 843.843874 721.201649z" fill="#ffffff" p-id="3533"></path><path d="M375.327224 624.215758m-37.46631 0a36.613 36.613 0 1 0 74.93262 0 36.613 36.613 0 1 0-74.93262 0Z" fill="#ffffff" p-id="3534"></path><path d="M657.294131 624.215758m-37.46631 0a36.613 36.613 0 1 0 74.93262 0 36.613 36.613 0 1 0-74.93262 0Z" fill="#ffffff" p-id="3535"></path></svg>
            <p>(9:00-20:00)</p>
            <p>400-000-0000</p>
          </div>
          <div class="qr-wrap">
            <img src="./imgs/qr.png" alt="">
            <p>扫一扫关注我们</p>
          </div>
        </div>
      </div>
      <div class="footer-main-footer">
        <p>Copyright © 2010 衡水市某某图书有限公司 版权所有 京公网安备 1100012000088号  京ICP备11041704号</p>
        <p>地址 ：河北省衡水市桃城区XX大厦五楼 座机：0318 - 6011915</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style lang="less" scoped>
.footer-wrap {
  width: 100%;
  height: 315px;
  background-color: #333;
  color: #fff;
  font-size: 13px;

  .footer-main {
    margin: 0 auto;
    max-width: 1175px;
    height: 100%;
    overflow: hidden;

    .footer-main-top {
      display: flex;
      justify-content: space-evenly;
      margin-top: 40px;
      padding-bottom: 10px;
      border-bottom: 3px solid #fff;

      .serve {
        margin-top: 5px;
        display: flex;
        justify-content: space-around;
        overflow: hidden;

        ul {
          margin-left: 60px;
          text-align: center;

          li {
            margin-top: 15px;
          }

          li:first-child {
            margin-bottom: 20px;
          }
        }
      }

      .interaction {
        display: flex;
        justify-content: space-between;
        text-align: center;

        .customer {
          margin: 10px 60px;

          p {
            font-size: 20px;
          }
        }

        .qr-wrap {
          margin: 30px;
          overflow: hidden;

          img {
            width: 99px;
            height: 99px;
            margin-bottom: 15px;
          }
        }
      }
    }

    .footer-main-footer {
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>