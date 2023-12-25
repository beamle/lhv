import { combineReducers, legacy_createStore as createStore } from "redux";
import { calculatorReducer } from "@/view/sections/calculator/reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
