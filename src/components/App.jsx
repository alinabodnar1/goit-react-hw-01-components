import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions'
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import '../../src/index.css';

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
     
      <div className='app-decoration'></div>
        <Statistics
            title="Upload stats"
            dataArray={data} />
        <Statistics dataArray={data} />
      
      <div className='app-decoration'></div>
        <FriendList friendsArray={friends} />
      
      <div className='app-decoration'></div>
        <TransactionHistory items={transactions} />
    </>
  );
};
