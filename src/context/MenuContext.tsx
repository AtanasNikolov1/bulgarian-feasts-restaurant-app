import { createContext, useContext, useEffect, useReducer } from "react";
import {
  fetchFilteredMenuItems,
  fetchMenuItems,
} from "../services/menuService";

const MenuContext = createContext();

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
  category: null,
  price: null,
  rating: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU_ITEMS":
      return { ...state, menuItems: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const filterItems = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      if (
        state.category === null &&
        state.price === null &&
        state.rating === null
      ) {
        const { data, error } = await fetchMenuItems();
        if (error) {
          dispatch({ type: "SET_ERROR", payload: error });
        } else {
          dispatch({ type: "SET_MENU_ITEMS", payload: data });
        }
      } else {
        const { data, error } = await fetchFilteredMenuItems(
          state.category,
          state.price,
          state.rating,
        );

        if (error) {
          dispatch({ type: "SET_ERROR", payload: error });
        } else {
          dispatch({ type: "SET_MENU_ITEMS", payload: data });
        }
      }
      dispatch({ type: "SET_LOADING", payload: false });
    };

    filterItems();
  }, [state.category, state.price, state.rating]);

  useEffect(() => {
    const loadMenuItems = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data, error } = await fetchMenuItems();
      if (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      } else {
        dispatch({ type: "SET_MENU_ITEMS", payload: data });
      }
      dispatch({ type: "SET_LOADING", payload: false });
    };

    loadMenuItems();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        ...state,
        setCategory: (category) =>
          dispatch({ type: "SET_CATEGORY", payload: category }),
        setPrice: (price) => dispatch({ type: "SET_PRICE", payload: price }),
        setRating: (rating) =>
          dispatch({ type: "SET_RATING", payload: rating }),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { MenuProvider, useMenu };
