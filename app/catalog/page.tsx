"use client";

import { useEffect } from "react";
import { useCarsStore } from "@/store/useCarsStore";
import Filtre from "@/components/Filtre/Filtre";
import CarCard from "@/components/CarCard/CarCard";
import css from "./Catalog.module.css";

export default function CatalogPage() {
  const { items, isLoading, fetchCars } = useCarsStore();

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <main className={css.container}>
      <Filtre />
      {isLoading && <div className={css.loader}>Loading cars...</div>}
      <ul className={css.grid}>
        {items.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
      {!isLoading && items.length === 0 && (
        <p className={css.empty}>Машины не найдены. Проверьте API.</p>
      )}
    </main>
  );
}
