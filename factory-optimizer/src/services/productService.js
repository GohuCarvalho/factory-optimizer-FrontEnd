import api from "./api"

export const getProducts = () => {
  return api.get("/products")
}

export const createProduct = (product) => {
  return api.post("/products", product)
}

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`)
}