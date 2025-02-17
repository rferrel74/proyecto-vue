import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
/*     {
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/contador',
      name: 'contador',
       component: () => import('../components/Contador.vue'),
    }, 
    {
      path: '/lista-tareas',
      name: 'ListaDeTareas',
       component: () => import('../components/ListaTareas.vue'),
    },     
  ],
})

export default router
