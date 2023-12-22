type InitialStateType = {
  items: CalculatorItemType[];
};

const initialState: InitialStateType = {
  items: [],
};
export const calculatorReducer = (
  state = initialState,
  action: ActionsType,
) => {
  switch (action.type) {
    // case "CALC/ADD-ITEM":
    //   return { ...state, items: [...state.items, action.item] };
    // case "CALC/ADD-ITEM-PRICE":
    //   debugger;
    //   return {
    //     ...state,
    //     items: [
    //       state.items.find((item) =>
    //         item.id === action.item.id
    //           ? { ...item, price: action.item.price }
    //           : item.price,
    //       ),
    //     ],
    //   };
    case "CALC/ADD-ITEM-PRICE": {
      const existingItem = state.items.find(
        (item) => item.id === action.item.id,
      );
      if (existingItem) {
        // If the item with the provided id exists, update its price
        const updatedItems = state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, price: action.item.price }
            : item,
        );

        return { ...state, items: updatedItems };
      } else {
        // If the item with the provided id doesn't exist, create a new item
        return {
          ...state,
          items: [
            ...state.items,
            { id: action.item.id, price: action.item.price },
          ],
        };
      }
    }
    case "CALC/REMOVE-ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.itemId),
      };
    }

    default:
      return { ...state };
  }
};

export const addItem = (item: CalculatorItemType) =>
  ({ type: "CALC/ADD-ITEM", item }) as const;
export const addItemsPrice = (item: CalculatorItemType) =>
  ({ type: "CALC/ADD-ITEM-PRICE", item }) as const;
export const removeItem = (itemId: string) =>
  ({ type: "CALC/REMOVE-ITEM", itemId }) as const;

export type AddItemAT = ReturnType<typeof addItem>;
export type AddItemPriceAT = ReturnType<typeof addItemsPrice>;
export type RemoveItemAT = ReturnType<typeof removeItem>;

type ActionsType = AddItemAT | AddItemPriceAT | RemoveItemAT;

export type CalculatorItemType = {
  id: string;
  price: number;
};
