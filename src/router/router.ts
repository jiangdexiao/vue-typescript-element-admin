/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
import Home from '../views/Home.vue'
export default [
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'login'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'About'
    }
  }
]
