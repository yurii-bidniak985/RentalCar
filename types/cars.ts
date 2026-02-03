export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

export interface CarsState {
  items: Car[];
  brands: string[];
  prices: string[];
  isLoading: boolean;
  fetchCars: () => Promise<void>;
  fetchFilters: () => Promise<void>;
}
