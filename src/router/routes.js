
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '/signn', component: () => import('pages/Index.vue') },
      { path: '/', component: () => import('pages/Signn.vue') },
      { path: '/update', component: () => import('pages/Updateprofile.vue'),}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
