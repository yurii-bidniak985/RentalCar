import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const API_URL = "https://car-rental-api.goit.global/cars";

export const useCarsStore = create()(
  persist(
    (set, get: any) => ({
      cars: [],
      favorites: [],
      brands: [],
      prices: [],
      isLoading: false,
      page: 1,
      totalPages: 1,

      fetchFiltersData: async () => {
        try {
          const { data } = await axios.get(API_URL, { params: { limit: 100 } });
          if (data.cars) {
            const uniqueBrands = Array.from(
              new Set(data.cars.map((c: any) => c.brand)),
            ).sort();
            const uniquePrices = Array.from(
              new Set(data.cars.map((c: any) => c.rentalPrice)),
            )
              .map(Number)
              .sort((a, b) => a - b)
              .map(String);
            set({ brands: uniqueBrands, prices: uniquePrices });
          }
        } catch (e) {
          console.error(e);
        }
      },

      fetchCars: async (filters: any = {}, isLoadMore = false) => {
        set({ isLoading: true });
        try {
          const currentPage = isLoadMore ? get().page + 1 : 1;
          const params: any = { page: currentPage, limit: 12, ...filters };
          const { data } = await axios.get(API_URL, { params });
          set((state: any) => ({
            cars: isLoadMore ? [...state.cars, ...data.cars] : data.cars,
            page: currentPage,
            totalPages: data.totalPages,
            isLoading: false,
          }));
        } catch (e) {
          set({ isLoading: false });
        }
      },

      toggleFavorite: (carId: string) =>
        set((state: any) => ({
          favorites: state.favorites.includes(carId)
            ? state.favorites.filter((id: string) => id !== carId)
            : [...state.favorites, carId],
        })),
    }),
    {
      name: "rental-cars-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: any) => ({ favorites: state.favorites }),
    },
  ),
);
