const routes = [
  { path: '/', component: require('../components/Login/LoginPage') },
  { path: '/mainpage', component: require('../components/Mainpage') },
  { path: '/works', component: require('../components/Works') },
  { path: '/blog', component: require('../components/Blog') },
  { path: '/admin', component: require('../components/Admin/About') },
  { path: '/admin/blog', component: require('../components/Admin/Blog') },
  { path: '/admin/works', component: require('../components/Admin/Works') }
]

export default routes
