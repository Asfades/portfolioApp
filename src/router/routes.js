const routes = [
  { path: '/portfolioApp/', component: require('../components/Login/LoginPage') },
  { path: '/portfolioApp/mainpage', component: require('../components/Mainpage') },
  { path: '/portfolioApp/works/', component: require('../components/Works') },
  { path: '/portfolioApp/blog', component: require('../components/Blog') },
  { path: '/portfolioApp/admin', component: require('../components/Admin/About') },
  { path: '/portfolioApp/admin/blog', component: require('../components/Admin/Blog') },
  { path: '/portfolioApp/admin/works', component: require('../components/Admin/Works') }
]

export default routes
