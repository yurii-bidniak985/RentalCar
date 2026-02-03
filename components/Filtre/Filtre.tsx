// "use client";

// import { useState } from "react";
// import Select, { components, DropdownIndicatorProps } from "react-select";
// import css from "./Filtre.module.css";

// const BRANDS = ["тест", "тест", "тест", "тест", "тест", "тест"].map((b) => ({
//   value: b,
//   label: b,
// }));
// const PRICES = ["тест", "тест", "тест", "тест", "тест", "тест"].map((p) => ({
//   value: p,
//   label: p,
// }));

// const CustomChevron = ({ isOpen }: { isOpen: boolean }) => (
//   <svg
//     width="14"
//     height="8"
//     viewBox="0 0 14 8"
//     fill="none"
//     style={{
//       transition: "transform 0.2s",
//       transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//       marginRight: "14px",
//     }}
//   >
//     <path
//       d="M1 1L7 7L13 1"
//       stroke="#121417"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const DropdownIndicator = (props: DropdownIndicatorProps<any, false>) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <CustomChevron isOpen={props.selectProps.menuIsOpen} />
//     </components.DropdownIndicator>
//   );
// };

// export default function Filtre() {
//   const [brand, setBrand] = useState<any>(null);
//   const [price, setPrice] = useState<any>(null);
//   const [minMileage, setMinMileage] = useState("");
//   const [maxMileage, setMaxMileage] = useState("");

//   const selectStyles = {
//     control: (base: any) => ({
//       ...base,
//       backgroundColor: "#F7F7FB",
//       border: "none",
//       borderRadius: "14px",
//       height: "48px",
//       boxShadow: "none",
//       cursor: "pointer",
//     }),
//     placeholder: (base: any) => ({
//       ...base,
//       color: "#121417",
//       fontSize: "18px",
//     }),
//     singleValue: (base: any) => ({
//       ...base,
//       color: "#121417",
//       fontSize: "18px",
//     }),
//     indicatorSeparator: () => ({ display: "none" }),
//     menu: (base: any) => ({
//       ...base,
//       borderRadius: "14px",
//       padding: "14px",
//       marginTop: "4px",
//     }),
//     option: (base: any, state: any) => ({
//       ...base,
//       backgroundColor: "transparent",
//       color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
//       cursor: "pointer",
//       fontSize: "16px",
//     }),
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({
//       brand: brand?.value,
//       price: price?.value,
//       minMileage,
//       maxMileage,
//     });
//   };

//   return (
//     <form className={css.filterForm} onSubmit={handleSearch}>
//       <div
//         className={css.inputGroup}
//       >
//         <label className={css.label}>Car brand</label>
//         <Select
//           options={BRANDS}
//           placeholder="Choose a brand"
//           styles={selectStyles}
//           components={{ DropdownIndicator }}
//           onChange={setBrand}
//           value={brand}
//         />
//       </div>

//       <div className={css.inputGroup}>
//         <label className={css.label}>Price/ 1 hour</label>
//         <Select
//           options={PRICES}
//           placeholder="Choose a price"
//           styles={selectStyles}
//           components={{ DropdownIndicator }}
//           onChange={setPrice}
//           value={price}
//         />
//       </div>

//       <div className={css.inputGroup}>
//         <label className={css.label}>Car mileage / km</label>
//         <div className={css.mileageInputs}>
//           <div className={css.mileageWrapper}>
//             <span className={css.inputLabel}>From</span>
//             <input
//               type="text"
//               className={css.inputLeft}
//               value={minMileage}
//               onChange={(e) => setMinMileage(e.target.value)}
//             />
//           </div>
//           <div className={css.mileageWrapper}>
//             <span className={css.inputLabel}>To</span>
//             <input
//               type="text"
//               className={css.inputRight}
//               value={maxMileage}
//               onChange={(e) => setMaxMileage(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <button type="submit" className={css.searchButton}>
//         Search
//       </button>
//     </form>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import css from "./Filtre.module.css";
import { useCarsStore } from "@/store/useCarsStore";

const CustomChevron = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    style={{
      transition: "transform 0.2s",
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      marginRight: "14px",
    }}
  >
    <path
      d="M1 1L7 7L13 1"
      stroke="#121417"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DropdownIndicator = (props: DropdownIndicatorProps<any, false>) => {
  return (
    <components.DropdownIndicator {...props}>
      <CustomChevron isOpen={props.selectProps.menuIsOpen} />
    </components.DropdownIndicator>
  );
};

export default function Filtre() {
  const { brands, prices, fetchFilters } = useCarsStore();

  const [brand, setBrand] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetchFilters();
  }, [fetchFilters]);

  const selectStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#F7F7FB",
      border: "none",
      borderRadius: "14px",
      height: "48px",
      boxShadow: "none",
      cursor: "pointer",
    }),
    placeholder: (base: any) => ({
      ...base,
      color: "#121417",
      fontSize: "18px",
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "#121417",
      fontSize: "18px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (base: any) => ({
      ...base,
      borderRadius: "14px",
      padding: "14px",
      marginTop: "4px",
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: "transparent",
      color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
      cursor: "pointer",
      fontSize: "16px",
    }),
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      brand: brand?.value,
      price: price?.value,
      minMileage,
      maxMileage,
    });
  };

  const brandOptions = brands.map((b) => ({ value: b, label: b }));
  const priceOptions = prices.map((p) => ({ value: p, label: p }));

  if (!isMounted) return null;

  return (
    <form className={css.filterForm} onSubmit={handleSearch}>
      <div className={css.inputGroup}>
        <label className={css.label}>Car brand</label>
        <Select
          instanceId="brand-select"
          options={brandOptions}
          placeholder="Choose a brand"
          styles={selectStyles}
          components={{ DropdownIndicator }}
          onChange={setBrand}
          value={brand}
        />
      </div>

      <div className={css.inputGroup}>
        <label className={css.label}>Price/ 1 hour</label>
        <Select
          instanceId="price-select"
          options={priceOptions}
          placeholder="Choose a price"
          styles={selectStyles}
          components={{ DropdownIndicator }}
          onChange={setPrice}
          value={price}
        />
      </div>

      <div className={css.inputGroup}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.mileageInputs}>
          <div className={css.mileageWrapper}>
            <span className={css.inputLabel}>From</span>
            <input
              type="text"
              className={css.inputLeft}
              value={minMileage}
              onChange={(e) => setMinMileage(e.target.value)}
            />
          </div>
          <div className={css.mileageWrapper}>
            <span className={css.inputLabel}>To</span>
            <input
              type="text"
              className={css.inputRight}
              value={maxMileage}
              onChange={(e) => setMaxMileage(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
}
