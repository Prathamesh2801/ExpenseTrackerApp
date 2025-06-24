import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop:24,
    paddingBottom:0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  }
});
