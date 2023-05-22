import React, { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import { fetchTransactions } from './api/api';
import { calculateRewardPoints } from './utilities/calculateRewardPoints';
import RewardsPoints from './components/RewardsPoints/RewardsPoints';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactions = await fetchTransactions();
        const monthlyRewards = calculateRewardPoints(transactions);
        setRewards(monthlyRewards);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header data-testid="app-header" className="App-header">Rewards Program</header>
      <div className='rewards-program-details'>
        {isLoading ? (
          <Loading />
        ) : (
          Object.entries(rewards).map(([customerName, customerRewards]) => (
            <RewardsPoints
              key={customerName}
              customerName={customerName}
              customerRewards={customerRewards}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
