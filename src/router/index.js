import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/NewsList',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
