import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import All from '../components/All'
import Category from '../components/Category'
import Tag from '../components/Tag'
import Column from '../components/Column'
import User from '../components/user/User'
import ChangeAvatar from '../components/user/ChangeAvatar'
import ChangePassword from '../components/user/ChangePassword'
import Notification from '../components/user/Notification'
import Register from '../components/Register'
import Login from '../components/Login'
import Article from '../components/Article'
import ForgetPassword from '../components/ForgetPassword'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/all',
      name: 'all',
      component: All
    },
    {
      path: '/category/:category',
      name: 'category',
      component: Category
    },
    {
      path: '/tag/:tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/column/:column',
      name: 'column',
      component: Column
    },
    {
      path: '/article/:address',
      name: 'article',
      component: Article
    },
    {
      path: '/user',
      name: 'user',
      redirect: '/user/changeAvatar',
      children: [
        {
          path: 'changeAvatar/:username',
          name: 'changeAvatar',
          component: ChangeAvatar
        },
        {
          path: 'changePassword/:username, is_active',
          name: 'changePassword',
          component: ChangePassword
        },
        {
          path: 'notification/:username',
          name: 'notification',
          component: Notification
        }
      ],
      component: User
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: ForgetPassword
    }
  ]
})
