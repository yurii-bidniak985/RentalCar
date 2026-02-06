import Image from "next/image";
import { Car } from "@/types/cars";
import css from "./CarCard.module.css";
import Link from "next/link";
import { useCarsStore } from "@/store/useCarsStore";

interface CarCardProps {
  car: Car;
}

const LikeSvg = () => (
  <svg width={16} height={16}>
    <use href="/logoSvg.svg#Like"></use>
  </svg>
);

const LikeSvgActive = () => (
  <svg width={16} height={16}>
    <use href="/logoSvg.svg#Like-blue"></use>
  </svg>
);

export default function CarCard({ car }: CarCardProps) {
  const { favorites, toggleFavorite } = useCarsStore((state: any) => state);

  const isFavorite = favorites.includes(car.id);

  const addressParts = car.address.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  const handleFavoriteClick = () => {
    toggleFavorite(car.id);
  };

  return (
    <li className={css.card}>
      <div className={css.thumb}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          className={css.image}
        />
        <button
          type="button"
          className={css.favorite}
          aria-label="Add to favorites"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? <LikeSvgActive /> : <LikeSvg />}
        </button>
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
          <span>{car.mileage.toLocaleString("ru-RU")} km</span>
          <span>{car.accessories[0]}</span>
        </div>
        <Link href={`/catalog/${car.id}`} className={css.learnMoreBtn}>
          <button className={css.btn}>Read more</button>
        </Link>
      </div>
    </li>
  );
}
