
import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 899,
    date: new Date("2025-06-04"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 1300,
    date: new Date("2025-05-21"),
  },
  {
    id: "e3",
    description: "Some Fruits",
    amount: 340,
    date: new Date("2025-04-10"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 5040,
    date: new Date("2025-04-16"),
  },
  {
    id: "e5",
    description: "Another Book",
    amount: 3040,
    date: new Date("2025-04-20"),
  },
  {
    id: "e6",
    description: "Some Fruits",
    amount: 340,
    date: new Date("2025-04-10"),
  },
  {
    id: "e7",
    description: "A Book",
    amount: 5040,
    date: new Date("2025-04-16"),
  },
  {
    id: "e8",
    description: "Another Book",
    amount: 3040,
    date: new Date("2025-04-20"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: ({ id }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
function ExpensesContextProvider({ children }) {
  const [expenseSstate, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseSstate,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
