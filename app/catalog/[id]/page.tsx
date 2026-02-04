"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!car) return <div>Loading car details...</div>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Сторінка машини: {car.brand} {car.model}
      </h1>
      <p>ID: {id}</p>
      <img src={car.img} alt={car.brand} style={{ width: "300px" }} />
      <pre>{JSON.stringify(car, null, 2)}</pre>
    </div>
  );
}
