import { createRouter, createWebHistory } from "vue-router"

import ProductsPage from "../pages/ProductsPage.vue"
import RawMaterialsPage from "../pages/RawMaterialsPage.vue"
import ProductionPlanPage from "../pages/ProductionPlanPage.vue"
import DashboardPage from "../pages/DashboardPage.vue"
import ProductCompositionPage from "../pages/ProductCompositionPage.vue"

const routes = [
  { path: "/", component: DashboardPage },
  { path: "/production-plan", component: ProductionPlanPage },
  { path: "/products", component: ProductsPage },
  { path: "/product-composition", component: ProductCompositionPage },
  { path: "/materials", component: RawMaterialsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router