(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/project/RentalCar/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time value", "https://car-rental-api.goit.global");
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/RentalCar/store/useCarsStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarsStore",
    ()=>useCarsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/lib/api.ts [app-client] (ecmascript)");
;
;
const useCarsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        items: [],
        brands: [],
        prices: [],
        isLoading: false,
        fetchCars: async ()=>{
            set({
                isLoading: true
            });
            try {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cars");
                set({
                    items: data.cars || []
                });
            } catch (error) {
                console.error("Ошибка при получении машин:", error);
            } finally{
                set({
                    isLoading: false
                });
            }
        },
        fetchFilters: async ()=>{
            try {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cars");
                const carsArray = data.cars || [];
                if (carsArray.length === 0) return;
                const uniqueBrands = Array.from(new Set(carsArray.map((car)=>car.brand))).sort();
                const uniquePrices = Array.from(new Set(carsArray.map((car)=>parseInt(car.rentalPrice.replace(/[^\d]/g, ""))))).sort((a, b)=>a - b).map(String);
                set({
                    brands: uniqueBrands,
                    prices: uniquePrices
                });
            } catch (error) {
                console.error("Ошибка фильтров:", error);
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/RentalCar/components/Filtre/Filtre.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "filterForm": "Filtre-module__Po7iVG__filterForm",
  "inputLabel": "Filtre-module__Po7iVG__inputLabel",
  "inputLeft": "Filtre-module__Po7iVG__inputLeft",
  "inputRight": "Filtre-module__Po7iVG__inputRight",
  "label": "Filtre-module__Po7iVG__label",
  "mileageInputs": "Filtre-module__Po7iVG__mileageInputs",
  "mileageWrapper": "Filtre-module__Po7iVG__mileageWrapper",
  "searchButton": "Filtre-module__Po7iVG__searchButton",
  "select": "Filtre-module__Po7iVG__select",
});
}),
"[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Filtre
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$index$2d$641ee5b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__components$3e$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/react-select/dist/index-641ee5b8.esm.js [app-client] (ecmascript) <export c as components>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/components/Filtre/Filtre.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/store/useCarsStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
const CustomChevron = ({ isOpen })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "8",
        viewBox: "0 0 14 8",
        fill: "none",
        style: {
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            marginRight: "14px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1L7 7L13 1",
            stroke: "#121417",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
            lineNumber: 176,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
        lineNumber: 165,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CustomChevron;
const DropdownIndicator = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$index$2d$641ee5b8$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__components$3e$__["components"].DropdownIndicator, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomChevron, {
            isOpen: props.selectProps.menuIsOpen
        }, void 0, false, {
            fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = DropdownIndicator;
function Filtre() {
    _s();
    const { brands, prices, fetchFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarsStore"])();
    const [brand, setBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [minMileage, setMinMileage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maxMileage, setMaxMileage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Filtre.useEffect": ()=>{
            setIsMounted(true);
            fetchFilters();
        }
    }["Filtre.useEffect"], [
        fetchFilters
    ]);
    const selectStyles = {
        control: (base)=>({
                ...base,
                backgroundColor: "#F7F7FB",
                border: "none",
                borderRadius: "14px",
                height: "48px",
                boxShadow: "none",
                cursor: "pointer"
            }),
        placeholder: (base)=>({
                ...base,
                color: "#121417",
                fontSize: "18px"
            }),
        singleValue: (base)=>({
                ...base,
                color: "#121417",
                fontSize: "18px"
            }),
        indicatorSeparator: ()=>({
                display: "none"
            }),
        menu: (base)=>({
                ...base,
                borderRadius: "14px",
                padding: "14px",
                marginTop: "4px"
            }),
        option: (base, state)=>({
                ...base,
                backgroundColor: "transparent",
                color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
                cursor: "pointer",
                fontSize: "16px"
            })
    };
    const handleSearch = (e)=>{
        e.preventDefault();
        console.log({
            brand: brand?.value,
            price: price?.value,
            minMileage,
            maxMileage
        });
    };
    const brandOptions = brands.map((b)=>({
            value: b,
            label: b
        }));
    const priceOptions = prices.map((p)=>({
            value: p,
            label: p
        }));
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterForm,
        onSubmit: handleSearch,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "Car brand"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        instanceId: "brand-select",
                        options: brandOptions,
                        placeholder: "Choose a brand",
                        styles: selectStyles,
                        components: {
                            DropdownIndicator
                        },
                        onChange: setBrand,
                        value: brand
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "Price/ 1 hour"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        instanceId: "price-select",
                        options: priceOptions,
                        placeholder: "Choose a price",
                        styles: selectStyles,
                        components: {
                            DropdownIndicator
                        },
                        onChange: setPrice,
                        value: price
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: "Car mileage / km"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mileageInputs,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mileageWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputLabel,
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputLeft,
                                        value: minMileage,
                                        onChange: (e)=>setMinMileage(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mileageWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputLabel,
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputRight,
                                        value: maxMileage,
                                        onChange: (e)=>setMaxMileage(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchButton,
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s(Filtre, "/0xLO0jq3B/4AchPlop3vFqaaWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarsStore"]
    ];
});
_c2 = Filtre;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CustomChevron");
__turbopack_context__.k.register(_c1, "DropdownIndicator");
__turbopack_context__.k.register(_c2, "Filtre");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/RentalCar/components/CarCard/CarCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accent": "CarCard-module__AvzbIa__accent",
  "btn": "CarCard-module__AvzbIa__btn",
  "card": "CarCard-module__AvzbIa__card",
  "content": "CarCard-module__AvzbIa__content",
  "favorite": "CarCard-module__AvzbIa__favorite",
  "header": "CarCard-module__AvzbIa__header",
  "image": "CarCard-module__AvzbIa__image",
  "price": "CarCard-module__AvzbIa__price",
  "tags": "CarCard-module__AvzbIa__tags",
  "thumb": "CarCard-module__AvzbIa__thumb",
  "title": "CarCard-module__AvzbIa__title",
});
}),
"[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/components/CarCard/CarCard.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const LikeSvg = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 16,
        height: 16,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
            href: "/logoSvg.svg#Like"
        }, void 0, false, {
            fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LikeSvg;
const LikeSvgActive = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 16,
        height: 16,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
            href: "/logoSvg.svg#Like-blue"
        }, void 0, false, {
            fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = LikeSvgActive;
function CarCard({ car }) {
    _s();
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addressParts = car.address.split(",");
    const city = addressParts[1]?.trim();
    const country = addressParts[2]?.trim();
    const toggleFavorite = ()=>{
        setIsFavorite((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: car.img,
                        alt: `${car.brand} ${car.model}`,
                        fill: true,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favorite,
                        "aria-label": "Add to favorites",
                        onClick: toggleFavorite,
                        children: isFavorite ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LikeSvgActive, {}, void 0, false, {
                            fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LikeSvg, {}, void 0, false, {
                            fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                            lineNumber: 47,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    car.brand,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accent,
                                        children: car.model
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this),
                                    ",",
                                    " ",
                                    car.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                children: [
                                    "$",
                                    car.rentalPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: city
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: country
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.rentalCompany
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.type
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    car.mileage.toLocaleString(),
                                    " km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.accessories[0]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                        children: "Learn more"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(CarCard, "k950Z1JpPS3WYtE75BCawi6VGEM=");
_c2 = CarCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LikeSvg");
__turbopack_context__.k.register(_c1, "LikeSvgActive");
__turbopack_context__.k.register(_c2, "CarCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/project/RentalCar/app/catalog/Catalog.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Catalog-module__KhAaVa__container",
  "grid": "Catalog-module__KhAaVa__grid",
});
}),
"[project]/Desktop/project/RentalCar/app/catalog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/store/useCarsStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/components/Filtre/Filtre.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/app/catalog/Catalog.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CatalogPage() {
    _s();
    const { items, isLoading, fetchCars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarsStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CatalogPage.useEffect": ()=>{
            fetchCars();
        }
    }["CatalogPage.useEffect"], [
        fetchCars
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$Filtre$2f$Filtre$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loader,
                children: "Loading cars..."
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 19,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: items.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        car: car
                    }, car.id, false, {
                        fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            !isLoading && items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                children: "Машины не найдены. Проверьте API."
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(CatalogPage, "dtbzSyLvNZ6konoRUMIo5pRHd00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarsStore"]
    ];
});
_c = CatalogPage;
var _c;
__turbopack_context__.k.register(_c, "CatalogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_project_RentalCar_7888695f._.js.map