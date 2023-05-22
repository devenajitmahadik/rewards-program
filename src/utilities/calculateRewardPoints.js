
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const calculateRewardPoints = (transactions) => {
    const monthlyRewards = {};
  
    transactions.forEach((transaction) => {
      const { customerId, purchaseAmount, transactionDate } = transaction;
      const month = monthNames[transactionDate.getMonth()];

      let points = 0;
      const AMOUNT_THRESHOLD_1 = 50;
      const AMOUNT_THRESHOLD_2 = 100;
      const POINTS_PER_DOLLAR_ABOVE_THRESHOLD_2 = 2;
      const POINTS_PER_DOLLAR_BETWEEN_THRESHOLD_1_AND_2 = 1;
  
      if (purchaseAmount > AMOUNT_THRESHOLD_2) {
        points += POINTS_PER_DOLLAR_ABOVE_THRESHOLD_2 * (purchaseAmount - AMOUNT_THRESHOLD_2);
      }
      if (purchaseAmount > AMOUNT_THRESHOLD_1 && purchaseAmount <= AMOUNT_THRESHOLD_2) {
        points += POINTS_PER_DOLLAR_BETWEEN_THRESHOLD_1_AND_2 * (purchaseAmount - AMOUNT_THRESHOLD_1);
      }

      if (!monthlyRewards[customerId]) {
        monthlyRewards[customerId] = {};
      }
      if (!monthlyRewards[customerId][month]) {
        monthlyRewards[customerId][month] = 0;
      }
      monthlyRewards[customerId][month] += points;
    });
  
    return monthlyRewards;
  };