import Image from "next/image";
import { Car } from "@/types/cars";
import css from "./CarCard.module.css";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const addressParts = car.address.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  return (
    <li className={css.card}>
      <div className={css.thumb}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          className={css.image}
        />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <p className={css.title}>
            {car.brand} <span className={css.accent}>{car.model}</span>,{" "}
            {car.year}
          </p>
          <span className={css.price}>${car.rentalPrice}</span>
        </div>

        <div className={css.tags}>
          <span>{city}</span>
          <span>{country}</span>
          <span>{car.rentalCompany}</span>
          <span>{car.type}</span>
          <span>{car.mileage.toLocaleString()} km</span>
          <span>{car.accessories[0]}</span>
        </div>

        <button className={css.btn}>Learn more</button>
      </div>
    </li>
  );
}
