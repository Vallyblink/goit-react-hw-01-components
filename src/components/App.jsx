import {Profile} from 'components/profile/Profile'
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {Transactions} from './Transactions/Transactions';
import user from 'DataBase/user'
import data from 'DataBase/data'
import friends from 'DataBase/friends'
import items from 'DataBase/transactions'

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
       
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <Transactions items = {items} />
   </>
    )
};
