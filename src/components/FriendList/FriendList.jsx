import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList =  ({friends}) =>{
 return(
    <ul className="friend-list">
     { friends.map(friend =>{
        return(  
             <li key= {friend.id} className="item">
            <span className={`${css.status} ${
                friend.isOnline ? css.online : css.offline
              }`}
            /> {friend.isOnline} <span/>
           
            <img className="avatar"
             src={friend.avatar}
             alt="User avatar" 
             width="48"
             />
           
            <p className="name">{friend.name}</p>
            </li>);
        })}
           
    </ul>
  );
};
 
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
      })
    ),
  };