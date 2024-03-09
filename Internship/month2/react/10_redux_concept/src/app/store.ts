import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';

import foodReducer from '../redux/foodSlice';
import cartReducer from '../redux/cartSlice';
import brandReducer from '../redux/brandSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    food: foodReducer,
    cart: cartReducer,
    brand: brandReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware and other store enhancers can be added here
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {food: FoodState, cart: CartState, brand: BrandState}
export type AppDispatch = typeof store.dispatch;
