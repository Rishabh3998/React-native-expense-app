import axios from "axios";

export const useCreateExpense = (expenseData: any) => {
  axios.post(
    "https://expense-tracker-react-na-8b0b4-default-rtdb.firebaseio.com/expenses.json",
    expenseData,
    {}
  );
};
