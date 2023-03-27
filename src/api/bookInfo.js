import request from "@/tools/request";

// 获取swiper图片
export const getSwiperData = () => {
  return request({
    url: '/bookInfo/headerData',
    method: 'GET'
  })
}

// 获取推荐页数据
export const getRecommendData = () => {
  return request({
    url: '/bookInfo/recommendData',
    method: 'GET'
  })
}

// 获取主页排行数据
export const getRankingData = () => {
  return request({
    url: '/bookInfo/rankingData',
    method: 'get'
  })
}

// 获取主页排行数据
export const getCategoryList = () => {
  return request({
    url: '/bookInfo/categoryList',
    method: 'get'
  })
}
// 获取书城分类数据
export const getCategorySelectList = () => {
  return request({
    url: '/bookInfo/categorySelectList',
    method: 'get'
  })
}

// 获取书城数据
export const getBookStoreBooks = () => {
  return request({
    url: '/bookInfo/bookStoreBooks',
    method: 'get'
  })
}
// 获取搜索结果
export const getSearchList = (keyWord) => {
  return request({
    url: `/bookInfo/searchList/${keyWord}`,
    method: 'get',
  })
}

// 使用id获取详情页数据
export const getBookDetailInfo = (id) => {
  return request({
    url: `/bookInfo/bookDetail/${id}`,
    method: 'get'
  })
}

// 获取猜你喜欢的数据
export const getLikeBooks = () => {
  return request({
    url: '/bookInfo/like',
    method: 'get'
  })
}

// 添加到购物车 num id quantity
export const reqAddToCart = (data) => {
  return request({
    url: '/cart/addToCart',
    method: 'post',
    data
  })
}

// 使用id获取书籍信息
export const getBookInfoDataById = (id) => {
  return request({
    url: `/cart/bookInfo/${id}`,
    method: 'get'
  })
}

// 获取购物车信息
export const getShopCartList = (usernumber) => {
  return request({
    url: '/cart/shopCartList',
    data: usernumber,
    method: 'post'
  })
}
// 更新指定id的书籍的状态
export const updateShopCartItemStatusById = (data) => {
  return request({
    url: '/cart/updateBookStatus',
    method: 'put',
    data
  })
}

// 修改指定id的书籍的数量
export const reqUpdateBookQuantity = (data) => {
  return request({
    url: '/cart/updateBookQuantity',
    method: 'put',
    data
  })
}

// 删除指定商品
export const reqDeleteBookById = (data) => {
  return request({
    url: '/cart/deleteBook',
    method: 'delete',
    params: data
  })
}

// 删除选中的商品
export const reqDeleteAllBooks = (data) => {
  return request({
    url: '/cart/deleteAllBooks',
    method: 'delete',
    params: data
  })
}
