import { createRouter, createWebHistory } from "vue-router"

import ProductsPage from "../pages/ProductsPage.vue"
import RawMaterialsPage from "../pages/RawMaterialsPage.vue"
import ProductionPlanPage from "../pages/ProductionPlanPage.vue"

const routes = [
  { path: "/", component: ProductionPlanPage },
  { path: "/products", component: ProductsPage },
  { path: "/materials", component: RawMaterialsPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router