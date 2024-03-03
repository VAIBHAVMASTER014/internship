import { createSlice } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const dummy_data = [
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

const foodData = dummy_data.map((food, index) => {
  return {
    id: index,
    image: food.image,
    title: food.title,
    description: food.description,
    time: food.time,
    price: food.price,
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
      state.food = foodData.filter(food=>{
        return food.category === action.payload
      })
      state.status = "success";
    },
  },
});

// all exports
export const { fetchFoodByCategory } = foodSlice.actions;
export const food = (state: RootState) => state.food;
export default foodSlice.reducer;

// menu_page: {
//   brand: [
//     {
//       image: "Ellipse 1.png",
//       title: "La Pino'z",
//     },
//     {
//       image: "Ellipse 3.png",
//       title: "Mc Donalds",
//     },
//     {
//       image: "Ellipse 4.png",
//       title: "StarBucks",
//     },
//     {
//       image: "Ellipse 1.png",
//       title: "KFC",
//     },
//     {
//       image: "Ellipse 5.png",
//       title: "Burger King",
//     },
//     {
//       image: "Ellipse 4.png",
//       title: "Coffee Culture",
//     },
//   ],
//   food: [
//     {
//       image: "Rectangle 15.png",
//       title: "Vadapav",
//       time: "30 Min",
//     },
//     {
//       image: "Rectangle 16.png",
//       title: "Panipuri",
//       time: "30 Min",
//     },
//     {
//       image: "Rectangle 17.png",
//       title: "PavBhaji",
//       time: "30 Min",
//     },
//     {
//       image: "Rectangle 18.png",
//       title: "IceCream",
//       time: "30 Min",
//     },
//     {
//       image: "Rectangle 19.png",
//       title: "Sandwich",
//       time: "30 Min",
//     },
//     {
//       image: "Rectangle 20.png",
//       title: "Pizza",
//       time: "30 Min",
//     },
//   ],
//   list: [
//     {
//       image: "Rectangle 21.png",
//       title: "Veggie friendly",
//       description: "29 Places Near You",
//     },
//     {
//       image: "Rectangle 23.png",
//       title: "Trending this week",
//       description: "29 Places Near You",
//     },
//     {
//       image: "Rectangle 25.png",
//       title: "Authentic",
//       description: "29 Places Near You",
//     },
//   ],
// },
// selected_brand: [
//   {
//     image: "Rectangle 14.png",
//     title: "Margherita Pizza",
//     description: "A Classic Cheesy Margharita. Can't Go Wrong.",
//     price: "179",
//   },
//   {
//     image: "Rectangle 15(1).png",
//     title: "Double Cheese pizza",
//     description: "A Classic Cheesy Margharita. Can't Go Wrong.",
//     price: "179",
//   },
//   {
//     image: "Rectangle 16(1).png",
//     title: "Garden delight",
//     description: "A Classic Cheesy Margharita. Can't Go Wrong.",
//     price: "179",
//   },
//   {
//     image: "Rectangle 33.png",
//     title: "Paneer Pizza",
//     description: "A Classic Cheesy Margharita. Can't Go Wrong.",
//     price: "179",
//   },
//   {
//     image: "Rectangle 14.png",
//     title: "7 cheesy Pizza",
//     description: "A Classic Cheesy Margharita. Can't Go Wrong.",
//     price: "179",
//   },
// ],

// url for api
// const options = {
//   method: "GET",
//   url: "https://pizza-and-desserts.p.rapidapi.com/pizzas",
//   headers: {
//     "X-RapidAPI-Key": "202e83a0d6msh9a99d4927d2b0d8p1691b0jsn99bea2f39837",
//     "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
//   },
// };

// // fetching data using thunk
// export const fetchAllPizza = createAsyncThunk("fetchAllPizza", async () => {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });
