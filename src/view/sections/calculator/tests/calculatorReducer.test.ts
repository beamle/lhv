import {
  addItemsPrice,
  calculatorReducer,
  InitialStateType,
} from "@/view/sections/calculator/reducer/calculatorReducer";

describe("calculatorReducer", () => {
  const startState: InitialStateType = {
    items: [],
  };
  test("should add items to the state", () => {
    const action = addItemsPrice({ id: "1111", price: 1000 });
    const endState = calculatorReducer(startState, action);

    expect(endState.items).toHaveLength(1);
    expect(endState.items[0].id).toBe("1111");
    expect(endState.items[0].price).toBe(1000);
  });

  test("should handle multiple items", () => {
    const initialState: InitialStateType = {
      items: [{ id: "existingItem", price: 500 }],
    };
    const action = addItemsPrice({ id: "newItem", price: 800 });
    const endState = calculatorReducer(initialState, action);

    expect(endState.items).toHaveLength(2);
    expect(endState.items[1].id).toBe("newItem");
    expect(endState.items[1].price).toBe(800);

    expect(endState.items[0].id).toBe("existingItem");
    expect(endState.items[0].price).toBe(500);
  });

  test("should return previous state if action items is invalid", () => {
    const invalidAction: any = { payload: { id: "invalidItem", price: 200 } };

    const endState = calculatorReducer(startState, invalidAction);

    expect(endState).toEqual(startState);
  });
});
