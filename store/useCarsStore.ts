import { create } from "zustand";
import { api } from "@/lib/api";
import { Car, CarsState } from "@/types/cars";

export const useCarsStore = create<CarsState>((set) => ({
  items: [],
  brands: [],
  prices: [],
  isLoading: false,

  fetchCars: async () => {
    set({ isLoading: true });
    try {
      const { data } = await api.get("/cars");
      set({ items: data.cars || [] });
    } catch (error) {
      console.error("Ошибка при получении машин:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchFilters: async () => {
    try {
      const { data } = await api.get("/cars");
      const carsArray: Car[] = data.cars || [];

      if (carsArray.length === 0) return;

      const uniqueBrands = Array.from(
        new Set(carsArray.map((car) => car.brand)),
      ).sort() as string[];

      const uniquePrices = Array.from(
        new Set(
          carsArray.map((car) =>
            parseInt(car.rentalPrice.replace(/[^\d]/g, "")),
          ),
        ),
      )
        .sort((a: number, b: number) => a - b)
        .map(String) as string[];

      set({ brands: uniqueBrands, prices: uniquePrices });
    } catch (error) {
      console.error("Ошибка фильтров:", error);
    }
  },
}));
