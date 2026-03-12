import api from "./api";

export const getRawMaterials = () => {
  return api.get("/raw-materials");
};

export const createRawMaterial = (material) => {
  return api.post("/raw-materials", material);
};

export const deleteRawMaterial = (id) => {
  return api.delete(`/raw-materials/${id}`);
};