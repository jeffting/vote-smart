import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Issues from '@/components/Issues'
import Quiz from '@/components/Quiz'
import Candidates from '@/components/Candidates'
import Profile from '@/components/Profile'
import Issue from '@/components/Issue'
import Results from '@/components/Results'

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
    },
    {
      path: '/Quiz/results',
      name: 'results',
      component: Results,
      props: true
    }

  ],
  scrollBehavior() {
    return {x: 0, y: 0}
}
})
