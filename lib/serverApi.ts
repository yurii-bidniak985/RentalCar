import { api } from "./api";
import { Car } from "@/types/cars";

export interface FetchCarsParams {
  brand?: string;
  price?: number | null;
  mileageFrom?: number | null;
  mileageTo?: number | null;
  page: number;
  limit: number;
}

export const fetchCars = async (params: FetchCarsParams): Promise<Car[]> => {
  const { data } = await api.get("/cars", { params });
  return data.cars || [];
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const { data } = await api.get(`/cars/${id}`);
  return data;
};
