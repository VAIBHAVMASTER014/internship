import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { foodData } from "./foodSlice";

const BrandLogoData = [
  {
    image: "Ellipse 1 copy.png",
    availableCategory: [
      { Pizzas: "pizza" },
      { "Garlic Bread": "garlic-bread" },
      { Lasagne: "lasagne" },
      { Dessert: "dessert" },
    ],
    brandtitle: "La Pino'z Pizza",
    data: foodData.filter((data) => {
      return (
        data.category === "pizza" ||
        data.category === "garlic-bread" ||
        data.category === "lasagne" ||
        data.category === "dessert"
      );
    }),
  },
  {
    image: "Ellipse 3 copy.png",
    availableCategory: [
      { "Cold Coffee": "cold-coffee" },
      { "Hot Coffee": "hot-coffee" },
      { Shakes: "shake" },
      { Sides: "sides" },
      { Tea: "tea" },
    ],
    brandtitle: "Starbucks",
    data: foodData.filter(
      (data) =>
        data.category === "cold-coffee" ||
        data.category === "hot-coffee" ||
        data.category === "shake" ||
        data.category === "sides" ||
        data.category === "tea"
    ),
  },
  {
    image: "Ellipse 4.png",
    availableCategory: [
      { Burgers: "burger" },
      { Wraps: "wrap" },
      { Drinks: "drinks" },
    ],
    brandtitle: "KFC",
    data: foodData.filter(
      (data) =>
        data.category === "burger" ||
        data.category === "wrap" ||
        data.category === "drinks"
    ),
  },
  {
    image: "Ellipse 5.png",
    availableCategory: [
      { Burritos: "burrito" },
      { Tacos: "taco" },
      { Drinks: "drinks" },
    ],
    brandtitle: "Chipotle",
    data: foodData.filter(
      (data) =>
        data.category === "burrito" ||
        data.category === "taco" ||
        data.category === "drinks"
    ),
  },
  {
    image: "Ellipse 3 copy.png",
    availableCategory: [
      { "Cold Coffee": "cold-coffee" },
      { "Hot Coffee": "hot-coffee" },
      { Shakes: "shake" },
      { Sides: "sides" },
      { Tea: "tea" },
    ],
    brandtitle: "Starbucks",
    data: foodData.filter(
      (data) =>
        data.category === "cold-coffee" ||
        data.category === "hot-coffee" ||
        data.category === "shake" ||
        data.category === "sides" ||
        data.category === "tea"
    ),
  },
  {
    image: "Ellipse 1 copy.png",
    availableCategory: [
      { Pizzas: "pizza" },
      { "Garlic Bread": "garlic-bread" },
      { Lasagne: "lasagne" },
      { Dessert: "dessert" },
    ],
    brandtitle: "La Pino'z Pizza",
    data: foodData.filter((data) => {
      return (
        data.category === "pizza" ||
        data.category === "garlic-bread" ||
        data.category === "lasagne" ||
        data.category === "dessert"
      );
    }),
  },
];

interface BrandLogoDataType {
  image: string;
  availableCategory: object[];
  brandtitle: string;
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    time: string;
    price: string;
    quantity: number;
    category: string;
  }[];
}

interface BrandState {
  BrandState: BrandLogoDataType | undefined;
  filteredState: BrandLogoDataType | undefined;
  allData: BrandLogoDataType[];
  filteredDataLength: number;
  selectedCategory: string;
}

const initialState: BrandState = {
  BrandState: undefined,
  filteredState: undefined,
  allData: BrandLogoData,
  filteredDataLength: 0,
  selectedCategory: "Recommended",
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    redirectToBrand: (state, action) => {
      let BrandData = state.allData.find((brandData) => {
        return brandData.data.find(
          (subdata) => subdata.id === action.payload.id
        );
      });
      state.BrandState = BrandData;
      state.filteredState = BrandData;
    },

    brandDataFilterbyTitle: (state, action) => {
      const brandItem = state.allData.find(
        (data) => data.brandtitle === action.payload
      );
      state.BrandState = brandItem;
      state.filteredState = brandItem;
      state.filteredDataLength = state.filteredState?.data.length || 0;
    },
    fetchDataByCategory: (state, action) => {
      if (action.payload === "allData") {
        state.filteredState = state.BrandState;
      } else if (state.filteredState !== undefined) {
        const value = { ...Object.values(action.payload) };

        const brandItem = state.BrandState?.data.filter(
          (data) => data.category === value[0]
        );
        state.filteredState.data = brandItem || state.filteredState.data;
        state.filteredDataLength = state.filteredState?.data.length || 0;
      }
    },
  },
});

export default brandSlice.reducer;
export const { brandDataFilterbyTitle, fetchDataByCategory, redirectToBrand } =
  brandSlice.actions;
export const brandData = (state: RootState) => state.food;
