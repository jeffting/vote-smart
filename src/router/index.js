import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Issues from '@/components/Issues'
import Quiz from '@/components/Quiz'
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
      path: '/Issues',
      name: 'Issues',
      component: Issues
    },
    {
      path: '/Candidates',
      name: 'Candidates',
      component: Candidates
    },
    {
      path: '/Quiz',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
