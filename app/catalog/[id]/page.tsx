"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import css from "./Details.module.css";

const Icon = ({ id }: { id: string }) => (
  <svg width="16" height="16" className={css.icon}>
    <use href={`/logoSvg.svg#${id}`} />
  </svg>
);

export default function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!car) return <div className={css.loader}>Loading...</div>;

  return (
    <main className={css.container}>
      <div className={css.wrapper}>
        <div className={css.leftCol}>
          <img src={car.img} alt={car.brand} className={css.mainImg} />

          <div className={css.bookingCard}>
            <h3 className={css.bookTitle}>Book your car now</h3>
            <p className={css.bookSubtitle}>
              Stay connected! We are always ready to help you.
            </p>
            <form className={css.form} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <input
                type="text"
                placeholder="Booking date"
                onFocus={(e) => (e.target.type = "date")}
              />
              <textarea
                placeholder="Comment"
                className={css.textarea}
              ></textarea>
              <button type="submit" className={css.submitBtn}>
                Send
              </button>
            </form>
          </div>
        </div>

        <div className={css.rightCol}>
          <div className={css.header}>
            <h1>
              {car.brand} {car.model}, {car.year}
            </h1>
            <span className={css.idText}>Id: {car.id?.slice(0, 4)}</span>
          </div>

          <p className={css.location}>
            <Icon id="Location" /> {car.address} | Mileage:{" "}
            {car.mileage?.toLocaleString()} km
          </p>

          <div className={css.price}>${car.rentalPrice}</div>
          <p className={css.description}>{car.description}</p>

          <section className={css.section}>
            <h4 className={css.sectionTitle}>Rental Conditions:</h4>
            <div className={css.conditionsGrid}>
              {car.rentalConditions?.map((item: string, i: number) => (
                <div key={i} className={css.conditionItem}>
                  <Icon id="VectorO" /> {item}
                </div>
              ))}
            </div>
          </section>

          <section className={css.section}>
            <h4 className={css.sectionTitle}>Car Specifications:</h4>
            <ul className={css.specsList}>
              <li>
                <span>
                  <Icon id="Calendar" /> Year:
                </span>{" "}
                <strong>{car.year}</strong>
              </li>
              <li>
                <span>
                  <Icon id="Car" /> Type:
                </span>{" "}
                <strong>{car.type}</strong>
              </li>
              <li>
                <span>
                  <Icon id="Zapravka" /> Fuel Consumption:
                </span>{" "}
                <strong>{car.fuelConsumption}</strong>
              </li>
              <li>
                <span>
                  <Icon id="Settings" /> Engine Size:
                </span>{" "}
                <strong>{car.engineSize}</strong>
              </li>
            </ul>
          </section>

          <section className={css.section}>
            <h4 className={css.sectionTitle}>
              Accessories and functionalities:
            </h4>
            <div className={css.tagsCloud}>
              {[...(car.accessories || []), ...(car.functionalities || [])].map(
                (tag, i) => (
                  <span key={i} className={css.tag}>
                    <Icon id="VectorO" /> {tag}
                  </span>
                ),
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
