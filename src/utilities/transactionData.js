export const generateTransactionData = () => {
    const customers = ['Deven', 'Poornima', 'Pawel', 'Daria', 'Nilesh'];
    const transactions = [];
  
    for (let i = 0; i < 100; i++) {
      const customerId = customers[Math.floor(Math.random() * customers.length)];
      const purchaseAmount = Math.floor(Math.random() * 200) + 1; // Random amount between 1 and 200
      const transactionDate = new Date(2023, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28) + 1); // Random date within 3 months
  
      transactions.push({
        customerId,
        purchaseAmount,
        transactionDate,
      });
    }
  
    return transactions;
  };