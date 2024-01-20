import { createContext, useReducer } from "react";

interface IExpenses {
  id?: string;
  description: string;
  amount: number;
  date?: Date;
}

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (data: IExpenses) => {},
  setExpenses: (expenses: Array<any>) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, data: IExpenses) => {},
});

const expensesReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "Add":
      return [action.payload, ...state];
    case "Set":
      const reverseExpensesList = action.payload.reverse();
      return reverseExpensesList;
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
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expensesData: IExpenses) => {
    dispatch({ type: "Add", payload: expensesData });
  };

  const setExpenses = (expensesData: Array<any>) => {
    dispatch({ type: "Set", payload: expensesData });
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
    setExpenses: setExpenses,
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
