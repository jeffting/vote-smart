import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Quiz from '@/components/Quiz'
import Issues from '@/components/Issues'
import Candidates from '@/components/Candidates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/issues',
      name: 'Issues',
      component: Issues,
    },
    {
      path: '/candidates',
      name: 'Candidates',
      component: Candidates,
    }
  ]
})
