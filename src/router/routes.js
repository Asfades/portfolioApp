const routes = [
  { path: '/portfolioApp/', component: require('../components/Login/LoginPage') },
  { path: 'portfolioApp/mainpage', component: require('../components/Mainpage') },
  { path: 'portfolioApp/works/', component: require('../components/Works') },
  { path: '/blog', component: require('../components/Blog') },
  { path: '/admin', component: require('../components/Admin/About') },
  { path: '/admin/blog', component: require('../components/Admin/Blog') },
  { path: '/admin/works', component: require('../components/Admin/Works') }
]

export default routes
