import { generateTransactionData } from "../utilities/transactionData";

export const fetchTransactions = () => {
    return new Promise((resolve) => {
      // Simulating API request delay with setTimeout
      setTimeout(() => {
        const transactions = generateTransactionData();
        resolve(transactions);
      }, 3000);
    });
  };