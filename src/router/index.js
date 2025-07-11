import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'          
import Sidebar from '../components/SideBar.vue'
import Footer from '@/views/Footer.vue'
import Header from '@/components/Header.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      sidebar: Sidebar,
      header: Header,
      footer: Footer,
    },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('Navigating from', from.fullPath, 'to', to.fullPath);
  const isAuthenticated = true;

  if (to.path === '/about' && !isAuthenticated) {
    alert('You are not allowed to access /about without login');
    next('/');
  } else {
    next();
  }
});

export default router;