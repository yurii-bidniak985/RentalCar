module.exports = [
"[project]/Desktop/project/RentalCar/store/useCarsStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarsStore",
    ()=>useCarsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useCarsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        cars: [],
        favorites: [],
        isLoading: false,
        error: null,
        // Логіка додавання/видалення з обраного
        toggleFavorite: (carId)=>set((state)=>({
                    favorites: state.favorites.includes(carId) ? state.favorites.filter((id)=>id !== carId) // Видаляємо, якщо вже є
                     : [
                        ...state.favorites,
                        carId
                    ]
                })),
        setCars: (cars)=>set({
                cars
            }),
        setLoading: (status)=>set({
                isLoading: status
            })
    }), {
    name: "rental-cars-storage",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    // Зберігаємо ТІЛЬКИ список обраних, щоб не кешувати весь каталог
    partialize: (state)=>({
            favorites: state.favorites
        })
}));
}),
"[project]/Desktop/project/RentalCar/components/CarCard/CarCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accent": "CarCard-module__AvzbIa__accent",
  "btn": "CarCard-module__AvzbIa__btn",
  "card": "CarCard-module__AvzbIa__card",
  "content": "CarCard-module__AvzbIa__content",
  "header": "CarCard-module__AvzbIa__header",
  "image": "CarCard-module__AvzbIa__image",
  "price": "CarCard-module__AvzbIa__price",
  "tags": "CarCard-module__AvzbIa__tags",
  "thumb": "CarCard-module__AvzbIa__thumb",
  "title": "CarCard-module__AvzbIa__title",
});
}),
"[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/store/useCarsStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/components/CarCard/CarCard.module.css [app-ssr] (css module)");
;
;
;
;
function CarCard({ car }) {
    // Підключаємо логіку обраного зі стору
    const favorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarsStore"])((state)=>state.favorites);
    const toggleFavorite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarsStore"])((state)=>state.toggleFavorite);
    // Перевіряємо, чи ця машина в списку обраних
    const isFavorite = favorites.includes(car.id);
    // Форматуємо адресу (Місто | Країна)
    const addressParts = car.address.split(",");
    const city = addressParts[1]?.trim();
    const country = addressParts[2]?.trim();
    // Форматуємо пробіг: 5000 -> 5 000 за вимогою ТЗ
    const formattedMileage = car.mileage.toLocaleString("ru-RU");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].thumb,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: car.img,
                        alt: `${car.brand} ${car.model}`,
                        fill: true,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].image,
                        sizes: "300px",
                        priority: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heartBtn,
                        onClick: ()=>toggleFavorite(car.id),
                        type: "button",
                        "aria-label": "Add to favorite",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            className: isFavorite ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heartActive : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heartInactive,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                                href: "#Like"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    car.brand,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].accent,
                                        children: car.model
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this),
                                    ",",
                                    " ",
                                    car.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                children: [
                                    "$",
                                    car.rentalPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tags,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: city
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: country
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.rentalCompany
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.type
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    formattedMileage,
                                    " km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: car.accessories[0]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btn,
                        children: "Learn more"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/project/RentalCar/app/catalog/Catalog.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Catalog-module__KhAaVa__container",
  "grid": "Catalog-module__KhAaVa__grid",
});
}),
"[project]/Desktop/project/RentalCar/app/catalog/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/store/useCarsStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/components/CarCard/CarCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/project/RentalCar/app/catalog/Catalog.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function CatalogPage() {
    // Використовуємо правильну назву 'cars' замість 'items'
    const cars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarsStore"])((state)=>state.cars);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$store$2f$useCarsStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarsStore"])((state)=>state.isLoading);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loader,
                children: "Loading cars..."
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 14,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: cars?.map((car)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$components$2f$CarCard$2f$CarCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        car: car
                    }, car.id, false, {
                        fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            !isLoading && cars?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$project$2f$RentalCar$2f$app$2f$catalog$2f$Catalog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                children: "Машини не знайдені. Перевірте API."
            }, void 0, false, {
                fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/project/RentalCar/app/catalog/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_project_RentalCar_14a6edb1._.js.map