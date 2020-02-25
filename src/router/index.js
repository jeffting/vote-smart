import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Issues from '@/components/Issues'
import Quiz from '@/components/Quiz'
import Candidates from '@/components/Candidates'
import Profile from '@/components/Profile'
import Issue from '@/components/Issue'

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
    },
    {
      path: '/Profile/:name',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Issues/:issue',
      name: 'Issue',
      component: Issue
    }
  ]
})
