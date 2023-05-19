import {Profile} from 'components/profile/Profile'
import user from 'DataBase/user'

export const App = () => {
  return (
    <div>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
