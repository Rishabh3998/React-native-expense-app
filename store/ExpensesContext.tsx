import { createContext, useReducer } from "react";
import { DUMMY_DATA } from "../data/data";

interface IExpenses {
  id?: string;
  description: string;
  amount: number;
  date?: Date;
}

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (data: IExpenses) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, data: IExpenses) => {},
});

const expensesReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "Add":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "Update":
      const updatingItemIndex = state.findIndex(
        (exp: any) => exp.id === action.payload.id
      );
      const updatableItem = state[updatingItemIndex];
      const updatedItem = { ...updatableItem, ...action.payload.expensesData };
      return [
        { ...updatedItem },
        ...state?.filter((item: any) => item.id !== action.payload.id),
      ];
    case "Delete":
      return state.filter((item: any) => item.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }: any) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_DATA);

  const addExpense = (expensesData: IExpenses) => {
    dispatch({ type: "Add", payload: expensesData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: "Delete", payload: id });
  };

  const updateExpense = (id: string, expensesData: IExpenses) => {
    dispatch({ type: "Update", payload: { id, expensesData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
