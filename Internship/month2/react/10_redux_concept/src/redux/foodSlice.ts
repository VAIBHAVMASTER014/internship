import { createSlice } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const dummy_data = [
  {
    image: "garlic.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "garlic-bread",
  },
  {
    image: "garlic2.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "garlic-bread",
  },
  {
    image: "lasagne.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "lasagne",
  },
  {
    image: "lasagne2.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "shake",
  },
  {
    image: "coldcoffe.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "cold-coffee",
  },
  {
    image: "hotCoffee.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "hot-coffee",
  },
  {
    image: "tea.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "tea",
  },
  {
    image: "wrap.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "wrap",
  },
  {
    image: "burrito.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burrito",
  },
  {
    image: "taco.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "taco",
  },
  {
    image: "pizza-386717_640.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "pizza",
  },
  {
    image: "pizza-3007395_640.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "pizza",
  },
  {
    image: "pizza-5275191_640.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "pizza",
  },
  {
    image: "plate-2802332_640.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "pizza",
  },
  {
    image: "plate-2802332_1280.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "pizza",
  },
  {
    image: "pizza-3007395_640.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "pizza",
  },
  {
    image: "pexels-jonathan-borba-3009323.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "sides",
  },
  {
    image: "pexels-rachel-claire-5863638.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "sides",
  },
  {
    image: "pexels-rachel-claire-6126979.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "sides",
  },
  {
    image: "pexels-senuscape-2313682.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "sides",
  },
  {
    image: "pexels-valeria-boltneva-1893555.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "sides",
  },
  {
    image: "pexels-senuscape-2313682.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "sides",
  },
  {
    image: "pexels-antonio-friedemann-11118926.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "drinks",
  },
  {
    image: "pexels-on-shot-2789328.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "drinks",
  },
  {
    image: "pexels-this-is-zun-1148215.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "drinks",
  },
  {
    image: "pexels-on-shot-2789328.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "drinks",
  },
  {
    image: "pexels-this-is-zun-1148215.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "drinks",
  },
  {
    image: "pexels-antonio-friedemann-11118926.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "drinks",
  },
  {
    image: "pexels-foodie-factor-551991.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burger",
  },
  {
    image: "pexels-lucas-andrade-12431639.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burger",
  },
  {
    image: "pexels-vincent-ma-janssen-2796841.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burger",
  },
  {
    image: "pexels-vincent-ma-janssen-2796841.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burger",
  },
  {
    image: "pexels-foodie-factor-551991.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burger",
  },
  {
    image: "pexels-vincent-ma-janssen-2796841.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "burger",
  },
  {
    image: "pexels-abby-chung-998238.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "dessert",
  },
  {
    image: "pexels-ash-376464.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "dessert",
  },
  {
    image: "pexels-donald-tong-2205270.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "dessert",
  },
  {
    image: "pexels-ella-olsson-3026810.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "dessert",
  },
  {
    image: "pexels-quang-nguyen-vinh-2144112.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "dessert",
  },
  {
    image: "pexels-ella-olsson-3026810.jpg",
    title: "Eatalian Pizza",
    description: "Dough, Mozzarella, Cheddar, Blue, Parmesan",
    time: "32mins",
    price: "179",
    category: "dessert",
  },
];

export const foodData = dummy_data.map((food, index) => {
  return {
    id: index,
    image: food.image,
    title: food.title,
    description: food.description,
    time: food.time,
    price: food.price,
    quantity: 0,
    category: food.category,
  };
});

const initialState = {
  food: foodData,
  status: "idle",
  error: null,
};

// creating foodslice
const foodSlice = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {
    fetchFoodByCategory: (state, action) => {
      state.food = foodData.filter((food) => {
        return food.category === action.payload;
      });
      state.status = "success";
    },
  },
});

// all exports
export const { fetchFoodByCategory } = foodSlice.actions;
export const food = (state: RootState) => state.food;
export default foodSlice.reducer;

