<template>
  <div class="bookstore-wrap">
    <div class="bookstore">
      <div class="bookstore-select">
      <p>
        <a>所有分类 > </a>
        <a v-for="cate in cateList" :key="cate" @click="removeTarget(cate)"> {{ cate }}  <span>✖</span></a>
        <input type="text" placeholder="搜索" v-model="keyWord">
        <svg @click="getSearchBooks" t="1677501371382" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2582" width="18" height="18"><path d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z" fill="black" p-id="2583"></path></svg>
      </p>
      </div>
      <div class="bookstore-attribute">
        <ul v-for="category in categorySelectListData" :key="category.id">
          <li><p>{{ category.cateName }}:</p></li>
          <li v-for="(cate, index) in category.cateList" @click="saveTarget(cate)" :key="index">
            <a>{{ cate }}</a>
          </li>
        </ul>
      </div>
      <div class="bookstore-bookitem-wrap" >
        <BookItem :book = "book" v-for="book in bookList" :key=book.id></BookItem>
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from './BookItem'
export default {
  name: 'BookStore',
  data() {
    return {
      categorySelectListData: [],
      bookList: [],
      // 永久保存关键字
      keyWord: localStorage.getItem('keyword') || '',
      cateList: []
    }
  },
  components: {
    BookItem
  },
  watch: {
    keyWord(newVal) {
      // 监听输入框 - 输入框为空 重新获取数据
      if (newVal.length == 0) {
        this.getBookStoreBooks()
        localStorage.setItem('keyword', '')
      }
    }
  },
  mounted() {
    this.$bus.$emit('pathChange', 'bookstore')
    this.getCategorySelectListData()
    if (this.$route.params.keyword || this.keyWord) {
      this.keyWord = this.$route.params.keyword || this.keyWord
      this.getSearchBooks()
    } else {
      this.getBookStoreBooks()
    }
  },
  methods: {
    // 获取分类名
    getCategorySelectListData() {
      this.$store.dispatch('getCategorySelectListData').then(res => {
        this.categorySelectListData = res
      }).catch(err => {
        alert(err.message)
      })
    },
    // store内获取全部书籍信息
    getBookStoreBooks() {
      this.$store.dispatch('getBookStoreBooksData').then(res => {
        this.bookList = res
      }).catch(err => {
        alert(err.message)
      })
    },
    // 搜索关键字
    getSearchBooks() {
      // 如果关键字为空，默认显示全部书籍
      if (this.keyWord.trim() == '') {
        this.getBookStoreBooks()
        // 永久保存关键字
        localStorage.setItem('keyword', '')
        return
      }
      // 使用关键字模糊搜索内容
      this.$store.dispatch('getSearchListData', this.keyWord).then(res => {
        localStorage.setItem('keyword', this.keyWord)
        this.bookList = res
      }).catch(err => {
        console.log(err.msg)
      })
    },
    // 保存target
    saveTarget(target) {
      // 判断是否存在相同 - 如果不存在，添加进数组
      if (this.cateList.indexOf(target) === -1) {
        this.cateList.push(target)
      }
      // 获取过滤后的内容
      this.getFilterBooks()
    },
    // 删除target
    removeTarget(target) {
      this.cateList.splice(this.cateList.indexOf(target), 1)

      if (this.cateList.length == 0 && this.keyWord === '') return this.getBookStoreBooks()
      if (this.cateList.length >= 0 && this.keyWord) {
        return this.$store.dispatch('getSearchListData', this.keyWord).then(res => {
          this.bookList = res

          this.getFilterBooks()
        }).catch(err => {
          console.log(err.msg)
        })
      }

      // 需要在获取过滤后内容前，将所有书籍内容保存到bookList
      this.$store.dispatch('getBookStoreBooksData').then(res => {
        this.bookList = res
        // 异步之后，再过滤
        this.getFilterBooks()
      }).catch(err => {
        alert(err)
      })
    },
    // 获取过滤后的内容
    getFilterBooks() {
      this.cateList.forEach(item => {
        this.bookList = this.bookList.filter(item1 => {
          return item1.target.indexOf(item) !== -1
        })
      })
    },
    toDeteil(id) {
      console.log(id)
    }
  }
}
</script>
<style lang="less" scoped>
.bookstore-wrap {
  width: 100%;
  background: url('./imgs/bookstore-bg.png');
  background-size: cover;
  padding-bottom: 40px;

  .bookstore {
    max-width: 1175px;
    height: 100%;
    margin: 0 auto;
    font-size: 13px;

    .bookstore-select {
      position: relative;
      height: 63px;
      line-height: 65px;
      padding: 0px 20px;

      a:nth-of-type(1) {
        color: #494949;
      }

      a:not(:nth-of-type(1)) {
        display: inline-block;
        margin: 0px 10px;
        padding: 0 5px;
        border: 1px dashed transparent;
        height: 25px;
        line-height: 25px;
        transition: all 0.3s linear ease-in-out;

        &:hover {
          border: 1px dashed gray;

          span {
            color: rgb(156, 156, 156);
          }
        }
      }

      input {
        position: absolute;
        right: 20px;
        top: 48%;
        transform: translateY(-48%);
        padding: 0 15px;
        font-family: "Microsoft soft";
        outline: none;
        border: 0px;
        height: 40px;
        border-radius: 3px;
        width: 200px;
        background-color: #fff;
      }

      svg {
        position: absolute;
        right: 20px;
        top: 48%;
        padding: 10px;
        transform: translateY(-48%);

        &:hover {
          background: gray;
        }
      }
    }

    .bookstore-attribute {
      height: 207px;
      overflow: hidden;
      background-color: white;
      padding: 0 30px;
      padding-top: 20px;

      ul {
        clear: both;
        height: 40px;
        line-height: 30px;

        li {
          float: left;
          width: 80px;
          margin: 0 5px;
          line-height: 20px;

        }

        li:first-child {
          margin-right: 30px;
        }
      }
    }

    .bookstore-bookitem-wrap {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>