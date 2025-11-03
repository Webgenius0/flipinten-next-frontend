

export default function useOverviewRecentTransactionsQuery() {
  const transactions = [
    {
      id: 1,
      description: "Account deposit via stripe",
      amount: "+$5,000.00",
      status: "Completed",
      time: "5 hours ago",
    },
    {
      id: 2,
      description: "Account deposit via stripe",
      amount: "+$5,000.00",
      status: "Completed",
      time: "5 hours ago",
    },
    {
      id: 3,
      description: "Account deposit via stripe",
      amount: "+$5,000.00",
      status: "Completed",
      time: "5 hours ago",
    },
    {
      id: 4,
      description: "Account deposit via stripe",
      amount: "+$5,000.00",
      status: "Completed",
      time: "5 hours ago",
    },
  ];
  return transactions;
}
