import axios from "axios";

const BASE_URL =
  "https://expense-tracker-react-na-8b0b4-default-rtdb.firebaseio.com";

export const useCreateExpense = async (expenseData: any) => {
  const response: any = axios.post(
    `${BASE_URL}/expenses.json`,
    expenseData,
    {}
  );
  const id = response?.data?.name;
  return id;
};

export const useGetExpenses = async () => {
  const response = await axios.get(`${BASE_URL}/expenses.json`);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const useUpdateExpense = async (id: string, expenseData: any) => {
  return await axios.put(`${BASE_URL}/expense${id}.json`, expenseData);
};

export const useDeleteExpense = async (id: string) => {
  return await axios.delete(`${BASE_URL}/expense${id}.json`);
};
