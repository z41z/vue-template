import { createRouter, createWebHistory } from 'vue-router'
import {
  PUBLIC_ROUTES
} from '@router/public'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: PUBLIC_ROUTES
})

export default router