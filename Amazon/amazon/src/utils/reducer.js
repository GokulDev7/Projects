export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Empty_Basket":
      return {
        ...state,
        basket: []
      };
    case "Remove_From_Basket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove the product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
  }
};
export default reducer;
