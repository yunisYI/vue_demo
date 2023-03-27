
// 路由的配置文件
export default [
  {
    name: 'home',
    path: '/home',
    // 使用懒加载
    component: () => import('@/pages/Home')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'settlement',
    path: '/settlement',
    component: () => import('@/pages/Settlement')
  },

  {
    name: 'shopcart',
    path: '/shopcart',
    component: () => import('@/pages/ShopCart')
  },
  {
    name: 'bookstore',
    path: '/bookstore',
    // 使用懒加载
    component: () => import('@/pages/BookStore'),
  },
  {
    name: 'successaddtocart',
    path: '/successaddtocart',
    // 使用懒加载
    component: () => import('@/pages/SuccessAddToCart'),
  },
  {
    name: 'detail',
    path: '/detail/:id', // 确保使用detail路径可以访问到页面
    component: () => import('@/pages/Detail')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/Login'),
    // login页隐藏顶部登陆栏
  },
  {
    name: 'signup',
    path: '/signup',
    component: () => import('@/pages/Signup'),
  },
  {
    name: 'after-sales',
    path: '/after-sales',
    component: () => import('@/pages/AfterSales'),
  },
]