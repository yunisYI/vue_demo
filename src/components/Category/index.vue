<template>
  <div class="main-wrap">
    <div class="main">
      <ul>
        <li>
          <p>
            所有商品分类
            <svg t="1677488378244" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2461" width="18" height="18"><path d="M164.3 206.4c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM353.2 300.4h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40zM164.3 459.2c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM878.2 473.2h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40zM164.3 712c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zM878.2 726h-525c-20.7 0-37.5 17.9-37.5 40s16.8 40 37.5 40h525c20.7 0 37.5-17.9 37.5-40s-16.8-40-37.5-40z" fill="white" p-id="2462"></path></svg>
          </p>
        </li>
        <div class="cate-frame">
          <ul v-for="category in categoryList" :key="category.id">
            <li v-for="(cate, index) in category.cateUl" :key="index">
              <a href=""> {{ cate }} </a> /
            </li>
          </ul>
        </div>
        <li>
          <input type="text" v-model="keyWord" placeholder="搜索">
          <button class="btn" @click="getSearchData">
            <svg t="1677501371382" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2582" width="18" height="18"><path d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z" fill="black" p-id="2583"></path></svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      categoryList: [],
      keyWord: ''
    }
  },
  mounted() {
    this.getCategoryListData()
    // this.getSearchData()
  },
  methods: {
    // 获取搜索的数据
    getSearchData() {
      // 传递关键字 跳转到boostore页
      let loaction = { name: 'bookstore', params: { keyword: this.keyWord || undefined } }
      this.$router.push(loaction)
    },
    // 获取分类信息
    getCategoryListData() {
      this.$store.dispatch('getCategoryListData').then(res => {
        this.categoryList = res
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.main-wrap {
  width: 100%;
  background-color: #333333;
  height: 40px;

  .main {
    max-width: 1175px;
    height: 100%;
    margin: 0 auto;
    font-size: 12px;
    line-height: 40px;
    color: #f9f9f9;
    position: relative;

    .cate-frame {
      position: absolute;
      top: 40px;
      width: 250px;
      height: 0;
      background-color: #333;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      z-index: 11;

      &:hover {
        height: 400px;
      }

      a {
        color: #e0e0e0;
      }

      &>ul {
        padding: 5% 6%;
        clear: both;
        width: 88%;
        height: 19.4px;

        &:hover {
          background-color: rgb(134, 134, 134);
        }

        li {
          float: left;
          margin: 3px;
          height: 15px;
          line-height: 12px;

          a:hover {
            color: #fff;
          }
        }
      }
    }

    &>ul {
      display: flex;
      justify-content: space-between;

      li:hover+.cate-frame {
        height: 400px;
      }

      li p {
        position: relative;
        width: 120px;
        font-size: 15px;
      }

      li input {
        &:focus {}
      }

      li button {
        font-family: "Microsoft soft";
        margin-right: 50px;
        color: #333;
        position: absolute;
        top: 10px;
        right: -43px;
        opacity: 1;
        background: #fff;
        background-color: transparent;
        border-style: none;
      }

      li input {
        font-family: "Microsoft soft";
        outline: none;
        border: 0px;
        height: 30px;
        border-radius: 3px;
        padding: 0 15px;
        width: 200px;
        background-color: #fff;
        border-bottom: 1px solid #333;

        &::placeholder {
          color: white;
        }

        &:hover {
          cursor: pointer;
        }
      }

      p svg {
        position: absolute;
        top: 11px;
        right: 5px;
      }
    }
  }
}
</style>