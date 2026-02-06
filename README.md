# Rental Car Project

## About this project

I developed this web application for a company called "RentalCar". The main goal of the project is to provide a user-friendly platform where customers can easily browse available cars, see technical details, and make a booking online. It connects to a real backend API to manage car data and rental requests.

## Key Features

- **Home Page**: Features a hero banner with a clear call-to-action to explore the catalog.
- **Car Catalog**: A grid view of cars with a "Load More" button to load additional vehicles using backend pagination.
- **Smart Filtering**: Users can filter cars by brand, rental price, and mileage. All filters work on the backend side to ensure data accuracy.
- **Favorites System**: You can add cars to a favorites list by clicking the heart icon. This list is saved in local storage, so it stays there even after refreshing the page.
- **Detailed Car Pages**: Each car has a dedicated page with detailed descriptions, a list of accessories, and a booking form.
- **Booking Form**: A fully functional form with a custom calendar to pick rental dates. It shows a success notification when a car is "rented".

## Tech Stack

- **Framework**: Next.js (App Router).
- **Language**: TypeScript.
- **State Management**: Zustand with persistence for favorites.
- **HTTP Client**: Axios for fetching data from the API.
- **Styles**: CSS Modules.
- **Libraries**: React Datepicker (for booking) and React Hot Toast (for alerts).

## UI/UX Details

- **Formatting**: Car mileage is displayed with space separators (e.g., 5 000 km) for better readability.
- **Typography**: I used Manrope and Inter fonts to match the original design layout.
- **Responsiveness**: The project is optimized for desktop view as per the requirements.

## How to Install and Run

1. Clone the repository to your local machine.
2. Run `npm install` to download all necessary packages.
3. Start the development server using `npm run dev`.
4. Open your browser and go to `http://localhost:3000`.
