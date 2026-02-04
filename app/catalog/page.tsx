"use client";

import { useEffect } from "react";
import { useCarsStore } from "@/store/useCarsStore";
import CarCard from "@/components/CarCard/CarCard";
import Filtre from "@/components/Filtre/Filtre";
import css from "./Catalog.module.css";

export default function CatalogPage() {
  const { cars, isLoading, page, totalPages, fetchCars } = useCarsStore(
    (state: any) => state,
  );

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleLoadMore = () => {
    fetchCars({}, true);
  };

  return (
    <main className={css.container}>
      <Filtre />

      {isLoading && cars.length === 0 ? (
        <div className={css.loader}>Loading...</div>
      ) : (
        <>
          <ul className={css.grid}>
            {Array.isArray(cars) && cars.length > 0
              ? cars.map((car: any) => <CarCard key={car.id} car={car} />)
              : !isLoading && <p className={css.error}>Машини не знайдено</p>}
          </ul>

          {page < totalPages && (
            <button
              className={css.loadMore}
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load more"}
            </button>
          )}
        </>
      )}
    </main>
  );
}
